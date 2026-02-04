import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mockMembers } from './mockData';
import { Member, Submission } from './types';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Toast from './components/Toast';

// Use Vercel Proxy (vercel.json) or Vite Proxy (vite.config.ts)
// [FIX] URL Logic: Use Proxy for Local & Vercel (HTTPS), Direct IP for Server (HTTP)
const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

const App: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // 기수 및 기간 설정
  const [cohortName, setCohortName] = useState('6기');
  const [startDate, setStartDate] = useState('2026-02-09');
  const [endDate, setEndDate] = useState('2026-03-09');

  // 휴무 금지 기간 상태
  const [holidayStart, setHolidayStart] = useState('');
  const [holidayEnd, setHolidayEnd] = useState('');

  // 리마인드 시간 상태
  const [sfTime1, setSfTime1] = useState('12:00');
  const [sfTime2, setSfTime2] = useState('18:00');
  const [weeklyTime1, setWeeklyTime1] = useState('10:00');
  const [weeklyTime2, setWeeklyTime2] = useState('18:00');

  // 알림 전체 활성화 상태
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Toast State
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
        // Load Time Settings
        if (data.sfTime1) setSfTime1(data.sfTime1);
        if (data.sfTime2) setSfTime2(data.sfTime2);
        if (data.weeklyTime1) setWeeklyTime1(data.weeklyTime1);
        if (data.weeklyTime2) setWeeklyTime2(data.weeklyTime2);
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
          console.warn("Cached data missing, triggering auto-sync...", result.message);
          await handleSync(true); // Pass true to suppress alerts for auto-sync
        }
      } catch (err) {
        console.error("Failed to load cached data:", err);
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
        if (!isAuto) showToast("✅ 동기화 완료! Notion 최신 데이터로 갱신되었습니다.", 'success');
        else console.log("✅ Auto-sync completed.");
      } else {
        if (!isAuto) showToast(`❌ 동기화 실패: ${result.message}`, 'error');
        else console.error(`❌ Auto-sync failed: ${result.message}`);
      }
    } catch (err) {
      console.error(err);
      if (!isAuto) showToast(`❌ 서버 접속 실패: ${err} \n(admin_server.py가 켜져 있나요?)`, 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  // Generic Helper for Saving
  const saveSettings = async (payload: any, successMessage: string) => {
    setIsSyncing(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, trigger: 'manual' })
      });
      const result = await res.json();
      if (result.status === 'success') {
        showToast(`✅ ${successMessage}\n(서버 반영까지 약 1-2분 소요)`, 'success');
      } else {
        showToast(`❌ 오류: ${result.message}`, 'error');
      }
    } catch (err) {
      showToast(`❌ 서버 접속 실패: ${err} (admin_server.py가 켜져 있나요?)`, 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  const saveCohort = () => saveSettings({ cohortName, startDate, endDate }, "기수/기간 설정 저장 완료!");
  const saveHoliday = () => saveSettings({ holidayStart, holidayEnd }, "휴무 설정 저장 완료!");
  const saveSchedule = () => saveSettings({ sfTime1, sfTime2, weeklyTime1, weeklyTime2 }, "스케줄 설정 저장 완료!");

  // Immediate Toggle Handler
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

  // Test Notification Handler
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

  // Run Bot Command Handler
  const handleRunCommand = async (command: string, force: boolean = false) => {
    setIsSyncing(true); // Show loading
    try {
      const res = await fetch(`${API_BASE_URL}/api/run-command`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command, cohort: cohortName, force })
      });
      const result = await res.json();

      if (result.status === 'success') {
        showToast(`✅ 명령 실행 성공: ${result.message}`, 'success');
      } else {
        showToast(`❌ 실행 실패: ${result.message}`, 'error');
      }
    } catch (err) {
      showToast(`❌ 서버 통신 오류: ${err}`, 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  const cohortConfig = useMemo(() => ({
    startDate,
    endDate,
    name: cohortName,
    holidayStart,
    holidayEnd
  }), [startDate, endDate, cohortName, holidayStart, holidayEnd]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <UserDashboard
            members={members}
            submissions={submissions}
            isSyncing={isSyncing}
            onSync={() => handleSync(false)}
            cohortConfig={cohortConfig}
          />
        } />
        <Route path="/admin" element={
          <AdminDashboard
            members={members}
            submissions={submissions}
            isSyncing={isSyncing}
            onSync={() => handleSync(false)}
            cohortConfig={cohortConfig}
            setCohortName={setCohortName}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setHolidayStart={setHolidayStart}
            setHolidayEnd={setHolidayEnd}
            sfTime1={sfTime1} setSfTime1={setSfTime1}
            sfTime2={sfTime2} setSfTime2={setSfTime2}
            weeklyTime1={weeklyTime1} setWeeklyTime1={setWeeklyTime1}
            weeklyTime2={weeklyTime2} setWeeklyTime2={setWeeklyTime2}
            onSaveCohort={saveCohort}
            onSaveHoliday={saveHoliday}
            onSaveSchedule={saveSchedule}
            onToggleNotifications={handleToggleNotifications}
            notificationsEnabled={notificationsEnabled}
            onTestNotification={handleTestNotification}
            onRunCommand={handleRunCommand}
          />
        } />
      </Routes>
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={hideToast}
      />
    </BrowserRouter>
  );
};

export default App;
