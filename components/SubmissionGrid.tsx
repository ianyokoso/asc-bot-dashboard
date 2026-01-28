
import React, { useMemo, useState } from 'react';
import { Member, Submission, Track } from '../types';
import { CheckCircle2, XCircle, Minus, ExternalLink, Calendar } from 'lucide-react';

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

const SubmissionGrid: React.FC<SubmissionGridProps> = ({ members, submissions, cohortConfig }) => {
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

  // 표시할 날짜 목록 (숏폼: 전체 평일, 기타: 전체 일요일) - 기수 시작~종료일 전체
  const displayDates = useMemo(() => {
    const dates: string[] = [];
    const start = new Date(cohortConfig.startDate);
    const end = new Date(cohortConfig.endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      return [];
    }

    let current = new Date(start);
    // 안전장치: 최대 120일까지만 (약 4달)
    let safetyCount = 0;
    while (current <= end && safetyCount < 120) {
      const day = current.getDay();
      const dateStr = current.toISOString().split('T')[0];

      if (activeTrack === Track.SHORTFORM) {
        // 숏폼: 토/일 제외하고 매일
        if (day !== 0 && day !== 6) {
          dates.push(dateStr);
        }
      } else {
        // 롱폼/빌더 등: 매주 일요일만
        if (day === 0) {
          // 단, 첫 주차 과제가 "1/5(일) 시작 -> 1/12(일) 마감" 형태라면 
          // 1/5(시작일)이 일요일인 경우 포함할지 말지 결정해야 함.
          // 보통 과제 '마감일' 기준이므로 매주 일요일을 다 표시하면 됨.
          dates.push(dateStr);
        }
      }
      current.setDate(current.getDate() + 1);
      safetyCount++;
    }

    // 날짜 오름차순 정렬 (과거 -> 미래, 즉 왼쪽 -> 오른쪽)
    return dates.sort((a, b) => a.localeCompare(b));
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

    // 휴무일 체크
    let isHoliday = false;
    if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
      if (dateStr >= cohortConfig.holidayStart && dateStr <= cohortConfig.holidayEnd) {
        isHoliday = true;
      }
    }

    return (
      <div className="flex flex-col items-center gap-1">
        <span className={`text-[12px] font-bold ${isHoliday ? 'text-rose-600' : 'text-gray-800'}`}>
          {dateStr.substring(5)}
        </span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded ${isHoliday ? 'bg-rose-100 text-rose-600 font-bold' :
          d.getDay() === 0 ? 'bg-rose-50 text-rose-600' : 'bg-gray-100 text-gray-500'
          }`}>
          {isHoliday ? '휴무' : dayName}
        </span>
      </div>
    );
  };

  const getTrackColor = (track: Track) => {
    switch (track) {
      case Track.SHORTFORM: return 'pink';
      case Track.LONGFORM: return 'purple';
      case Track.BUILDER_BASIC: return 'blue';
      case Track.BUILDER_ADVANCED: return 'cyan';
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
          const count = members.filter(m => {
            if (m.tracks && m.tracks.length > 0) return m.tracks.includes(track);
            return m.track === track;
          }).length;
          return (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${isActive
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
            (행: 멤버 이름 / 열: 날짜)
          </span>
        </div>
        <div className="text-[11px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded border">
          {cohortConfig.startDate} ~ {cohortConfig.endDate} 평일 전체
        </div>
      </div>

      {/* 시트 그리드 (행: 멤버, 열: 날짜) */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-20">
            <tr className="bg-gray-50 shadow-sm">
              <th className="w-48 px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-left border-b border-r border-gray-200 bg-gray-50 sticky left-0 z-30 shadow-[1px_0_3px_rgba(0,0,0,0.05)]">
                멤버
              </th>
              {displayDates.map((date) => {
                let isHoliday = false;
                if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
                  if (date >= cohortConfig.holidayStart && date <= cohortConfig.holidayEnd) {
                    isHoliday = true;
                  }
                }
                return (
                  <th key={date} className={`px-2 py-3 border-b border-gray-200 text-center min-w-[80px] ${isHoliday ? 'bg-rose-50' : 'bg-gray-50'}`}>
                    {getDayLabel(date)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredMembers.length > 0 ? (
              filteredMembers.map(member => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 border-r border-gray-200 bg-white sticky left-0 z-10 shadow-[1px_0_3px_rgba(0,0,0,0.05)] group-hover:bg-gray-50">
                    <div className="flex items-center">
                      <span className="text-[13px] font-bold text-gray-900">{member.discordId}</span>
                    </div>
                  </td>
                  {displayDates.map((date) => {
                    const sub = submissions.find(s => {
                      // 1. 멤버와 날짜 일치
                      if (s.memberId !== member.id || s.date !== date) return false;

                      // 2. 트랙 일치 여부 (submissions에 tracks 정보가 있는 경우)
                      if (s.tracks && s.tracks.length > 0) {
                        return s.tracks.includes(activeTrack);
                      }

                      // 3. tracks 정보가 없으면(하위호환) 일단 표시 (또는 숨김 정책 결정)
                      // 여기서는 ' tracks가 있으면 검사, 없으면 통과'로 하되, 
                      // 숏폼/빌더가 섞이는 문제 해결을 위해선 tracks가 필수적으로 있어야 함.
                      // 일단 없는 경우는 관대하게 표시
                      return true;
                    });

                    let isHoliday = false;
                    if (cohortConfig.holidayStart && cohortConfig.holidayEnd) {
                      if (date >= cohortConfig.holidayStart && date <= cohortConfig.holidayEnd) {
                        isHoliday = true;
                      }
                    }

                    const todayStr = new Date().toISOString().split('T')[0];
                    let displayStatus: Submission['status'] = sub?.status || 'none';
                    const link = sub?.link;

                    // 제출 내역이 없고, 날짜가 과거이며, 가입 이후이고, 휴무일이 아니면 'missed' 처리
                    if (!sub && date < todayStr && date >= member.joinedAt && !isHoliday) {
                      displayStatus = 'missed';
                    }

                    return (
                      <td key={`${member.id}-${date}`} className={`p-3 text-center border-r border-gray-100 last:border-r-0 ${isHoliday ? 'bg-rose-50/30' : ''}`}>
                        <div className="flex justify-center items-center h-full min-h-[24px]">
                          {isHoliday ? (
                            <span className="text-rose-300 font-bold">-</span>
                          ) : (
                            getStatusIcon(displayStatus, link)
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={displayDates.length + 1} className="py-20 text-center text-gray-400 italic">
                  해당 트랙에 멤버가 없습니다.
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
