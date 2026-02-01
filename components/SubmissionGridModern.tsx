
import React, { useMemo, useState } from 'react';
import { Member, Submission, Track, SubmissionStatus } from '../types';
import { CheckCircle2, XCircle, Clock, Minus, ExternalLink, Calendar, Info } from 'lucide-react';

interface SubmissionGridProps {
    members: Member[];
    submissions: Submission[];
    cohortConfig: {
        startDate: string;
        endDate: string;
        name: string;
        holidayStart?: string;
        holidayEnd?: string;
    };
}

// [NEW] Avatar Component for robust error handling
const MemberAvatar: React.FC<{ member: Member }> = ({ member }) => {
    const [imgError, setImgError] = useState(false);

    if (member.profileImage && !imgError) {
        return (
            <img
                src={member.profileImage}
                alt={member.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-200 shadow-sm"
                onError={() => setImgError(true)}
                referrerPolicy="no-referrer"
            />
        );
    }

    return (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-xs font-bold border border-indigo-200">
            {member.name.charAt(0)}
        </div>
    );
};

const SubmissionGridModern: React.FC<SubmissionGridProps> = ({ members, submissions, cohortConfig }) => {
    // UNASSIGNED 제거됨
    const trackOrder = [Track.SHORTFORM, Track.LONGFORM, Track.BUILDER_BASIC, Track.BUILDER_ADVANCED, Track.SALES, Track.AI_AGENT];
    const [activeTrack, setActiveTrack] = useState<Track>(Track.SHORTFORM);

    // 현재 선택된 트랙의 멤버들
    const filteredMembers = useMemo(() => {
        return members.filter(member => {
            if (member.tracks && member.tracks.length > 0) {
                return member.tracks.includes(activeTrack);
            }
            return member.track === activeTrack;
        });
    }, [members, activeTrack]);

    // 날짜 계산 (기존 로직 유지)
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

    // --- 디자인 요소: 상태 칩 (Color Chips) ---
    const getStatusChip = (status: Submission['status'], link?: string, date?: string) => {
        switch (status) {
            case 'submitted':
                return (
                    <div className="group relative w-full h-full flex justify-center items-center">
                        {/* Color Chip */}
                        <div className="w-8 h-8 rounded-xl bg-emerald-400/20 border border-emerald-400/50 flex items-center justify-center shadow-sm backdrop-blur-sm transition-all hover:bg-emerald-400/30 hover:scale-105 cursor-pointer">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        </div>

                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col bg-white/90 backdrop-blur-md border border-white/20 text-gray-800 text-xs px-3 py-2 rounded-lg shadow-xl z-50 min-w-[120px]">
                            <div className="font-bold text-emerald-600 mb-1 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> 제출 완료
                            </div>
                            <div className="text-[10px] text-gray-500 mb-2">
                                {date}
                            </div>
                            {link && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded hover:bg-emerald-100 transition-colors"
                                >
                                    <ExternalLink className="w-3 h-3" /> 과제 보기
                                </a>
                            )}
                        </div>
                    </div>
                );
            case 'missed':
                return (
                    <div className="group relative w-full h-full flex justify-center items-center">
                        <div className="w-8 h-8 rounded-xl bg-gray-200/50 border border-gray-300 flex items-center justify-center shadow-inner">
                            <XCircle className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                            미제출
                        </div>
                    </div>
                );
            case 'pending':
                return (
                    <div className="group relative w-full h-full flex justify-center items-center">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center animate-pulse">
                            <Clock className="w-4 h-4 text-amber-600" />
                        </div>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-amber-600 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                            확인 중
                        </div>
                    </div>
                );
            default:
                return <div className="w-1 h-1 rounded-full bg-gray-300"></div>;
        }
    };

    // Today's date for highlighting
    const todayStr = new Date().toISOString().split('T')[0];

    // Status Renderer

    const getDayLabel = (dateStr: string) => {
        // ... (Existing logic for day label)
        const d = new Date(dateStr);
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        const dayName = dayNames[d.getDay()];
        let isHoliday = false;
        if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
            if (dateStr >= cohortConfig.holidayStart && dateStr <= cohortConfig.holidayEnd) isHoliday = true;
        }

        return (
            <div className="flex flex-col items-center gap-1">
                <span className={`text-[12px] font-bold ${isHoliday ? 'text-rose-500' : 'text-gray-700'}`}>
                    {dateStr.substring(5).replace('-', '/')}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${isHoliday ? 'bg-rose-100 text-rose-500' :
                    dayName === '일' ? 'bg-rose-50 text-rose-500' :
                        'bg-gray-100 text-gray-400'
                    }`}>
                    {isHoliday ? '휴무' : dayName}
                </span>
            </div>
        );
    };

    // [NEW] Status Renderer function
    const renderStatus = (status: SubmissionStatus, dateStr: string) => {
        const d = new Date(dateStr);
        const day = d.getDay(); // 0: Sun, 6: Sat
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        const dayName = dayNames[day];

        switch (status) {
            case 'submitted':
                return (
                    <div className="flex justify-center items-center w-full h-full">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 drop-shadow-sm" />
                    </div>
                );
            case 'missed':
                return (
                    <div className="flex justify-center items-center w-full h-full">
                        {/* Show specific icon based on if it's weekend or not? No just X */}
                        <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                            <span className="text-rose-500 font-bold text-xs">✕</span>
                        </div>
                    </div>
                );
            case 'pending':
                return (
                    <div className="flex justify-center items-center w-full h-full" title="확인 중">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center animate-pulse">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                    </div>
                );
            // Late case if needed, or default
            default:
                return <div className="w-1 h-1 rounded-full bg-gray-200 mx-auto"></div>;
        }
    };

    return (
        // Glassmorphism Container Background
        <div className="flex flex-col h-[calc(100vh-320px)] rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden relative ring-1 ring-white/50 w-full">
            {/* Decorative Gradient Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* 트랙 탭 (Glass Style) */}
            <div className="flex items-center px-6 pt-6 gap-2 overflow-x-auto pb-2 custom-scrollbar z-10 w-full">
                {trackOrder.map((track) => {
                    const isActive = activeTrack === track;
                    const count = members.filter(m => {
                        if (m.tracks && m.tracks.length > 0) return m.tracks.includes(track);
                        return m.track === track;
                    }).length;

                    return (
                        <button
                            key={track}
                            onClick={() => setActiveTrack(track)}
                            className={`
                                relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border flex-shrink-0
                                ${isActive
                                    ? 'bg-white/80 border-indigo-200 text-indigo-700 shadow-md ring-1 ring-indigo-100 backdrop-blur-md'
                                    : 'bg-white/30 border-white/40 text-gray-500 hover:bg-white/50 hover:text-gray-700'
                                }
                            `}
                        >
                            {track}
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-200/50 text-gray-500'}`}>
                                {count}
                            </span>
                            {isActive && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-indigo-500 rounded-t-full"></div>
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="px-6 py-2 flex items-center justify-between z-10">
                <div className="text-gray-500 text-xs flex items-center gap-2">
                    <Info className="w-3 h-3" />
                    <span className="font-medium bg-white/50 px-2 py-1 rounded-lg">Total Columns: {displayDates.length}</span>
                </div>
            </div>

            {/* Grid Container */}
            <div className="flex-1 overflow-auto custom-scrollbar px-6 pb-6 z-10">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-xl overflow-hidden border border-white/40 shadow-sm bg-white/30 backdrop-blur-sm">
                        <table className="divide-y divide-gray-200/50 w-full">
                            <thead className="bg-gray-50/80 backdrop-blur-md sticky top-0 z-30">
                                <tr>
                                    {/* Sticky Corner Header */}
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider sticky left-0 z-40 bg-gray-50/95 backdrop-blur-md shadow-[2px_0_5px_rgba(0,0,0,0.02)] border-b border-gray-200/50 w-[280px] min-w-[280px]">
                                        멤버
                                    </th>
                                    {displayDates.map((date) => {
                                        const isToday = date === todayStr;
                                        return (
                                            <th key={date} className={`px-2 py-3 text-center min-w-[70px] border-b border-gray-200/50 relative ${isToday ? 'bg-indigo-50/60' : ''}`}>
                                                {isToday && <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400"></div>}
                                                {getDayLabel(date)}
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100/50 bg-white/20">
                                {filteredMembers.length > 0 ? (
                                    filteredMembers.map((member, idx) => (
                                        <tr key={member.id} className={`transition-colors hover:bg-indigo-50/30 ${idx % 2 === 0 ? 'bg-white/20' : 'bg-transparent'}`}>
                                            {/* Sticky Row Header (Member Name) */}
                                            <td className="px-4 py-3 sticky left-0 z-20 bg-white/90 backdrop-blur-md shadow-[2px_0_5px_rgba(0,0,0,0.02)] border-r border-gray-100/50 w-[280px] min-w-[280px]">
                                                <div className="flex items-center gap-3 h-full">
                                                    <MemberAvatar member={member} />
                                                    <div className="flex flex-col justify-center">
                                                        <span className="text-sm font-bold text-gray-800 leading-tight">{member.name}</span>
                                                        <span className="text-[10px] text-gray-500 font-mono mt-0.5 font-medium leading-tight">{member.discordUsername || member.discordId}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {displayDates.map((date) => {
                                                const sub = submissions.find(s => {
                                                    if (s.memberId !== member.id || s.date !== date) return false;
                                                    if (s.tracks && s.tracks.length > 0) return s.tracks.includes(activeTrack);
                                                    return true;
                                                });

                                                let isHoliday = false;
                                                if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
                                                    if (date >= cohortConfig.holidayStart && date <= cohortConfig.holidayEnd) isHoliday = true;
                                                }

                                                const todayStr = new Date().toISOString().split('T')[0];
                                                let displayStatus: Submission['status'] = sub?.status || 'none';
                                                if (!sub && date < todayStr && date >= member.joinedAt && !isHoliday) {
                                                    displayStatus = 'missed';
                                                }

                                                const isToday = date === todayStr;

                                                return (
                                                    <td key={`${member.id}-${date}`} className={`px-2 py-3 border-b border-gray-100/30 text-center relative w-auto min-w-[70px] hover:bg-white/40 transition-colors duration-200 cursor-pointer ${isToday ? 'bg-indigo-50/40' : ''}`}>
                                                        {renderStatus(displayStatus as any, date)}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={displayDates.length + 1} className="py-20 text-center text-gray-400 italic">
                                            No members in this track.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmissionGridModern;
