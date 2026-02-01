
import React, { useState, useMemo } from 'react';
import { Users, CheckCircle, AlertCircle, Search, UserMinus, BarChart2 } from 'lucide-react';
import { Member, Track } from '../types';

interface MemberManagementProps {
    members: Member[];
}

const MemberManagement: React.FC<MemberManagementProps> = ({ members }) => {
    const [filterTrack, setFilterTrack] = useState<Track | 'Total' | 'Inactive'>('Total');
    const [searchTerm, setSearchTerm] = useState('');

    // Safe Check
    if (!members || !Array.isArray(members)) {
        return <div className="p-8 text-center text-gray-500 font-mono text-sm">Initializing System...</div>;
    }

    // --- Stats Calculation ---
    const stats = useMemo(() => {
        const hasTrack = (m: Member, t: Track) => m.tracks ? m.tracks.includes(t) : m.track === t;

        return {
            total: members.length,
            shortform: members.filter(m => hasTrack(m, Track.SHORTFORM)).length,
            longform: members.filter(m => hasTrack(m, Track.LONGFORM)).length,
            builderBasic: members.filter(m => hasTrack(m, Track.BUILDER_BASIC)).length,
            builderAdvanced: members.filter(m => hasTrack(m, Track.BUILDER_ADVANCED)).length,
            sales: members.filter(m => hasTrack(m, Track.SALES)).length,
            aiAgent: members.filter(m => hasTrack(m, Track.AI_AGENT)).length,
            inactive: members.filter(m => m.track === Track.UNASSIGNED || !m.track).length, // Inactive is usually primary track unassigned
        };
    }, [members]);

    // --- Filtering Logic ---
    const filteredMembers = useMemo(() => {
        let result = members;
        if (filterTrack === 'Inactive') {
            result = result.filter(m => m.track === Track.UNASSIGNED || !m.track);
        } else if (filterTrack !== 'Total') {
            result = result.filter(m => m.tracks ? m.tracks.includes(filterTrack) : m.track === filterTrack);
        }

        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(m =>
                (m.name || '').toLowerCase().includes(lowerTerm) ||
                (m.discordNickname || '').toLowerCase().includes(lowerTerm) ||
                (m.discordUsername || '').toLowerCase().includes(lowerTerm) ||
                (m.discordId || '').includes(lowerTerm)
            );
        }
        // Sorting: Active First -> Track Count Desc -> Name Asc
        result.sort((a, b) => {
            // 1. Active vs Inactive (Unassigned is Inactive)
            // Note: We treat "Unassigned" track as Inactive.
            const isInactive = (m: Member) => m.track === Track.UNASSIGNED || !m.track;
            const aInactive = isInactive(a);
            const bInactive = isInactive(b);

            if (aInactive !== bInactive) return aInactive ? 1 : -1; // Active comes first

            // 2. Track Count (More tracks = higher priority, e.g. Admins)
            const aCount = a.tracks ? a.tracks.length : (a.track ? 1 : 0);
            const bCount = b.tracks ? b.tracks.length : (b.track ? 1 : 0);
            if (aCount !== bCount) return bCount - aCount;

            // 3. Name Alphabetical
            return (a.name || '').localeCompare(b.name || '');
        });

        return result;
    }, [members, filterTrack, searchTerm]);

    // --- Slim Status Tile Component (Glass Version) ---
    const StatusTile = ({
        label,
        count,
        active,
        onClick,
        color, // e.g., "indigo"
        disableBorder = false
    }: {
        label: string;
        count: number;
        active: boolean;
        onClick: () => void;
        color: string;
        disableBorder?: boolean;
    }) => {
        // Dynamic color classes
        // Active: More solid/visible but still glassy
        // Inactive: Very transparent glass
        const activeBg = `bg-${color}-500/10`; // Very subtle tint
        const activeText = `text-${color}-700`;
        const activeBorder = `border-${color}-200/50`;
        const hoverBg = `hover:bg-white/40`;

        return (
            <button
                onClick={onClick}
                className={`
          relative flex items-center justify-between gap-3 px-3 py-2 rounded-xl border text-sm transition-all duration-200 min-w-[120px] flex-1 backdrop-blur-md
          ${active
                        ? `bg-white/60 border-white/60 shadow-sm ${activeText} font-bold ring-1 ring-white/50`
                        : `bg-white/20 border-white/30 text-gray-600 ${hoverBg}`}
        `}
            >
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${active ? `bg-${color}-500` : `bg-${color}-400/50`}`}></div>
                    <span className="truncate">{label}</span>
                </div>
                <span className="font-mono font-medium">{count}</span>
            </button>
        );
    };

    const CompactTrackBadge = ({ track }: { track: Track }) => {
        let classes = "bg-gray-100/50 text-gray-500 border-gray-200/50";
        switch (track) {
            case Track.SHORTFORM: classes = "bg-rose-50/50 text-rose-700 border-rose-100/50"; break;
            case Track.LONGFORM: classes = "bg-pink-50/50 text-pink-700 border-pink-100/50"; break;
            case Track.BUILDER_BASIC: classes = "bg-teal-50/50 text-teal-700 border-teal-100/50"; break;
            case Track.BUILDER_ADVANCED: classes = "bg-emerald-50/50 text-emerald-700 border-emerald-100/50"; break;
            case Track.SALES: classes = "bg-blue-50/50 text-blue-700 border-blue-100/50"; break;
            case Track.AI_AGENT: classes = "bg-purple-50/50 text-purple-700 border-purple-100/50"; break;
        }
        return (
            <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${classes} whitespace-nowrap backdrop-blur-sm`}>
                {track || 'Unassigned'}
            </span>
        );
    };

    return (
        <div className="space-y-4 pb-12 font-sans h-full flex flex-col">

            {/* 1. Header Area: Title & Search */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2 px-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/40 rounded-xl border border-white/50 shadow-sm backdrop-blur-md">
                        <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#1e293b] tracking-tight">Members</h2>
                        <p className="text-xs text-gray-500 font-medium">Overwatch Dashboard</p>
                    </div>
                </div>

                <div className="relative group w-full sm:w-72">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-3.5 w-3.5 text-gray-500 group-focus-within:text-indigo-600" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-9 pr-3 py-2 border border-white/40 rounded-xl text-sm bg-white/30 text-gray-800 placeholder-gray-500/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white/50 transition-all font-medium backdrop-blur-sm shadow-sm hover:bg-white/40"
                        placeholder="Search identity..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* 2. Slim Horizontal Status Bar */}
            <div className="flex gap-2 overflow-x-auto pb-2 px-1 custom-scrollbar">
                <StatusTile label="Total" count={stats.total} color="indigo" active={filterTrack === 'Total'} onClick={() => setFilterTrack('Total')} />
                <StatusTile label="Shortform" count={stats.shortform} color="rose" active={filterTrack === Track.SHORTFORM} onClick={() => setFilterTrack(Track.SHORTFORM)} />
                <StatusTile label="Longform" count={stats.longform} color="pink" active={filterTrack === Track.LONGFORM} onClick={() => setFilterTrack(Track.LONGFORM)} />
                <StatusTile label="Basic" count={stats.builderBasic} color="teal" active={filterTrack === Track.BUILDER_BASIC} onClick={() => setFilterTrack(Track.BUILDER_BASIC)} />
                <StatusTile label="Advanced" count={stats.builderAdvanced} color="emerald" active={filterTrack === Track.BUILDER_ADVANCED} onClick={() => setFilterTrack(Track.BUILDER_ADVANCED)} />
                <StatusTile label="Sales" count={stats.sales} color="blue" active={filterTrack === Track.SALES} onClick={() => setFilterTrack(Track.SALES)} />
                <StatusTile label="AI Agent" count={stats.aiAgent} color="purple" active={filterTrack === Track.AI_AGENT} onClick={() => setFilterTrack(Track.AI_AGENT)} />
                <StatusTile label="Inactive" count={stats.inactive} color="gray" active={filterTrack === 'Inactive'} onClick={() => setFilterTrack('Inactive')} />
            </div>

            {/* 3. Compact Data Table (Glass Container) */}
            {/* The wrapper in AdminDashboard handles the outer border/shadow, so we keep this distinct but transparent */}
            <div className="bg-white/20 rounded-[24px] border border-white/40 shadow-inner overflow-hidden flex-1 flex flex-col backdrop-blur-xl relative">

                {/* Decorative Shine */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 via-white/20 to-transparent pointer-events-none"></div>

                <div className="overflow-auto flex-1 custom-scrollbar relative z-10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-white/30 sticky top-0 z-10 backdrop-blur-md border-b border-white/30">
                            <tr>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest pl-6">Identity</th>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">Track</th>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest text-center">Sync</th>
                                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">Joined</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/20">
                            {filteredMembers.length > 0 ? (
                                filteredMembers.map((member) => {
                                    const isInactive = member.track === Track.UNASSIGNED || !member.track;

                                    return (
                                        <tr
                                            key={member.id}
                                            className={`group hover:bg-white/40 transition-colors duration-150 ${isInactive ? 'opacity-50' : ''}`}
                                        >
                                            {/* Identity: Avatar + Names */}
                                            <td className="px-4 py-3 pl-6">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm`}>
                                                        {member.profileImage ? (
                                                            <img src={member.profileImage} alt={member.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span className="text-xs font-bold text-indigo-400">{(member.name || '?').slice(0, 1)}</span>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col justify-center">
                                                        <div className="flex items-center gap-1.5">
                                                            <span className={`text-sm font-semibold ${isInactive ? 'text-gray-500' : 'text-gray-800'}`}>
                                                                {member.discordNickname || member.name}
                                                            </span>
                                                            {isInactive && <span className="text-[9px] bg-gray-200/50 text-gray-500 px-1 py-px rounded border border-gray-300/50">REST</span>}
                                                        </div>
                                                        <span className="text-[11px] text-gray-500/80 font-mono">
                                                            @{member.discordUsername || member.discordId}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Track */}
                                            <td className="px-4 py-3">
                                                <div className="flex flex-wrap gap-1">
                                                    {member.tracks && member.tracks.length > 0 ? (
                                                        member.tracks.map(t => (
                                                            <CompactTrackBadge key={t} track={t} />
                                                        ))
                                                    ) : (
                                                        <CompactTrackBadge track={member.track} />
                                                    )}
                                                </div>
                                            </td>

                                            {/* Sync Status */}
                                            <td className="px-4 py-3 text-center">
                                                {member.notionSync ? (
                                                    <div className="inline-flex p-1 rounded-full bg-emerald-100/50 border border-emerald-200/50">
                                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex p-1 rounded-full bg-amber-100/50 border border-amber-200/50">
                                                        <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                                                    </div>
                                                )}
                                            </td>

                                            {/* Join Date */}
                                            <td className="px-4 py-3 text-xs text-gray-500 font-mono">
                                                {member.joinedAt || '-'}
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500 font-medium">
                                        <div className="flex flex-col items-center gap-3">
                                            <Search className="w-10 h-10 opacity-20" />
                                            <span>No members found matching "{searchTerm}"</span>
                                            <button
                                                onClick={() => setSearchTerm('')}
                                                className="text-indigo-600 hover:text-indigo-700 font-semibold text-xs mt-1 hover:underline transition-all"
                                            >
                                                Clear Search Filter
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="px-4 py-3 bg-white/20 border-t border-white/30 text-xs text-gray-500 flex justify-between items-center backdrop-blur-sm relative z-10">
                    <span>Showing <strong>{filteredMembers.length}</strong> / {members.length} members</span>
                    <span className="font-mono opacity-70">Synced: {new Date().toLocaleTimeString()}</span>
                </div>
            </div>
        </div>
    );
};

export default MemberManagement;
