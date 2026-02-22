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
    activeTrack: Track;
}

const MissingReport: React.FC<MissingReportProps> = ({ members, submissions, cohortConfig, activeTrack }) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Filter Members by Track
    const filteredMembers = useMemo(() => {
        return members.filter(member => {
            if (member.tracks && member.tracks.length > 0) {
                return member.tracks.includes(activeTrack);
            }
            return member.track === activeTrack;
        });
    }, [members, activeTrack]);

    // Calculate Past Expected Dates
    const pastExpectedDates = useMemo(() => {
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
                if (activeTrack === Track.SHORTFORM) {
                    if (day !== 0 && day !== 6) dates.push(dateStr); // Mon-Fri
                } else {
                    if (day === 0) dates.push(dateStr); // Sunday only
                }
            }

            current.setDate(current.getDate() + 1);
            safetyCount++;
        }
        return dates.sort((a, b) => b.localeCompare(a)); // Newest first
    }, [activeTrack, cohortConfig.startDate, cohortConfig.endDate, cohortConfig.holidayStart, cohortConfig.holidayEnd]);

    // Calculate Missing Data
    const missingData = useMemo(() => {
        if (pastExpectedDates.length === 0) return [];

        const missingList = filteredMembers.map(member => {
            const missingDates = pastExpectedDates.filter(date => {
                const hasSubmitted = submissions.some(s =>
                    s.memberId === member.id &&
                    s.date === date &&
                    (s.tracks ? s.tracks.includes(activeTrack) : true) &&
                    s.status === 'submitted'
                );
                return !hasSubmitted;
            });

            return {
                member,
                missingDates
            };
        }).filter(item => item.missingDates.length > 0);

        // Sort by ascending missing count (most urgent missing at the top)
        missingList.sort((a, b) => b.missingDates.length - a.missingDates.length);

        return missingList;
    }, [filteredMembers, pastExpectedDates, submissions, activeTrack]);

    const handleCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    if (missingData.length === 0) {
        return (
            <div className="w-full mt-6 bg-emerald-50/50 backdrop-blur-md border border-emerald-100/50 rounded-2xl p-6 text-center text-emerald-600 font-bold shadow-sm">
                조회된 미제출 내역이 없습니다. (현재 트랙 멤버 모두 과제 제출 완료 🎉)
            </div>
        );
    }

    return (
        <div className="w-full mt-6 bg-white/40 backdrop-blur-3xl border border-rose-100/50 rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-rose-100/50 pb-4">
                <div className="p-2 bg-rose-100 text-rose-600 rounded-xl">
                    <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-extrabold text-slate-800 text-lg">미제출자 특별 관리 현황</h3>
                    <p className="text-sm font-medium text-slate-500">
                        기한이 지난 과제를 아직 제출하지 않은 <strong>{missingData.length}명</strong>의 인원입니다.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 custom-scrollbar max-h-[600px] overflow-y-auto pr-2 pb-2">
                {missingData.map(({ member, missingDates }, index) => (
                    <div key={`${member.id}-${index}`} className="flex flex-col bg-white/90 border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
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

                        <div className="mt-auto">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md ${missingDates.length >= 4 ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`}>
                                    {missingDates.length}회 누락
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
};

export default MissingReport;
