import React from 'react';

interface LuxuryHeaderProps {
    title: string;
    startDate?: string;
    endDate?: string;
    onSync: () => void;
    isSyncing: boolean;
}

const LuxuryHeader: React.FC<LuxuryHeaderProps> = ({ title, startDate, endDate, onSync, isSyncing }) => {
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
        <div className="w-full flex-shrink-0 px-4 md:px-8 pt-2 md:pt-8 pb-1 md:pb-4 z-20">
            {/* Unified Glass Card */}
            <div className="w-full bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-4 md:p-6 flex flex-col md:flex-row items-center justify-between relative gap-4 md:gap-0">
                {/* Decorative sheen */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-50"></div>
                </div>

                {/* --- 1. Left Group: Logo + Title --- */}
                <div className="flex items-center justify-between w-full md:w-auto relative z-10">
                    <div className="flex items-center gap-3 md:gap-6">
                        {/* Logo */}
                        <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                            <img src="/asc_logo.png" alt="ASC Logo" className="w-full h-full object-cover rounded-[10px] md:rounded-2xl shadow-sm" />
                        </div>

                        {/* Title & Status */}
                        <div className="flex items-center gap-2 md:block">
                            <h1 className="text-lg md:text-3xl font-extrabold text-[#1e293b] tracking-tight mb-0 md:mb-1 whitespace-nowrap">{title}</h1>
                            {/* Mobile Status Dot */}
                            <span className="md:hidden w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

                            {/* Desktop Status Text */}
                            <p className="hidden md:flex text-sm font-medium text-gray-500 items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                System Operational
                            </p>
                        </div>
                    </div>

                    {/* Mobile Only: Refresh Button is tucked here on the right of the top row */}
                    <div className="md:hidden">
                        <button
                            onClick={onSync}
                            disabled={isSyncing}
                            className="w-8 h-8 bg-white/70 hover:bg-white text-gray-700 border border-white/80 rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300 backdrop-blur-md disabled:opacity-50 flex items-center justify-center group"
                        >
                            <svg className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* --- 2. Center Group: Progress Bar --- */}
                {startDate && endDate && (
                    <div className="w-full md:flex-1 max-w-full md:max-w-4xl md:mx-auto md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-1 md:gap-6 mt-[-8px] md:mt-0 mb-6 md:mb-0">
                        {/* Desktop Dates */}
                        <span className="hidden md:block text-sm font-bold text-gray-400 font-mono tracking-tight">{formatShortDate(startDate)}</span>

                        <div className="flex-1 w-full relative pt-4 md:pt-0 pb-2 md:pb-0">
                            {/* Bar Container */}
                            <div className="h-2.5 md:h-6 bg-slate-200/50 rounded-full backdrop-blur-md shadow-inner border border-white/40 relative">
                                {/* Gradient Fill */}
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-[#1A2B5F] via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    {/* Glowing End Cap / Pin */}
                                    <div className="absolute -right-1.5 md:-right-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] border-[2px] md:border-[4px] border-cyan-50 flex items-center justify-center z-20">
                                        <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-cyan-500 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* TODAY Marker */}

                            {/* Mobile Text Bubble Below */}
                            <div
                                className="md:hidden absolute top-8 left-0 transform -translate-x-1/2 z-30"
                                style={{ left: `${progress}%` }}
                            >
                                <div className="bg-white/90 backdrop-blur-md border border-indigo-100 shadow-sm px-2 py-1 rounded-lg relative flex flex-col items-center">
                                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/90 border-t border-l border-indigo-100 rotate-45"></div>
                                    <span className="text-[10px] font-extrabold text-[#1e293b] whitespace-nowrap leading-none">
                                        TODAY {formatShortDate(new Date().toISOString())}
                                    </span>
                                </div>
                            </div>

                            {/* Desktop Bubble Above */}
                            <div
                                className="hidden md:flex absolute -top-14 transform -translate-x-1/2 flex-col items-center transition-all duration-500 z-30"
                                style={{ left: `${progress}%` }}
                            >
                                <div className="px-3 py-1.5 bg-white/80 backdrop-blur-xl rounded-xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center relative">
                                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">TODAY</span>
                                    <span className="block text-sm font-extrabold text-[#1e293b] leading-none">{formatShortDate(new Date().toISOString())}</span>
                                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white/80 border-r border-b border-white/90"></div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Dates */}
                        <span className="hidden md:block text-sm font-bold text-gray-400 font-mono tracking-tight">{formatShortDate(endDate)}</span>
                    </div>
                )}

                {/* --- 3. Right Group: Refresh Button (Desktop Only) --- */}
                <div className="hidden md:block relative z-10">
                    <button
                        onClick={onSync}
                        disabled={isSyncing}
                        className="px-5 py-2.5 bg-white/70 hover:bg-white text-gray-700 border border-white/80 rounded-xl text-sm font-bold hover:shadow-lg transition-all duration-300 backdrop-blur-md disabled:opacity-50 flex items-center justify-center gap-2 group"
                    >
                        <svg className={`w-4 h-4 ${isSyncing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>{isSyncing ? 'Syncing...' : 'Refresh'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LuxuryHeader;
