
import React, { useState, useEffect, useMemo } from 'react';
import {
  LayoutGrid,
  Users,
  Settings,
  Bell,
  RefreshCw,
  CheckCircle,
  BarChart3,
  AlertTriangle,
  Calendar,
  Save
} from 'lucide-react';
import { mockMembers, generateSubmissions } from './mockData';
import { Track, Member, Submission } from './types';
import SubmissionGrid from './components/SubmissionGrid';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'members' | 'settings'>('submissions');
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // 기수 설정 상태 (기본값: 1월 3일 ~ 1월 26일)
  // 기수 설정 상태 (기본값: 2월)
  const [cohortName, setCohortName] = useState('7기');
  const [startDate, setStartDate] = useState('2024-02-01');
  const [endDate, setEndDate] = useState('2024-02-29');

  // 휴무 금지 기간 상태 (설날 연휴 예시)
  const [holidayStart, setHolidayStart] = useState('2024-02-09');
  const [holidayEnd, setHolidayEnd] = useState('2024-02-12');

  // 리마인드 시간 상태
  const [sfTime1, setSfTime1] = useState('12:00');
  const [sfTime2, setSfTime2] = useState('18:00');
  const [weeklyTime1, setWeeklyTime1] = useState('10:00');
  const [weeklyTime2, setWeeklyTime2] = useState('18:00');

  // Load settings on mount
  useEffect(() => {
    // Load Settings on Mount
    fetch(`${API_BASE_URL}/api/settings`)
      .then(res => res.json())
      .then(data => {
        if (data.cohortName) setCohortName(data.cohortName);
        if (data.startDate) setStartDate(data.startDate);
        if (data.endDate) setEndDate(data.endDate);
        if (data.holidayStart) setHolidayStart(data.holidayStart);
        if (data.holidayEnd) setHolidayEnd(data.holidayEnd);
      })
      .catch(err => console.error("Failed to load settings:", err));

    // Load Real Data on Mount
    fetch(`${API_BASE_URL}/api/data`)
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success') {
          setMembers(result.data.members);
          setSubmissions(result.data.submissions);
        }
      })
      .catch(err => console.error("Failed to load data:", err));
  }, []);

  const handleSync = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/sync`, { method: 'POST' });
      const result = await res.json();

      if (result.status === 'success') {
        const newData = result.data;
        // Type casting might be implicit or strictly handled, assuming JSON matches 
        setMembers(newData.members);
        setSubmissions(newData.submissions);
        alert("✅ 동기화 완료! Notion 최신 데이터로 갱신되었습니다.");
      } else {
        alert(`❌ 동기화 실패: ${result.message}`);
      }
    } catch (err) {
      console.error(err);
      alert(`❌ 서버 접속 실패: ${err} \n(admin_server.py가 켜져 있나요?)`);
      // Fallback: If server fails, maybe keep old data or show mocks? 
      // For now, let's just alert.
    } finally {
      setIsSyncing(false);
    }
  };

  const handleApplySettings = async () => {
    setIsSyncing(true);

    const payload = {
      cohortName,
      startDate,
      endDate,
      holidayStart,
      holidayEnd
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (result.status === 'success') {
        alert(`✅ 설정 저장 및 배포가 시작되었습니다!\n(서버 반영까지 약 1-2분 소요)`);
      } else {
        alert(`❌ 오류: ${result.message}`);
      }
    } catch (err) {
      alert(`❌ 서버 접속 실패: ${err} (admin_server.py가 켜져 있나요?)`);
    } finally {
      setIsSyncing(false);
    }
  };

  const currentHeaderTitle = useMemo(() => {
    if (activeTab === 'submissions') return `${cohortName} 과제 제출 현황`;
    if (activeTab === 'members') return '멤버 관리';
    return '봇 설정';
  }, [activeTab, cohortName]);

  const cohortConfig = useMemo(() => ({
    startDate,
    endDate,
    name: cohortName,
    holidayStart,
    holidayEnd
  }), [startDate, endDate, cohortName, holidayStart, holidayEnd]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header
          title={currentHeaderTitle}
          onSync={handleSync}
          onSave={activeTab === 'settings' ? handleApplySettings : undefined}
          isSyncing={isSyncing}
        />

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {activeTab === 'submissions' && (
            <div className="space-y-6">
              {/* 상단 통계 카드 */}


              {/* 메인 제출 그리드 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <SubmissionGrid
                  members={members}
                  submissions={submissions}
                  cohortConfig={cohortConfig}
                />
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="space-y-6">
              <DashboardStats members={members} submissions={submissions} />
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">디스코드</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">이름</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">트랙</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">노션 연동</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">가입일</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {members.map(member => (
                      <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-base font-bold text-indigo-600">{member.discordId}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">{member.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${(member.track === Track.BUILDER_BASIC || member.track === Track.BUILDER_ADVANCED) ? 'bg-indigo-100 text-indigo-700' :
                            member.track === Track.SHORTFORM ? 'bg-pink-100 text-pink-700' :
                              member.track === Track.LONGFORM ? 'bg-purple-100 text-purple-700' :
                                member.track === Track.SALES ? 'bg-green-100 text-green-700' :
                                  'bg-amber-100 text-amber-700'
                            }`}>
                            {member.track}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {member.notionSync ?
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> :
                            <AlertTriangle className="w-5 h-5 text-amber-500 mx-auto" />
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joinedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-4xl space-y-6 pb-20">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" /> 기수 기간 설정
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-tight">현재 기수</label>
                    <input
                      type="text"
                      value={cohortName}
                      onChange={(e) => setCohortName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-tight">시작일</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-tight">종료일</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" /> 휴무/제외 기간 설정
                </h3>
                <div className="p-4 bg-amber-50 rounded-xl space-y-4">
                  <p className="text-sm text-gray-600">
                    이 기간에 포함된 날짜는 과제 제출 현황 그리드에서 제외됩니다. (설날, 공휴일 등)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-tight">제외 시작일</label>
                      <input
                        type="date"
                        value={holidayStart}
                        onChange={(e) => setHolidayStart(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-tight">제외 종료일</label>
                      <input
                        type="date"
                        value={holidayEnd}
                        onChange={(e) => setHolidayEnd(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-indigo-500" /> 리마인드 스케줄 시간 지정
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 bg-gray-50 rounded-xl">
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-700">숏폼 미제출 알림</p>
                      <p className="text-xs text-gray-500">평일 미제출자 전송</p>
                    </div>
                    <div className="flex gap-4">
                      <input type="time" value={sfTime1} onChange={(e) => setSfTime1(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded shadow-sm bg-white" />
                      <input type="time" value={sfTime2} onChange={(e) => setSfTime2(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded shadow-sm bg-white" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-700">주간 알림 (일요일)</p>
                      <p className="text-xs text-gray-500">마감 임박 독촉</p>
                    </div>
                    <div className="flex gap-4">
                      <input type="time" value={weeklyTime1} onChange={(e) => setWeeklyTime1(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded shadow-sm bg-white" />
                      <input type="time" value={weeklyTime2} onChange={(e) => setWeeklyTime2(e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded shadow-sm bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
