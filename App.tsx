
import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar, Users, Settings, Save, AlertTriangle, CheckCircle, Bell, Mail, Beaker
} from 'lucide-react';
import { mockMembers, generateSubmissions } from './mockData';
import { Track, Member, Submission } from './types';
import SubmissionGrid from './components/SubmissionGrid';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';

// [NEW] Simple Toast Component
interface ToastProps {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-medium transform transition-all duration-300 z-50 flex items-center gap-2 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
      {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
      {message}
    </div>
  );
};

// Use Vercel Proxy (vercel.json) or Vite Proxy (vite.config.ts)
// [FIX] URL Logic: Use Proxy for Local & Vercel (HTTPS), Direct IP for Server (HTTP)
const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

const NotificationTester: React.FC<{ members: Member[], onTest: (targetId: string, msgType: string) => void }> = ({ members, onTest }) => {
  const [targetType, setTargetType] = useState<'me' | 'user'>('me');
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [msgType, setMsgType] = useState<string>('숏폼 미제출 리마인더');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTest = () => {
    let targetId = '1392850552416768072'; // Default to admin for 'me'
    if (targetType === 'user') {
      if (!selectedUserId) return alert("테스트 대상을 선택해주세요.");
      targetId = selectedUserId;
    }
    onTest(targetId, msgType);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Mail className="w-5 h-5 text-indigo-500" /> 알림 테스트
      </h3>

      <div className="space-y-6">
        {/* Target Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">테스트 대상 선택</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={targetType === 'me'} onChange={() => setTargetType('me')} className="w-4 h-4 text-indigo-600" />
              <span>내 DM으로만 보내기</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" checked={targetType === 'user'} onChange={() => setTargetType('user')} className="w-4 h-4 text-indigo-600" />
              <span>특정 사용자에게 보내기</span>
            </label>
          </div>

          {targetType === 'user' && (
            <div className="mt-2 relative w-full md:w-1/2">
              {/* Trigger Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 bg-white flex justify-between items-center"
              >
                <span className={selectedUserId ? "text-black" : "text-gray-500"}>
                  {selectedUserId
                    ? (() => {
                      const m = members.find(m => m.discordId === selectedUserId);
                      return m ? `@${m.name}/${m.discordId}/` : "사용자 선택...";
                    })()
                    : "사용자 선택..."}
                </span>
                <span className="text-gray-400 text-xs">▼</span>
              </button>

              {/* Dropdown Panel */}
              {isDropdownOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 flex flex-col">
                  {/* Search Input (Sticky Top) */}
                  <div className="p-2 border-b border-gray-100 bg-gray-50 rounded-t-md sticky top-0">
                    <input
                      type="text"
                      placeholder="이름 검색..."
                      className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                    />
                  </div>

                  {/* Scrollable List */}
                  <div className="overflow-y-auto flex-1 custom-scrollbar">
                    {members
                      .filter(m =>
                        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (m.track && m.track.toLowerCase().includes(searchTerm.toLowerCase()))
                      )
                      .map(m => (
                        <div
                          key={m.discordId}
                          onClick={() => {
                            setSelectedUserId(m.discordId);
                            setIsDropdownOpen(false);
                            setSearchTerm(''); // Optional: Clear search on select
                          }}
                          className={`p-2 text-sm cursor-pointer hover:bg-indigo-50 ${selectedUserId === m.discordId ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-gray-700'}`}
                        >
                          @{m.name}/{m.discordId}/ <span className="text-xs text-gray-400">({m.track})</span>
                        </div>
                      ))}

                    {members.filter(m =>
                      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      (m.track && m.track.toLowerCase().includes(searchTerm.toLowerCase()))
                    ).length === 0 && (
                        <div className="p-3 text-sm text-gray-400 text-center">검색 결과 없음</div>
                      )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Message Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">알림 유형</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {['숏폼 미제출 리마인더', '주간 과제 1차 리마인더 (오후)', '주간 과제 2차 리마인더 (저녁)', '패널티 경고 (4회)', '패널티 탈락 (5회)'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer p-2 border rounded-lg hover:bg-gray-50 border-gray-200">
                  <input type="radio" name="msgType" checked={msgType === type} onChange={() => setMsgType(type)} className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleTest}
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Beaker className="w-5 h-5" /> 테스트 알림 보내기
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'members' | 'settings'>('submissions');
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // 기수 설정 상태 (기본값: 1월 3일 ~ 1월 26일)
  // 기수 설정 상태 (기본값: 2월)
  // 기수 설정 상태 (Fixed Defaults as requested)
  const [cohortName, setCohortName] = useState('6기');
  const [startDate, setStartDate] = useState('2026-02-09');
  const [endDate, setEndDate] = useState('2026-03-09');

  // 휴무 금지 기간 상태 (설날 연휴 예시)
  const [holidayStart, setHolidayStart] = useState('2024-02-09');
  const [holidayEnd, setHolidayEnd] = useState('2024-02-12');

  // 리마인드 시간 상태
  const [sfTime1, setSfTime1] = useState('12:00');
  const [sfTime2, setSfTime2] = useState('18:00');
  const [weeklyTime1, setWeeklyTime1] = useState('10:00');
  const [weeklyTime2, setWeeklyTime2] = useState('18:00');

  // 알림 전체 활성화 상태
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // [NEW] Toast State
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
    message: '',
    type: 'success',
    visible: false
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type, visible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  // Load settings on mount
  useEffect(() => {
    // 1. Load Settings
    fetch(`${API_BASE_URL}/api/settings`)
      .then(res => res.json())
      .then(data => {
        if (data.cohortName) setCohortName(data.cohortName);
        if (data.startDate) setStartDate(data.startDate);
        if (data.endDate) setEndDate(data.endDate);
        if (data.holidayStart) setHolidayStart(data.holidayStart);
        if (data.holidayEnd) setHolidayEnd(data.holidayEnd);
        if (data.notificationsEnabled !== undefined) setNotificationsEnabled(data.notificationsEnabled);
      })
      .catch(err => console.error("Failed to load settings:", err));

    // 2. Load Real Data with Auto-Sync Fallback
    const loadData = async () => {
      setIsSyncing(true); // Show loading initially
      try {
        console.log("Fetching cached data...");
        const res = await fetch(`${API_BASE_URL}/api/data`);
        const result = await res.json();

        if (result.status === 'success') {
          console.log("Cached data loaded successfully");
          setMembers(result.data.members);
          setSubmissions(result.data.submissions);
          setIsSyncing(false);
        } else {
          // If cache missing or error, trigger Auto-Sync
          console.warn("Cached data missing, triggering auto-sync...", result.message);
          await handleSync(true); // Pass true to suppress alerts for auto-sync
        }
      } catch (err) {
        console.error("Failed to load cached data:", err);
        // Fallback to sync on network error too?
        console.log("Attempting auto-sync due to cache fetch error...");
        await handleSync(true);
      }
    };

    loadData();
  }, []);

  const handleSync = async (isAuto = false) => {
    setIsSyncing(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/sync`, { method: 'POST' });
      const result = await res.json();

      if (result.status === 'success') {
        const newData = result.data;
        setMembers(newData.members);
        setSubmissions(newData.submissions);
        if (!isAuto) alert("✅ 동기화 완료! Notion 최신 데이터로 갱신되었습니다.");
        else console.log("✅ Auto-sync completed.");
      } else {
        if (!isAuto) alert(`❌ 동기화 실패: ${result.message}`);
        else console.error(`❌ Auto-sync failed: ${result.message}`);
      }
    } catch (err) {
      console.error(err);
      if (!isAuto) alert(`❌ 서버 접속 실패: ${err} \n(admin_server.py가 켜져 있나요?)`);
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
      holidayEnd,
      notificationsEnabled
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

  // [NEW] Immediate Toggle Handler
  const handleToggleNotifications = async () => {
    const newState = !notificationsEnabled;
    setNotificationsEnabled(newState); // Optimistic Update

    try {
      const res = await fetch(`${API_BASE_URL}/api/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notificationsEnabled: newState })
      });
      const result = await res.json();

      if (result.status !== 'success') {
        // Revert on failure
        setNotificationsEnabled(!newState);
        showToast(`설정 저장 실패: ${result.message}`, 'error');
      } else {
        console.log("✅ Notification setting updated immediately.");
        showToast(newState ? "알림이 활성화되었습니다." : "알림이 비활성화되었습니다.", newState ? 'success' : 'error');
      }
    } catch (err) {
      setNotificationsEnabled(!newState);
      showToast(`서버 통신 오류: ${err}`, 'error');
    }
  };

  // [NEW] Test Notification Handler
  const handleTestNotification = async (targetId: string, msgType: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/test-notification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetId, msgType })
      });
      const result = await res.json();
      if (result.status === 'success') {
        showToast(`✅ 테스트 알림 발송 요청 완료!`, 'success');
      } else {
        showToast(`❌ 발송 요청 실패: ${result.message}`, 'error');
      }
    } catch (err) {
      showToast(`❌ 서버 통신 오류: ${err}`, 'error');
    }
  };

  const currentHeaderTitle = useMemo(() => {
    if (activeTab === 'submissions') return `${cohortName} 과제 제출 현황`;
    if (activeTab === 'members') return '멤버 관리';
    if (activeTab === 'submissions') return `${cohortName} 과제 제출 현황`;
    if (activeTab === 'members') return '멤버 관리';
    return '봇 설정 (v2.0 - Red Patch)';
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

        <Toast
          message={toast.message}
          type={toast.type}
          visible={toast.visible}
          onClose={hideToast}
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
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">이름</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">디스코드 ID</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">사용자 ID</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">트랙</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">노션 연동</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">가입일</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {members.map(member => (
                      <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">{member.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">{member.discordId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-400">{member.id}</td>
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

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Bell className="w-5 h-5 text-indigo-500" /> 알림 전체 설정
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">봇의 모든 자동 알림(과제 리마인드 등)을 켜거나 끕니다.</p>
                  </div>
                  <button
                    onClick={handleToggleNotifications}
                    className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${notificationsEnabled ? 'bg-indigo-500' : 'bg-rose-500'}`}
                  >
                    <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${notificationsEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
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

              {/* [NEW] Notification Tester UI */}
              <NotificationTester members={members} onTest={handleTestNotification} />

            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
