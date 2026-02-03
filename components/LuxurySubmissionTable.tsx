import React, { useMemo, useRef, useEffect } from 'react';
import { Member, Submission, Track, SubmissionStatus } from '../types';
import { CheckCircle2, Clock, Info } from 'lucide-react';

interface LuxurySubmissionTableProps {
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

const LuxurySubmissionTable: React.FC<LuxurySubmissionTableProps> = ({ members, submissions, cohortConfig, activeTrack }) => {

    // Ref for the scrollable container
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // 1. Filter Members by Track
    const filteredMembers = useMemo(() => {
        return members.filter(member => {
            if (member.tracks && member.tracks.length > 0) {
                return member.tracks.includes(activeTrack);
            }
            return member.track === activeTrack;
        });
    }, [members, activeTrack]);

    // 2. Calculate Date Columns
    const displayDates = useMemo(() => {
        const dates: string[] = [];
        const start = new Date(cohortConfig.startDate);
        const end = new Date(cohortConfig.endDate);

        if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) return [];

        let current = new Date(start);
        let safetyCount = 0;
        while (current <= end && safetyCount < 120) {
            const day = current.getDay();
            const dateStr = current.toISOString().split('T')[0];

            if (activeTrack === Track.SHORTFORM) {
                if (day !== 0 && day !== 6) dates.push(dateStr);
            } else {
                if (day === 0) dates.push(dateStr);
            }
            current.setDate(current.getDate() + 1);
            safetyCount++;
        }
        return dates.sort((a, b) => a.localeCompare(b));
    }, [activeTrack, cohortConfig.startDate, cohortConfig.endDate]);

    // Auto-Scroll to Today (or Nearest Past Date) Effect
    useEffect(() => {
        const scrollToDate = (targetDateStr: string) => {
            const targetElement = document.getElementById(`header-date-${targetDateStr}`);
            if (scrollContainerRef.current && targetElement) {
                const container = scrollContainerRef.current;
                const targetLeft = targetElement.offsetLeft;
                const containerWidth = container.clientWidth;
                const elementWidth = targetElement.clientWidth;
                const scrollLeft = targetLeft - (containerWidth / 2) + (elementWidth / 2);

                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
                return true;
            }
            return false;
        };

        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        if (!scrollToDate(todayStr)) {
            let tempDate = new Date(today);
            for (let i = 0; i < 7; i++) {
                tempDate.setDate(tempDate.getDate() - 1);
                const prevDateStr = tempDate.toISOString().split('T')[0];
                if (scrollToDate(prevDateStr)) break;
            }
        }

    }, [displayDates, activeTrack]);


    // 3. Status Renderer
    const renderStatus = (status: SubmissionStatus) => {
        switch (status) {
            case 'submitted':
                return (
                    <div className="flex justify-center items-center w-full h-full">
                        {/* Premium Gradient Checkmark */}
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:scale-110 transition-transform duration-300 border border-white/20">
                            <span className="text-white font-bold text-[9px]">✓</span>
                        </div>
                    </div>
                );
            case 'missed':
                return (
                    <div className="flex justify-center items-center w-full h-full">
                        {/* Premium Gradient Cross */}
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center shadow-[0_4px_12px_rgba(244,63,94,0.3)] hover:scale-110 transition-transform duration-300 border border-white/20">
                            <span className="text-white font-bold text-[7px]">✕</span>
                        </div>
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex justify-center items-center w-full h-full" title="Checking...">
                        <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                    </div>
                );
            default:
                return (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-100"></div>
                    </div>
                );
        }
    };

    const getDayLabel = (dateStr: string) => {
        const d = new Date(dateStr);
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayName = dayNames[d.getDay()];
        let isHoliday = false;
        if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
            if (dateStr >= cohortConfig.holidayStart && dateStr <= cohortConfig.holidayEnd) isHoliday = true;
        }

