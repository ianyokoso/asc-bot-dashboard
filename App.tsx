
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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'members' | 'settings'>('submissions');
  const [members] = useState<Member[]>(mockMembers);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // 기수 설정 상태 (기본값: 1월 3일 ~ 1월 26일)
  const [cohortName, setCohortName] = useState('6기');
  const [startDate, setStartDate] = useState('2024-01-03');
  const [endDate, setEndDate] = useState('2024-01-26');

  // 리마인드 시간 상태
  const [sfTime1, setSfTime1] = useState('12:00');
  const [sfTime2, setSfTime2] = useState('18:00');
  const [weeklyTime1, setWeeklyTime1] = useState('10:00');
  const [weeklyTime2, setWeeklyTime2] = useState('18:00');

  useEffect(() => {
    setSubmissions(generateSubmissions());
  }, []);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setSubmissions(generateSubmissions());
      setIsSyncing(false);
    }, 1000);
  };

  const handleApplySettings = () => {
    setIsSyncing(true);
    setTimeout(() => {
      alert(`${cohortName} 설정이 성공적으로 적용되었습니다. 봇이 새로운 기간에 맞춰 데이터를 다시 수집합니다.`);
      handleSync();
      setIsSyncing(false);
    }, 1500);
  };

  const currentHeaderTitle = useMemo(() => {
    if (activeTab === 'submissions') return `${cohortName} 과제 제출 현황`;
    if (activeTab === 'members') return '멤버 관리';
    return '봇 설정';
  }, [activeTab, cohortName]);

  const cohortConfig = useMemo(() => ({
    startDate,
    endDate,
    name: cohortName
  }), [startDate, endDate, cohortName]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          title={currentHeaderTitle}
          onSync={handleSync}
          isSyncing={isSyncing}
        />

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {activeTab === 'submissions' && (
            <div className="space-y-6">
              {/* 상단 통계 카드 */}
              <DashboardStats members={members} submissions={submissions} />

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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">이름</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">디스코드</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">트랙</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">노션 연동</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">가입일</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {members.map(member => (
                    <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.discordId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          member.track === Track.BUILDER ? 'bg-indigo-100 text-indigo-700' :
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
          )}

          {activeTab === 'settings' && (
            <div className="max-w-4xl space-y-6 pb-20">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                 <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500" /> 기수 기간 설정
                    </h3>
                    <button 
                      onClick={handleApplySettings}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                    >
                      <Save className="w-4 h-4" /> 설정 적용 및 노션 생성
                    </button>
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
