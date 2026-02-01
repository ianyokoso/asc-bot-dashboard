import React from 'react';
import { Member, Track } from '../types';

interface LuxuryTrackTabsProps {
    trackOrder: Track[];
    activeTrack: Track;
    setActiveTrack: (track: Track) => void;
    members: Member[];
}

const LuxuryTrackTabs: React.FC<LuxuryTrackTabsProps> = ({ trackOrder, activeTrack, setActiveTrack, members }) => {
    return (
        <div className="w-full px-4 md:px-12 py-1 md:py-0 z-10">
            {/* Mobile: Compact Grid, Desktop: Horizontal Scroll */}
            {/* Optimized Padding: 
                Outer: md:py-0 (No extra gap) 
                Inner: md:py-2 (8px, Just enough for -2px translate + shadow)
            */}
            <div className={`
                w-full
                grid grid-cols-2 gap-2 
                md:flex md:items-center md:gap-4 md:overflow-x-auto md:custom-scrollbar md:no-scrollbar-visible
                md:px-1 md:py-2
            `}>
                {trackOrder.map((track) => {
                    const isActive = activeTrack === track;
                    const count = members.filter(m => {
                        if (m.tracks && m.tracks.length > 0) return m.tracks.includes(track);
                        return m.track === track;
                    }).length;

                    return (
                        <button
                            key={track}
                            onClick={() => setActiveTrack(track)}
                            className={`
                                relative 
                                px-2 py-2 md:px-6 md:py-3 
                                rounded-xl md:rounded-2xl 
                                text-xs md:text-sm font-bold 
                                transition-all duration-300 
                                flex items-center justify-center gap-1.5 md:gap-2.5 
                                flex-shrink-0
                                ${isActive
                                    ? 'bg-white/90 text-[#1e293b] shadow-[0_4px_20px_rgba(0,0,0,0.05)] ring-1 ring-white translate-y-[-1px] md:translate-y-[-2px]'
                                    : 'bg-white/30 text-gray-600 hover:bg-white/50 hover:text-gray-800'
                                }
                            `}
                        >
                            <span className="truncate">{track}</span>
                            <span className={`px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md md:rounded-lg text-[9px] md:text-[10px] font-extrabold flex-shrink-0 ${isActive ? 'bg-[#1e293b] text-white' : 'bg-white/50 text-gray-500'}`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default LuxuryTrackTabs;
