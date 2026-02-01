
import React from 'react';
import { RefreshCw, Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  onSync: () => void;
  onSave?: () => void;
  isSyncing: boolean;
  startDate?: string;
  endDate?: string;
}

const Header: React.FC<HeaderProps> = ({ title, onSync, onSave, isSyncing, startDate, endDate }) => {
  // Calculate Progress
  const calculateProgress = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    const total = end - start;
    const current = now - start;
    if (total <= 0) return 0;
    return Math.min(Math.max((current / total) * 100, 0), 100);
  };

  const progress = calculateProgress();
  const formatShortDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>

        {startDate && endDate && (
          <div className="hidden md:flex items-center gap-4 ml-4">
            <span className="text-[10px] font-bold text-gray-400 font-sans tracking-tight">{formatShortDate(startDate)}</span>

            {/* Luxury Progress Bar Container */}
            <div className="w-64 h-3 bg-slate-200/40 rounded-full backdrop-blur-md border border-white/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] relative z-0">

              {/* Gradient Fill */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#1e293b] via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] relative"
                style={{ width: `${progress}%` }}
              >
                {/* Glowing Circular Pin */}
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] border-[3px] border-cyan-50 z-10 flex items-center justify-center">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
                </div>

                {/* Glass Tooltip */}
                <div className="absolute -right-8 -top-10 bg-white/70 backdrop-blur-xl px-2.5 py-1 rounded-lg border border-white/80 shadow-[0_8px_16px_rgba(0,0,0,0.05)] flex flex-col items-center transform transition-all hover:scale-105">
                  <span className="text-[10px] font-extrabold text-slate-600 tracking-wide font-sans leading-none">
                    TODAY <span className="text-cyan-600">{formatShortDate(new Date().toISOString())}</span>
                  </span>
                  {/* Tooltip Arrow */}
                  <div className="w-1.5 h-1.5 bg-white/70 rotate-45 border-r border-b border-white/80 absolute -bottom-0.5"></div>
                </div>
              </div>
            </div>

            <span className="text-[10px] font-bold text-gray-400 font-sans tracking-tight">{formatShortDate(endDate)}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {onSave && (
          <button
            onClick={onSave}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
          >
            설정 저장
          </button>
        )}

        <button
          onClick={onSync}
          disabled={isSyncing}
          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
          {isSyncing ? '동기화 중...' : '새로고침'}
        </button>
      </div>
    </header>
  );
};

export default Header;
