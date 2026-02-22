import React, { useMemo, useState } from 'react';
import { Member, Submission, Track } from '../types';
import { Copy, Check, AlertCircle } from 'lucide-react';

interface MissingReportProps {
    members: Member[];
    submissions: Submission[];
    cohortConfig: {
        startDate: string;
        endDate: string;
        holidayStart?: string;
        holidayEnd?: string;
    };
    // activeTrack is no longer used since we show all tracks grouped
}

const MissingReport: React.FC<MissingReportProps> = ({ members, submissions, cohortConfig }) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

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

                                            <button
                                                onClick={() => handleCopy(member.discordId || "")}
                                                title="Discord ID 복사"
                                                className={`p-1.5 rounded-lg transition-colors border shadow-sm ${copiedId === member.discordId ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-indigo-600'}`}
                                            >
                                                {copiedId === member.discordId ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                            </button>
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
        </div>
    );
};

export default MissingReport;
