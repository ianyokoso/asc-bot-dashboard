import React, { useMemo, useState } from 'react';
import { Member, Submission, Track } from '../types';
import { Copy, Check, AlertCircle, UserX } from 'lucide-react';

const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

// 대시보드 트랙명(영문) → 노션 트랙명(한글) 매핑
const TRACK_TO_NOTION_NAME: Record<string, string> = {
    [Track.SHORTFORM]: '크리에이터 숏폼 트랙',
    [Track.LONGFORM]: '크리에이터 롱폼 트랙',
    [Track.BUILDER_BASIC]: '빌더 기초 트랙',
    [Track.BUILDER_ADVANCED]: '빌더 심화 트랙',
    [Track.SALES]: '세일즈 실전 트랙',
    [Track.AI_AGENT]: 'AI 에이전트 트랙',
};

interface MissingReportProps {
    members: Member[];
    submissions: Submission[];
    cohortConfig: {
        startDate: string;
        endDate: string;
        holidayStart?: string;
        holidayEnd?: string;
    };
    onMemberDropped?: () => void; // 탈락 처리 후 데이터 새로고침 콜백
}

const MissingReport: React.FC<MissingReportProps> = ({ members, submissions, cohortConfig, onMemberDropped }) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [droppingId, setDroppingId] = useState<string | null>(null); // 현재 탈락 처리 중인 멤버
    const [confirmTarget, setConfirmTarget] = useState<{ memberId: string; memberName: string; track: Track; allTracks: Track[] } | null>(null);

    const handleDropFromTrack = async (memberId: string, track: Track) => {
        const notionTrackName = TRACK_TO_NOTION_NAME[track];
        if (!notionTrackName) return;

        setDroppingId(memberId);
        try {
            const res = await fetch(`${API_BASE_URL}/api/drop-track`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ memberId, trackName: notionTrackName }),
            });
            const data = await res.json();
            if (data.status === 'success') {
                setConfirmTarget(null);
                if (onMemberDropped) onMemberDropped();
            } else {
                alert(`탈락 처리 실패: ${data.message}`);
            }
        } catch (e) {
            alert(`오류가 발생했습니다: ${e}`);
        } finally {
            setDroppingId(null);
        }
    };

    const trackOrder = [Track.SHORTFORM, Track.LONGFORM, Track.BUILDER_BASIC, Track.BUILDER_ADVANCED, Track.SALES, Track.AI_AGENT];

    // Calculate Past Expected Dates for ANY Track (Shortform Mon-Fri, Others Sunday)
    const getPastExpectedDates = (trackType: 'shortform' | 'longform') => {
        const dates: string[] = [];
        const start = new Date(cohortConfig.startDate);
        const end = new Date(cohortConfig.endDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) return [];

        let current = new Date(start);
        let safetyCount = 0;

        while (current <= end && current < today && safetyCount < 120) {
            const day = current.getDay();
            const dateStr = current.toISOString().split('T')[0];

            let isHoliday = false;
            if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
                if (dateStr >= cohortConfig.holidayStart && dateStr <= cohortConfig.holidayEnd) {
                    isHoliday = true;
                }
            }

            if (!isHoliday) {
                if (trackType === 'shortform') {
                    if (day !== 0 && day !== 6) dates.push(dateStr); // Mon-Fri
                } else {
                    if (day === 0) dates.push(dateStr); // Sunday only
                }
            }

            current.setDate(current.getDate() + 1);
            safetyCount++;
        }
        return dates.sort((a, b) => b.localeCompare(a)); // Newest first
    };

    const pastExpectedDatesSF = useMemo(() => getPastExpectedDates('shortform'), [cohortConfig.startDate, cohortConfig.endDate, cohortConfig.holidayStart, cohortConfig.holidayEnd]);
    const pastExpectedDatesLF = useMemo(() => getPastExpectedDates('longform'), [cohortConfig.startDate, cohortConfig.endDate, cohortConfig.holidayStart, cohortConfig.holidayEnd]);

    // Calculate Missing Data grouped by Track
    const groupedMissingData = useMemo(() => {
        const groups: Partial<Record<Track, { member: Member, missingDates: string[] }[]>> = {};

        members.forEach(member => {
            const memberTracks = member.tracks && member.tracks.length > 0 ? member.tracks : [member.track];

            memberTracks.forEach(track => {
                if (!track) return;

                const expectedDates = track === Track.SHORTFORM ? pastExpectedDatesSF : pastExpectedDatesLF;
                if (expectedDates.length === 0) return;

                const missingDates = expectedDates.filter(date => {
                    const hasSubmitted = submissions.some(s =>
                        s.memberId === member.id &&
                        s.date === date &&
                        (s.tracks ? s.tracks.includes(track) : true) &&
                        s.status === 'submitted'
                    );
                    return !hasSubmitted;
                });

                // Dropout Candidates:
                // Shortform: 5 or more
                // Weekly (Others): 1 or more
                const threshold = track === Track.SHORTFORM ? 5 : 1;
                if (missingDates.length >= threshold) {
                    if (!groups[track]) groups[track] = [];
                    groups[track]!.push({ member, missingDates });
                }
            });
        });

        // Sort by missing count descending within each group
        Object.keys(groups).forEach(key => {
            const t = key as Track;
            groups[t]?.sort((a, b) => b.missingDates.length - a.missingDates.length);
        });

        return groups;
    }, [members, submissions, pastExpectedDatesSF, pastExpectedDatesLF]);

    const handleCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const totalMissingMembers = Object.values(groupedMissingData).reduce((acc: number, list) => acc + ((list as any[])?.length || 0), 0);

    if (totalMissingMembers === 0) {
        return (
            <div className="w-full mt-6 bg-emerald-50/50 backdrop-blur-md border border-emerald-100/50 rounded-2xl p-6 text-center text-emerald-600 font-bold shadow-sm">
                현재 탈락 대상자(4회 이상 누락)가 없습니다. 모두 열심히 참여하고 있습니다! 🎉
            </div>
        );
    }

    return (
        <div className="w-full mt-6 bg-white/40 backdrop-blur-3xl border border-rose-100/50 rounded-3xl p-6 shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-rose-100/50 pb-4">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-xl">
                    <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-extrabold text-slate-800 text-lg">탈락 대상자 명단</h3>
                    <p className="text-sm font-medium text-slate-500">
                        숏폼 5회 이상 / 주간 과제 1회 이상 미제출한 <strong>{totalMissingMembers}명</strong>의 인원입니다.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {trackOrder.map(track => {
                    const list = groupedMissingData[track];
                    if (!list || list.length === 0) return null;

                    return (
                        <div key={track} className="flex flex-col gap-3">
                            <h4 className="font-bold text-slate-700 bg-slate-100/50 px-4 py-2 rounded-xl inline-flex items-center self-start shadow-sm border border-slate-200/50">
                                {track} <span className="ml-2 text-rose-500 text-xs font-black">{list.length}명</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {list.map(({ member, missingDates }, index) => (
                                    <div key={`${member.id}-${index}`} className="flex flex-col bg-white/90 border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">

                                        {/* Danger Stripe */}
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-400"></div>

                                        <div className="flex justify-between items-start mb-3 pl-2">
                                            <div className="flex gap-3 items-center">
                                                {/* Avatar */}
                                                <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                                                    {member.profileImage ? (
                                                        <img src={member.profileImage} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-indigo-400 font-bold text-sm">{member.name.charAt(0)}</span>
                                                    )}
                                                </div>

                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-800 tracking-tight">{member.name}</span>
                                                    <span className="text-xs text-slate-500 font-medium">@{member.discordNickname || member.discordUsername}</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-1">
                                                <button
                                                    onClick={() => {
                                                        const memberTracks = member.tracks && member.tracks.length > 0 ? member.tracks : [member.track];
                                                        setConfirmTarget({ memberId: member.id, memberName: member.name, track, allTracks: memberTracks });
                                                    }}
                                                    title={`${track} 트랙에서 탈락 처리`}
                                                    className="p-1.5 rounded-lg transition-colors border shadow-sm bg-rose-50 border-rose-200 text-rose-500 hover:bg-rose-100 hover:text-rose-700"
                                                >
                                                    <UserX className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleCopy(member.discordId || "")}
                                                    title="Discord ID 복사"
                                                    className={`p-1.5 rounded-lg transition-colors border shadow-sm ${copiedId === member.discordId ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-indigo-600'}`}
                                                >
                                                    {copiedId === member.discordId ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-auto pl-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={`text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md ${track === Track.SHORTFORM ? 'bg-rose-100 text-rose-600' : 'bg-red-500 text-white'}`}>
                                                    {missingDates.length}회 누락 {track === Track.SHORTFORM ? '(경고/탈락)' : '(즉시 탈락 대상)'}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {missingDates.slice(0, 5).map(date => (
                                                    <span key={date} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                                        {date.substring(5).replace('-', '/')}
                                                    </span>
                                                ))}
                                                {missingDates.length > 5 && (
                                                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                                                        +{missingDates.length - 5}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 탈락 처리 확인 모달 */}
            {confirmTarget && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={() => setConfirmTarget(null)}>
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-rose-100 rounded-xl">
                                <UserX className="w-5 h-5 text-rose-600" />
                            </div>
                            <h3 className="font-extrabold text-lg text-slate-800">탈락 처리 확인</h3>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 mb-4">
                            <p className="text-sm text-slate-700">
                                <strong>{confirmTarget.memberName}</strong>님을
                                <span className="text-rose-600 font-bold"> {confirmTarget.track}</span> 트랙에서 탈락 처리합니다.
                            </p>
                            {confirmTarget.allTracks.length > 1 ? (
                                <p className="text-xs text-slate-500 mt-2">
                                    이 멤버는 {confirmTarget.allTracks.length}개 트랙에 등록되어 있습니다.
                                    <strong> {confirmTarget.track}만</strong> 제거되고 나머지 트랙은 유지됩니다.
                                    <br />
                                    <span className="text-slate-400">
                                        유지: {confirmTarget.allTracks.filter(t => t !== confirmTarget.track).join(', ')}
                                    </span>
                                </p>
                            ) : (
                                <p className="text-xs text-rose-500 mt-2 font-bold">
                                    마지막 트랙이므로 전체 현황표에서도 사라집니다.
                                </p>
                            )}
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setConfirmTarget(null)}
                                className="px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
                            >
                                취소
                            </button>
                            <button
                                onClick={() => handleDropFromTrack(confirmTarget.memberId, confirmTarget.track)}
                                disabled={droppingId !== null}
                                className="px-4 py-2 text-sm font-bold text-white bg-rose-500 rounded-xl hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {droppingId ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        처리 중...
                                    </>
                                ) : (
                                    '탈락 처리'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MissingReport;