        return (
            <div className="flex flex-col items-center gap-0.5 md:gap-1">
                <span className={`text-[10px] md:text-[12px] font-bold ${isHoliday ? 'text-rose-400' : 'text-slate-400'} uppercase tracking-wider`}>
                    {dayName}
                </span>
                <span className={`text-[11px] md:text-[13px] font-bold ${isHoliday ? 'text-rose-500' : 'text-slate-700'}`}>
                    {dateStr.substring(5).replace('-', '/')}
                </span>
            </div>
        );
    };


    return (
        <div className="flex-1 w-full h-full px-4 md:px-8 pb-4 md:pb-8 pt-1 md:pt-4 overflow-hidden flex flex-col">
            {/* Table Container - Deep Glass */}
            <div className="flex-1 bg-white/30 backdrop-blur-3xl border border-white/50 rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col relative w-full">

                {/* Meta Header */}
                <div className="px-4 md:px-8 py-2 md:py-4 border-b border-white/30 flex items-center justify-between bg-white/10">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                        <Info className="w-3.5 h-3.5" />
                        <span>Showing {displayDates.length} Days</span>
                    </div>
                    {/* Optional: Legend or Filters could go here */}
                </div>

                {/* Scrollable Table Area */}
                <div ref={scrollContainerRef} className="flex-1 overflow-auto custom-scrollbar w-full relative">
                    <table className="w-full border-collapse min-w-[full] md:min-w-[1200px]">
                        <thead className="sticky top-0 z-20 bg-white/80 backdrop-blur-md shadow-sm">
                            <tr>
                                {/* Fixed Member Column Header - High Opacity Background to prevent bleed-through */}
                                {/* Increased mobile width to 130px to accommodate avatar */}
                                <th className="sticky left-0 z-30 w-[130px] min-w-[130px] md:w-[280px] md:min-w-[280px] p-3 md:p-6 text-left bg-white/95 backdrop-blur-xl border-b border-r border-indigo-50/50 shadow-[4px_0_12px_rgba(0,0,0,0.02)]">
                                    <span className="text-xs font-extrabold text-[#1e293b] uppercase tracking-wider pl-1 md:pl-2">Member</span>
                                </th>
                                {/* Date Headers */}
                                {displayDates.map(date => (
                                    <th
                                        key={date}
                                        id={`header-date-${date}`}
                                        className="min-w-[50px] md:min-w-[80px] py-2 md:py-4 border-b border-indigo-50/50 text-center relative group bg-white/50"
                                    >
                                        {getDayLabel(date)}
                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/30 transition-colors pointer-events-none"></div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMembers.map((member) => (
                                <tr key={member.discordId} className="group hover:bg-white/40 transition-colors">
                                    {/* Fixed Member Column - High Opacity Background for Mobile fix */}
                                    <td className="sticky left-0 z-10 w-[130px] md:w-[280px] p-2 md:p-4 border-r border-indigo-50/30 bg-white/95 md:bg-white/95 backdrop-blur-xl group-hover:bg-indigo-50/80 md:group-hover:bg-white/95 transition-colors shadow-[4px_0_12px_rgba(0,0,0,0.02)]">
                                        <div className="flex items-center gap-2 md:gap-4 md:pl-2">
                                            {/* Avatar (Now Visible on Mobile - Small Size) */}
                                            <div className="flex w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-indigo-100 to-white shadow-sm border border-white items-center justify-center overflow-hidden flex-shrink-0">
                                                {member.profileImage ? (
                                                    <img src={member.profileImage} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-indigo-400 font-bold text-[10px] md:text-sm">{member.name.charAt(0)}</span>
                                                )}
                                            </div>
                                            {/* Name Info */}
                                            <div className="flex flex-col min-w-0">
                                                <div className="flex items-center gap-1 md:gap-2">
                                                    <span className="font-bold text-[#1e293b] text-xs md:text-sm truncate max-w-[90px] md:max-w-full">{member.name}</span>
                                                    {/* Track Badge (Hidden on Mobile) */}

                                                </div>
                                                <span className="hidden md:block text-[11px] text-slate-400 font-medium truncate">@{member.discordUsername || member.discordNickname}</span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Submission Cells */}
                                    {displayDates.map(date => {
                                        const sub = submissions.find(s => s.memberId === member.id && s.date === date);
                                        const status = sub ? sub.status : 'pending';

                                        let finalStatus: SubmissionStatus = 'none';

                                        if (sub) {
                                            finalStatus = sub.status;
                                        } else {
                                            const targetDate = new Date(date).getTime();
                                            const todayDate = new Date().setHours(0, 0, 0, 0);
                                            if (targetDate < todayDate) finalStatus = 'missed';
                                        }

                                        return (
                                            <td key={`${member.discordId}-${date}`} className="border-b border-indigo-50/30 p-1 md:p-2 text-center relative">
                                                {/* Cell Content */}
                                                <div className="w-full h-9 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all hover:bg-white/50 cursor-default">
                                                    {renderStatus(finalStatus)}
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LuxurySubmissionTable;
