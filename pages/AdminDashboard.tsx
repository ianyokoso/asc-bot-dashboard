import React, { useState, useMemo } from 'react';
import { Settings, AlertTriangle, Bell, CheckCircle, Minus, Save } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import LuxuryHeader from '../components/LuxuryHeader';
import LuxuryTrackTabs from '../components/LuxuryTrackTabs';
import LuxurySubmissionTable from '../components/LuxurySubmissionTable';
import MemberManagement from '../components/MemberManagement';
import NotificationTester from '../components/NotificationTester';
import { Member, Submission, Track } from '../types';

interface AdminDashboardProps {
    members: Member[];
    submissions: Submission[];
    isSyncing: boolean;
    onSync: () => void;
    // Config & Setters
    cohortConfig: {
        startDate: string;
        endDate: string;
        holidayStart: string;
        holidayEnd: string;
        name: string;
    };
    setCohortName: (val: string) => void;
    setStartDate: (val: string) => void;
    setEndDate: (val: string) => void;
    setHolidayStart: (val: string) => void;
    setHolidayEnd: (val: string) => void;
    // Times
    sfTime1: string; setSfTime1: (val: string) => void;
    sfTime2: string; setSfTime2: (val: string) => void;
    weeklyTime1: string; setWeeklyTime1: (val: string) => void;
    weeklyTime2: string; setWeeklyTime2: (val: string) => void;
    // Actions
    onApplySettings: () => void;
    onToggleNotifications: () => void;
    notificationsEnabled: boolean;
    onTestNotification: (targetId: string, msgType: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
    members,
    submissions,
    isSyncing,
    onSync,
    cohortConfig,
    setCohortName,
    setStartDate,
    setEndDate,
    setHolidayStart,
    setHolidayEnd,
    sfTime1, setSfTime1,
    sfTime2, setSfTime2,
    weeklyTime1, setWeeklyTime1,
    weeklyTime2, setWeeklyTime2,
    onApplySettings,
    onToggleNotifications,
    notificationsEnabled,
    onTestNotification
}) => {
    const [activeTab, setActiveTab] = useState<'submissions' | 'design_test' | 'members' | 'settings'>('submissions');

    // Track State for Submissions Tab
    const trackOrder = [Track.SHORTFORM, Track.LONGFORM, Track.BUILDER_BASIC, Track.BUILDER_ADVANCED, Track.SALES, Track.AI_AGENT];
    const [activeTrack, setActiveTrack] = useState<Track>(Track.SHORTFORM);

    const currentHeaderTitle = useMemo(() => {
        const displayCohort = cohortConfig.name.endsWith('기') ? cohortConfig.name : `${cohortConfig.name}기`;

        if (activeTab === 'submissions') return `${displayCohort} 과제 제출 현황`;
        if (activeTab === 'design_test') return `${displayCohort} UI Test`;
        if (activeTab === 'members') return '멤버 관리';
        return '봇 설정 (v2.0)';
    }, [activeTab, cohortConfig.name]);

    return (
        <div className="flex h-screen bg-[#F0F4F8] overflow-hidden relative font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
            {/* 1. Visual Foundation */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 z-0"></div>

            {/* Decorative Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-80 animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-80 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[30%] right-[30%] w-[40%] h-[40%] bg-pink-300/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-80 animate-blob animation-delay-4000"></div>

            {/* 2. Admin Structure: Translucent Glass Sidebar */}
            <div className="relative z-20 h-full">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10 h-full">
                {/* Unified Luxury Header */}
                <LuxuryHeader
                    title={currentHeaderTitle}
                    onSync={onSync}
                    isSyncing={isSyncing}
                    startDate={cohortConfig.startDate}
                    endDate={cohortConfig.endDate}
                />

                <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
                    {/* SUBMISSIONS TAB */}
                    {activeTab === 'submissions' && (
                        <div className="flex-1 flex flex-col min-h-0">
                            <LuxuryTrackTabs
                                trackOrder={trackOrder}
                                activeTrack={activeTrack}
                                setActiveTrack={setActiveTrack}
                                members={members}
                            />
                            <LuxurySubmissionTable
                                members={members}
                                submissions={submissions}
                                cohortConfig={cohortConfig}
                                activeTrack={activeTrack}
                            />
                        </div>
                    )}

                    {/* MEMBERS TAB */}
                    {activeTab === 'members' && (
                        <div className="p-4 md:p-8">
                            <div className="bg-white/40 backdrop-blur-3xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/50 overflow-hidden p-1">
                                <MemberManagement members={members} />
                            </div>
                        </div>
                    )}

                    {/* SETTINGS TAB */}
                    {activeTab === 'settings' && (
                        <div className="w-full px-6 md:px-10 pb-20">
                            {/* Header Title Styling */}
                            <div className="flex items-center gap-3 mb-6 px-2">
                                <div className="p-2.5 bg-white/40 rounded-xl backdrop-blur-xl border border-white/60 shadow-sm">
                                    <Settings className="w-5 h-5 text-[#1e293b]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-extrabold text-[#1e293b] tracking-tight">
                                        Bot Configuration
                                    </h2>
                                    <p className="text-xs text-gray-500 font-medium ml-1">설정 변경 후 'Refresh'를 눌러 서버에 반영하세요.</p>
                                </div>
                            </div>

                            {/* Main Stack Layout (Left Aligned, Vertical) */}
                            <div className="flex flex-col gap-4 max-w-4xl">

                                {/* 1. Period Setting */}
                                <div className="p-6 rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>

                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-lg font-bold flex items-center gap-3 text-[#1e293b]">
                                            <span className="w-1.5 h-5 bg-[#1e293b] rounded-full"></span>
                                            기수 및 기간 설정
                                        </h3>
                                        <button
                                            onClick={onApplySettings}
                                            className="px-3 py-1.5 bg-[#1e293b] hover:bg-[#334155] text-white rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            저장
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1 font-sans">Cohort Name</label>
                                            <div className="relative group/input">
                                                <input
                                                    type="text"
                                                    value={cohortConfig.name}
                                                    onChange={(e) => setCohortName(e.target.value)}
                                                    className="w-full pl-4 pr-4 py-3 bg-white/40 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#1e293b]/20 focus:bg-white/60 focus:border-[#1e293b]/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] font-semibold text-gray-800 placeholder-gray-400/70 text-sm"
                                                    placeholder="e.g. 5기"
                                                />
                                            </div>
                                        </div>
                                        {/* Empty slot or additional field */}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1 font-sans">Start Date</label>
                                            <input
                                                type="date"
                                                value={cohortConfig.startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                className="w-full pl-4 pr-4 py-3 bg-white/40 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#1e293b]/20 focus:bg-white/60 focus:border-[#1e293b]/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] font-semibold text-gray-800 cursor-pointer text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1 font-sans">End Date</label>
                                            <input
                                                type="date"
                                                value={cohortConfig.endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                className="w-full pl-4 pr-4 py-3 bg-white/40 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#1e293b]/20 focus:bg-white/60 focus:border-[#1e293b]/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] font-semibold text-gray-800 cursor-pointer text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Holiday Setting */}
                                <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-base font-bold flex items-center gap-2 text-gray-800">
                                            <div className="w-1 h-5 bg-amber-400 rounded-full"></div>
                                            휴무 기간 설정
                                        </h3>
                                        <button
                                            onClick={onApplySettings}
                                            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            저장
                                        </button>
                                    </div>

                                    <div className="p-4 bg-amber-200/20 border border-amber-500/10 rounded-xl backdrop-blur-md mb-4 flex gap-3 items-start shadow-inner">
                                        <div className="p-1.5 bg-amber-400/20 rounded-full text-amber-600 shadow-sm">
                                            <AlertTriangle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-amber-800 text-xs mb-0.5">Warning Period</h4>
                                            <p className="text-xs text-gray-600/90 leading-relaxed font-medium">
                                                이 기간에 포함된 날짜는 통계 및 제출 현황에서 자동으로 <span className="text-amber-700 underline decoration-amber-400/50">제외</span>됩니다.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">Holiday Start</label>
                                            <input
                                                type="date"
                                                value={cohortConfig.holidayStart}
                                                onChange={(e) => setHolidayStart(e.target.value)}
                                                className="w-full pl-4 pr-4 py-2.5 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-amber-400/50 focus:bg-white/80 focus:border-amber-400/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-sm font-medium text-gray-700 cursor-pointer text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">Holiday End</label>
                                            <input
                                                type="date"
                                                value={cohortConfig.holidayEnd}
                                                onChange={(e) => setHolidayEnd(e.target.value)}
                                                className="w-full pl-4 pr-4 py-2.5 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-amber-400/50 focus:bg-white/80 focus:border-amber-400/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-sm font-medium text-gray-700 cursor-pointer text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Global Toggle */}
                                <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-row items-center justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>

                                    <div className="space-y-1 relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Bell className={`w-4 h-4 ${notificationsEnabled ? 'text-indigo-600' : 'text-gray-400'} transition-colors`} />
                                            <h3 className="font-bold text-gray-800 text-base">Global Alarm</h3>
                                        </div>
                                        <p className="text-[11px] text-gray-500 font-medium max-w-[200px]">
                                            봇의 모든 자동 발송 기능을 켜고 끕니다.
                                        </p>
                                    </div>

                                    <div className="relative z-10">
                                        <button
                                            onClick={onToggleNotifications}
                                            className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-500 shadow-inner border border-white/20 ${notificationsEnabled ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-gray-300/50'}`}
                                        >
                                            <div className={`w-6 h-6 bg-white rounded-full shadow-lg transform duration-300 ease-in-out ${notificationsEnabled ? 'translate-x-[24px]' : 'translate-x-0'} flex items-center justify-center`}>
                                                {notificationsEnabled ? <CheckCircle className="w-3.5 h-3.5 text-indigo-500" /> : <Minus className="w-3.5 h-3.5 text-gray-400" />}
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* 4. Schedule Picker */}
                                <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-base font-bold flex items-center gap-2 text-gray-800">
                                            <div className="w-1 h-5 bg-purple-500 rounded-full"></div>
                                            리마인드 스케줄
                                        </h3>
                                        <button
                                            onClick={onApplySettings}
                                            className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
                                        >
                                            <Save className="w-3.5 h-3.5" />
                                            저장
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Row 1 */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-xs font-bold text-gray-700">Daily Missed</span>
                                                <p className="text-[10px] text-gray-500">평일 미제출 알림</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <input type="time" value={sfTime1} onChange={(e) => setSfTime1(e.target.value)} className="flex-1 px-4 py-2.5 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-xs focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                                <input type="time" value={sfTime2} onChange={(e) => setSfTime2(e.target.value)} className="flex-1 px-4 py-2.5 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-xs focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                            </div>
                                        </div>
                                        {/* Divider */}
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                        {/* Row 2 */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <span className="text-xs font-bold text-gray-700">Weekly Alert</span>
                                                <p className="text-[10px] text-gray-500">일요일 독촉 알림</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <input type="time" value={weeklyTime1} onChange={(e) => setWeeklyTime1(e.target.value)} className="flex-1 px-4 py-2.5 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-xs focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                                <input type="time" value={weeklyTime2} onChange={(e) => setWeeklyTime2(e.target.value)} className="flex-1 px-4 py-2.5 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-xs focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Notification Tester */}
                                <div className="p-1 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                                    <NotificationTester members={members} onTest={onTestNotification} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
