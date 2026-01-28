
import React from 'react';
import { RefreshCw, Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  onSync: () => void;
  onSave?: () => void;
  isSyncing: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onSync, onSave, isSyncing }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between flex-shrink-0">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="멤버 이름 검색..."
            className="pl-9 pr-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all w-64"
          />
        </div>

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

        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
