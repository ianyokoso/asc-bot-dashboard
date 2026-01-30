
import React, { useState, useEffect } from 'react';
import { Table, Users, Settings, Zap } from 'lucide-react';

interface SidebarProps {
  activeTab: 'submissions' | 'members' | 'settings';
  setActiveTab: (tab: 'submissions' | 'members' | 'settings') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'submissions', icon: Table, label: '제출 현황' },
    { id: 'members', icon: Users, label: '멤버 관리' },
    { id: 'settings', icon: Settings, label: '봇 설정' },
  ];

  // Bot Status State
  const [botStatus, setBotStatus] = useState<'online' | 'delayed' | 'offline' | 'loading'>('loading');
  const [lastSeenText, setLastSeenText] = useState('확인 중...');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch('/api-proxy/api/status');
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
    <aside className="w-64 bg-gray-900 text-white flex flex-col hidden md:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <Zap className="w-6 h-6 text-white fill-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">ASC Admin</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === item.id
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
          >
            <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400'}`} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate">Admin User</p>
            <p className="text-[10px] text-gray-500 truncate">Operation Team</p>
          </div>
        </div>
      </div>

      {/* Bot Status Indicator */}
      <div className="px-4 pb-4">
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-gray-300">{getStatusText()}</span>
            <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor()} animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]`}></div>
          </div>
          <p className="text-[10px] text-gray-500">마지막 응답: {lastSeenText}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
