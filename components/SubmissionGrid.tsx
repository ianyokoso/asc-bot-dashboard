
import React, { useMemo, useState } from 'react';
import { Member, Submission, Track } from '../types';
import { CheckCircle2, XCircle, Minus, ExternalLink, Calendar, Users } from 'lucide-react';

interface SubmissionGridProps {
  members: Member[];
  submissions: Submission[];
  cohortConfig: {
    startDate: string;
    endDate: string;
    name: string;
  };
}

const SubmissionGrid: React.FC<SubmissionGridProps> = ({ members, submissions, cohortConfig }) => {
  const trackOrder = [Track.SHORTFORM, Track.LONGFORM, Track.BUILDER, Track.SALES, Track.AI_AGENT];
  const [activeTrack, setActiveTrack] = useState<Track>(Track.SHORTFORM);

  // 현재 선택된 트랙의 멤버들
  const filteredMembers = useMemo(() => {
    return members.filter(member => member.track === activeTrack);
  }, [members, activeTrack]);

  // 표시할 날짜 목록 (숏폼: 전체 평일, 기타: 최근 4주 일요일)
  const displayDates = useMemo(() => {
    const dates: string[] = [];

    if (activeTrack === Track.SHORTFORM) {
      const start = new Date(cohortConfig.startDate);
      const end = new Date(cohortConfig.endDate);
      
      if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
        return [];
      }

      let current = new Date(start);
      let safetyCount = 0;
      while (current <= end && safetyCount < 60) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) { // 토/일 제외
          dates.push(current.toISOString().split('T')[0]);
        }
        current.setDate(current.getDate() + 1);
        safetyCount++;
      }
      return dates;
    } else {
      const today = new Date();
      const lastSunday = new Date(today);
      lastSunday.setDate(today.getDate() - today.getDay());
      
      for (let i = 0; i < 4; i++) {
        const d = new Date(lastSunday);
        d.setDate(lastSunday.getDate() - (i * 7));
        dates.push(d.toISOString().split('T')[0]);
      }
      return dates.sort((a, b) => b.localeCompare(a)); // 최신 날짜가 위로 오게 역순 정렬
    }
  }, [activeTrack, cohortConfig.startDate, cohortConfig.endDate]);

  const getStatusIcon = (status: Submission['status'], link?: string) => {
    switch (status) {
      case 'submitted':
        return (
          <div className="group relative flex justify-center items-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noreferrer"
                className="absolute -top-8 hidden group-hover:flex bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 items-center gap-1 border border-gray-700"
              >
                노션 확인 <ExternalLink className="w-2 h-2" />
              </a>
            )}
          </div>
        );
      case 'missed':
        return <XCircle className="w-5 h-5 text-rose-500" />;
      case 'pending':
        return <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></div>;
      default:
        return <Minus className="w-4 h-4 text-gray-200" />;
    }
  };

  const getDayLabel = (dateStr: string) => {
    const d = new Date(dateStr);
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = dayNames[d.getDay()];
    return (
      <div className="flex items-center gap-2">
        <span className="text-[12px] font-bold text-gray-800">{dateStr}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${d.getDay() === 0 ? 'bg-rose-50 text-rose-600' : 'bg-gray-100 text-gray-500'}`}>
          {dayName}
        </span>
      </div>
    );
  };

  const getTrackColor = (track: Track) => {
    switch (track) {
      case Track.SHORTFORM: return 'pink';
      case Track.LONGFORM: return 'purple';
      case Track.BUILDER: return 'blue';
      case Track.SALES: return 'green';
      case Track.AI_AGENT: return 'amber';
      default: return 'gray';
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-320px)] bg-white">
      {/* 트랙 탭 */}
      <div className="bg-white border-b border-gray-100 flex items-center px-4 pt-4 gap-1 overflow-x-auto">
        {trackOrder.map((track) => {
          const isActive = activeTrack === track;
          const color = getTrackColor(track);
          const count = members.filter(m => m.track === track).length;
          return (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                isActive 
                ? `border-${color}-500 text-${color}-600 bg-${color}-50/30` 
                : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {track.toUpperCase()}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? `bg-${color}-100` : 'bg-gray-100'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="font-bold text-gray-700">{activeTrack} 현황</span>
          <span className="hidden sm:inline">
            (행: 날짜 / 열: 멤버 이름)
          </span>
        </div>
        <div className="text-[11px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded border">
          {cohortConfig.startDate} ~ {cohortConfig.endDate} 평일 전체
        </div>
      </div>

      {/* 시트 그리드 (행: 날짜, 열: 멤버) */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-20">
            <tr className="bg-gray-50 shadow-sm">
              <th className="w-48 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-left border-b border-r border-gray-200 bg-gray-50 sticky left-0 z-30 shadow-[1px_0_3px_rgba(0,0,0,0.05)]">
                날짜
              </th>
              {filteredMembers.map((member) => (
                <th key={member.id} className="px-4 py-4 border-b border-gray-200 bg-gray-50 text-center min-w-[100px]">
                  <div className="flex flex-col items-center">
                    <span className="text-[12px] font-bold text-gray-900">{member.name}</span>
                    <span className="text-[9px] text-gray-400 font-normal">{member.discordId.split('#')[0]}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayDates.length > 0 ? (
              displayDates.map(date => (
                <tr key={date} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 border-r border-gray-200 bg-white sticky left-0 z-10 shadow-[1px_0_3px_rgba(0,0,0,0.05)] group-hover:bg-gray-50">
                    {getDayLabel(date)}
                  </td>
                  {filteredMembers.map(member => {
                    const sub = submissions.find(s => s.memberId === member.id && s.date === date);
                    return (
                      <td key={`${date}-${member.id}`} className="p-3 text-center border-r border-gray-100 last:border-r-0">
                        <div className="flex justify-center items-center h-full min-h-[24px]">
                          {getStatusIcon(sub?.status || 'none', sub?.link)}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={filteredMembers.length + 1} className="py-20 text-center text-gray-400 italic">
                  표시할 데이터가 없습니다. 설정 탭에서 기간을 확인해주세요.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 범례 */}
      <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-6 text-[11px] font-medium text-gray-500">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> <span>제출 완료</span>
        </div>
        <div className="flex items-center gap-1.5">
          <XCircle className="w-4 h-4 text-rose-500" /> <span>미제출</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div> <span>검토 중</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Minus className="w-4 h-4 text-gray-200" /> <span className="text-gray-400">과제 없음</span>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGrid;
