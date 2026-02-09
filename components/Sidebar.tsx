
import React, { useState, useEffect } from 'react';
import { Table, Users, Settings, LayoutGrid } from 'lucide-react';

interface SidebarProps {
  activeTab: 'submissions' | 'design_test' | 'members' | 'groups' | 'settings';
  setActiveTab: (tab: 'submissions' | 'design_test' | 'members' | 'groups' | 'settings') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'submissions', icon: Table, label: '제출 현황' },
    { id: 'members', icon: Users, label: '멤버 관리' },
    { id: 'groups', icon: LayoutGrid, label: '조 관리' },
    { id: 'settings', icon: Settings, label: '봇 설정' },
  ];

  // Bot Status State
  const [botStatus, setBotStatus] = useState<'online' | 'delayed' | 'offline' | 'loading'>('loading');
  const [lastSeenText, setLastSeenText] = useState('확인 중...');

  // Determine API URL (Same logic as App.tsx)
  const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
  const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/status`);
        const data = await res.json();

        if (data.status === 'online') setBotStatus('online');
        else if (data.status === 'delayed') setBotStatus('delayed');
        else setBotStatus('offline');

        if (data.last_seen_seconds_ago >= 0) {
          const mins = Math.floor(data.last_seen_seconds_ago / 60);
          setLastSeenText(`${mins}분 전`);
        } else {
          setLastSeenText('기록 없음');
        }
      } catch (e) {
        setBotStatus('offline');
        setLastSeenText('연결 실패');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // 1분마다 갱신
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    if (botStatus === 'online') return 'bg-emerald-500';
    if (botStatus === 'delayed') return 'bg-amber-500';
    return 'bg-rose-500';
  };

  const getStatusText = () => {
    if (botStatus === 'online') return '봇 온라인';
    if (botStatus === 'delayed') return '응답 지연';
    if (botStatus === 'loading') return '확인 중...';
    return '봇 오프라인';
  };

  return (
    // Updated Background: Slightly more transparent & glass-like to blend with the vibrant mesh
    <aside className="w-64 h-full bg-white/20 backdrop-blur-2xl border-r border-white/30 flex flex-col shadow-[4px_0_30px_rgba(0,0,0,0.02)] transition-all duration-300 relative z-50">

      {/* Branding Area */}
      <div className="p-8 pb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-900/10 hover:scale-105 transition-transform duration-300 bg-white/40 backdrop-blur-sm border border-white/50">
          <img src="/asc_logo.png" alt="ASC Logo" className="w-full h-full object-cover" />
        </div>
        <span className="text-xl font-extrabold tracking-tight text-[#1e293b] font-sans">ASC Tracker</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-2">
        {menuItems.map((item) => {
          // Hide design test if needed
          if (item.id === 'design_test') return null;

          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden ${isActive
                ? 'bg-white/70 text-[#1e293b] shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-white/60 backdrop-blur-md translate-x-1'
                : 'text-gray-500 hover:bg-white/40 hover:text-gray-800'
                }`}
            >
              <item.icon
                className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'text-[#1e293b] scale-105' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
              />
              <span className={`font-bold text-sm tracking-wide ${isActive ? 'font-nav-active' : 'font-nav'}`}>
                {item.label}
              </span>

              {/* Active Indicator Pillage */}
              {isActive && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full bg-[#1e293b]/10"></div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / User Info */}
      <div className="p-6 border-t border-white/20">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/40 transition-colors cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-inner group-hover:scale-110 transition-transform">
            AD
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#1e293b]">Admin User</span>
            <span className="text-[10px] text-gray-500">Manager Access</span>
          </div>
        </div>
      </div>
      {/* Bot Status Indicator */}
      <div className="px-4 pb-6">
        <div className="bg-white/30 rounded-2xl p-4 border border-white/50 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-700">{getStatusText()}</span>
            <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor()} animate-pulse shadow-sm`}></div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-500">
            <span>Last seen:</span>
            <span className="font-mono font-medium">{lastSeenText}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
