import React, { useState, useMemo } from 'react';
import { Calendar, Settings, AlertTriangle, Bell, CheckCircle, Minus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SubmissionGridModern from '../components/SubmissionGridModern';
import MemberManagement from '../components/MemberManagement';
import NotificationTester from '../components/NotificationTester';
import { Member, Submission } from '../types';

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
    // Times (Refactor: maybe group them?)
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

    const currentHeaderTitle = useMemo(() => {
        const displayCohort = cohortConfig.name.endsWith('기') ? cohortConfig.name : `${cohortConfig.name}기`;

        if (activeTab === 'submissions') return `${displayCohort} 과제 제출 현황`;
        if (activeTab === 'design_test') return `${displayCohort} 과제 제출 현황 (UI Test)`;
        if (activeTab === 'members') return '멤버 관리';
        return '봇 설정 (v2.0 - Red Patch)';
    }, [activeTab, cohortConfig.name]);

    return (
        <div className="flex h-screen bg-[#F3F4F6] overflow-hidden relative font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
            {/* 1. Visual Foundation: Vibrant Pastel Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100/50 z-0"></div>

            {/* Decorative Blobs (Enhanced for depth) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-300/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-80 animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-300/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-80 animate-blob animation-delay-2000"></div>
            <div className="absolute top-[30%] right-[30%] w-[40%] h-[40%] bg-pink-200/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-80 animate-blob animation-delay-4000"></div>

            {/* 2. Admin Structure: Translucent Glass Sidebar */}
            <div className="relative z-20 h-full">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
                <Header
                    title={currentHeaderTitle}
                    onSync={onSync}
                    onSave={activeTab === 'settings' ? onApplySettings : undefined}
                    isSyncing={isSyncing}
                    startDate={cohortConfig.startDate}
                    endDate={cohortConfig.endDate}
                />

                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    {activeTab === 'submissions' && (
                        <div className="space-y-6">
                            {/* Main Table: Large Frosted Glass Panel */}
                            <div className="bg-white/40 backdrop-blur-3xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10 pointer-events-none"></div>
                                <div className="relative z-10">
                                    <SubmissionGridModern
                                        members={members}
                                        submissions={submissions}
                                        cohortConfig={cohortConfig}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'members' && (
                        <div className="bg-white/40 backdrop-blur-3xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden p-1">
                            <MemberManagement members={members} />
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="max-w-4xl space-y-8 pb-20 mx-auto">
                            {/* Header Title Styling */}
                            <div className="flex items-center gap-3 mb-4 px-2">
                                <div className="p-3 bg-white/40 rounded-2xl backdrop-blur-xl border border-white/60 shadow-sm">
                                    <Settings className="w-6 h-6 text-[#1e293b]" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-[#1e293b] tracking-tight">
                                        Bot Configuration
                                    </h2>
                                    <p className="text-sm text-gray-500 font-medium ml-1">봇의 동작 환경을 설정합니다.</p>
                                </div>
                            </div>

                            {/* Section 1: Period Setting (Glass Input Style) */}
                            <div className="p-8 rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>

                                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-[#1e293b]">
                                    <span className="w-1.5 h-6 bg-[#1e293b] rounded-full"></span>
                                    기수 및 기간 설정
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 font-sans">Cohort Name</label>
                                        <div className="relative group/input">
                                            <input
                                                type="text"
                                                value={cohortConfig.name}
                                                onChange={(e) => setCohortName(e.target.value)}
                                                className="w-full pl-5 pr-5 py-3.5 bg-white/40 border border-white/50 rounded-2xl focus:ring-2 focus:ring-[#1e293b]/20 focus:bg-white/60 focus:border-[#1e293b]/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] font-semibold text-gray-800 placeholder-gray-400/70"
                                                placeholder="e.g. 5기"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 font-sans">Start Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={cohortConfig.startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                className="w-full pl-5 pr-10 py-3.5 bg-white/40 border border-white/50 rounded-2xl focus:ring-2 focus:ring-[#1e293b]/20 focus:bg-white/60 focus:border-[#1e293b]/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] font-semibold text-gray-800 cursor-pointer"
                                            />
                                            <Calendar className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1 font-sans">End Date</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={cohortConfig.endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                                className="w-full pl-5 pr-10 py-3.5 bg-white/40 border border-white/50 rounded-2xl focus:ring-2 focus:ring-[#1e293b]/20 focus:bg-white/60 focus:border-[#1e293b]/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] font-semibold text-gray-800 cursor-pointer"
                                            />
                                            <Calendar className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Holiday Setting */}
                            <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-800">
                                    <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                                    휴무 기간 설정
                                </h3>

                                <div className="p-5 bg-amber-200/20 border border-amber-500/10 rounded-2xl backdrop-blur-md mb-6 flex gap-4 items-start shadow-inner">
                                    <div className="p-2 bg-amber-400/20 rounded-full text-amber-600 shadow-sm">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-800 text-sm mb-1">Warning Period</h4>
                                        <p className="text-sm text-gray-600/90 leading-relaxed font-medium">
                                            이 기간에 포함된 날짜는 통계 및 제출 현황에서 자동으로 <span className="text-amber-700 underline decoration-amber-400/50">제외</span>됩니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Holiday Start</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={cohortConfig.holidayStart}
                                                onChange={(e) => setHolidayStart(e.target.value)}
                                                className="w-full pl-4 pr-10 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-amber-400/50 focus:bg-white/80 focus:border-amber-400/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-sm font-medium text-gray-700 cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Holiday End</label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                value={cohortConfig.holidayEnd}
                                                onChange={(e) => setHolidayEnd(e.target.value)}
                                                className="w-full pl-4 pr-10 py-3 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-amber-400/50 focus:bg-white/80 focus:border-amber-400/30 outline-none transition-all duration-300 backdrop-blur-sm shadow-sm font-medium text-gray-700 cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 & 4: Notifications & Schedule */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Global Toggle */}
                                <div className="md:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>

                                    <div className="space-y-2 relative z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Bell className={`w-5 h-5 ${notificationsEnabled ? 'text-indigo-600' : 'text-gray-400'} transition-colors`} />
                                            <h3 className="font-bold text-gray-800">Global Alarm</h3>
                                        </div>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">
                                            봇의 모든 자동 발송 기능을<br />제어합니다.
                                        </p>
                                    </div>

                                    <div className="mt-8 flex justify-end relative z-10">
                                        <button
                                            onClick={onToggleNotifications}
                                            className={`w-16 h-9 flex items-center rounded-full p-1 transition-all duration-500 shadow-inner border border-white/20 ${notificationsEnabled ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-gray-300/50'}`}
                                        >
                                            <div className={`w-7 h-7 bg-white rounded-full shadow-lg transform duration-300 ease-in-out ${notificationsEnabled ? 'translate-x-[26px]' : 'translate-x-0'} flex items-center justify-center`}>
                                                {notificationsEnabled ? <CheckCircle className="w-4 h-4 text-indigo-500" /> : <Minus className="w-4 h-4 text-gray-400" />}
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Schedule Picker */}
                                <div className="md:col-span-2 p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-800">
                                        <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                                        리마인드 스케줄
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Row 1 */}
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-32">
                                                <span className="text-sm font-bold text-gray-700">Daily Missed</span>
                                                <p className="text-[10px] text-gray-500">평일 미제출 알림</p>
                                            </div>
                                            <div className="flex-1 flex gap-3">
                                                <input type="time" value={sfTime1} onChange={(e) => setSfTime1(e.target.value)} className="flex-1 px-4 py-2 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-sm focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                                <input type="time" value={sfTime2} onChange={(e) => setSfTime2(e.target.value)} className="flex-1 px-4 py-2 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-sm focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                            </div>
                                        </div>
                                        {/* Divider */}
                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                        {/* Row 2 */}
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-32">
                                                <span className="text-sm font-bold text-gray-700">Weekly Alert</span>
                                                <p className="text-[10px] text-gray-500">일요일 독촉 알림</p>
                                            </div>
                                            <div className="flex-1 flex gap-3">
                                                <input type="time" value={weeklyTime1} onChange={(e) => setWeeklyTime1(e.target.value)} className="flex-1 px-4 py-2 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-sm focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                                <input type="time" value={weeklyTime2} onChange={(e) => setWeeklyTime2(e.target.value)} className="flex-1 px-4 py-2 bg-white/50 border border-white/60 rounded-xl text-center font-mono text-sm focus:ring-2 focus:ring-purple-500/50 outline-none backdrop-blur-sm shadow-sm transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notification Tester UI */}
                            <NotificationTester members={members} onTest={onTestNotification} />

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
