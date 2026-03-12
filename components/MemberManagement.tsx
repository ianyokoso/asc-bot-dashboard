
import React, { useState, useMemo, useEffect } from 'react';
import { Users, CheckCircle, AlertCircle, Search, X, ExternalLink, FileText, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Member, Track, TRACKS } from '../types';

const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
const API_BASE = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

interface MemberManagementProps {
    members: Member[];
}

interface MemberDetail {
    pageId: string;
    name: string;
    nickname: string;
    userId: string;
    discordId: string;
    avatar: string;
    cohort: string;
    tracks: string[];
    status: string;
    notes: string;
    dropWeek: string;
    groups: string[];
    submissions: {
        title: string;
        types: string[];
        link: string;
        date: string;
        content: string;
        images: string[];
    }[];
}

// --- Member Detail Modal ---
const MemberDetailModal: React.FC<{ userId: string; onClose: () => void }> = ({ userId, onClose }) => {
    const [detail, setDetail] = useState<MemberDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/member/${userId}`);
                const json = await res.json();
                if (json.status === 'success') {
                    setDetail(json.data);
                } else {
                    setError(json.message || '멤버를 찾을 수 없습니다.');
                }
            } catch (e: any) {
                setError(e.message || '데이터를 불러올 수 없습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [userId]);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    const statusColor = detail?.status === '탈락' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-emerald-100 text-emerald-700 border-emerald-200';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 z-10 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                    <X className="w-5 h-5 text-gray-400" />
                </button>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                        <span className="text-sm text-gray-500">멤버 정보를 불러오는 중...</span>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-2">
                        <AlertCircle className="w-10 h-10 text-red-400" />
                        <span className="text-sm text-red-500">{error}</span>
                    </div>
                ) : detail ? (
                    <div className="overflow-y-auto custom-scrollbar">
                        {/* Profile Header */}
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 pt-6 pb-5">
                            <div className="flex items-center gap-4">
                                {detail.avatar ? (
                                    <img src={detail.avatar} alt="" className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover" />
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-indigo-500 border-2 border-white shadow-md flex items-center justify-center">
                                        <span className="text-2xl font-bold text-white">{(detail.name || detail.nickname || '?')[0]}</span>
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-xl font-bold text-gray-900 truncate">{detail.name || detail.nickname}</h2>
                                    <p className="text-sm text-gray-500">{detail.nickname}{detail.discordId ? ` · @${detail.discordId}` : ''}</p>
                                    <p className="text-xs text-gray-400 font-mono mt-0.5">ID: {detail.userId}</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {detail.cohort && <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">{detail.cohort}</span>}
                                {detail.tracks.map(t => (
                                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">{t}</span>
                                ))}
                                {detail.groups.map(g => (
                                    <span key={g} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">{g}</span>
                                ))}
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColor}`}>
                                    {detail.status || '활동중'}{detail.dropWeek ? ` (${detail.dropWeek})` : ''}
                                </span>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-3 px-6 py-4">
                            <div className="bg-gray-50 rounded-xl p-3 text-center">
                                <div className="text-2xl font-bold text-indigo-600">{detail.submissions.length}</div>
                                <div className="text-[11px] text-gray-500 font-medium mt-0.5">총 제출</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-3 text-center">
                                <div className="text-2xl font-bold text-emerald-600">{new Set(detail.submissions.map(s => s.date)).size}</div>
                                <div className="text-[11px] text-gray-500 font-medium mt-0.5">제출 일수</div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-3 text-center">
                                <div className="text-2xl font-bold text-amber-600">{detail.submissions.filter(s => s.link).length}</div>
                                <div className="text-[11px] text-gray-500 font-medium mt-0.5">링크 포함</div>
                            </div>
                        </div>

                        {/* Notes */}
                        {detail.notes && (
                            <div className="mx-6 mb-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="text-xs font-semibold text-gray-500 mb-1">📝 기타사항</div>
                                <div className="text-sm text-gray-700 whitespace-pre-line">{detail.notes}</div>
                            </div>
                        )}

                        {/* Submissions */}
                        <div className="px-6 pb-6">
                            <div className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <FileText className="w-4 h-4" /> 과제 제출 내역
                            </div>
                            {detail.submissions.length > 0 ? (
                                <div className="space-y-2">
                                    {detail.submissions.map((s, i) => (
                                        <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-gray-200 transition-colors">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-medium text-gray-800 truncate">{s.title || '제출물'}</div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-xs text-gray-400 font-mono">{s.date || '-'}</span>
                                                        {s.types.map(t => (
                                                            <span key={t} className="text-[10px] px-1.5 py-0.5 bg-gray-200 text-gray-600 rounded">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                                    {s.images.length > 0 && (
                                                        <span className="text-xs text-gray-400 flex items-center gap-0.5">
                                                            <ImageIcon className="w-3 h-3" />{s.images.length}
                                                        </span>
                                                    )}
                                                    {s.link && (
                                                        <a
                                                            href={s.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors"
                                                            onClick={e => e.stopPropagation()}
                                                        >
                                                            <ExternalLink className="w-3.5 h-3.5" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-sm text-gray-400">제출 내역이 없습니다.</div>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

// --- Slim Status Tile Component (Glass Version) ---
const StatusTile: React.FC<{
    label: string;
    count: number;
    active: boolean;
    onClick: () => void;
    color: string;
    disableBorder?: boolean;
}> = ({
    label,
    count,
    active,
    onClick,
    color,
}) => {
        const activeText = `text-${color}-700`;
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

const CompactTrackBadge: React.FC<{ track: Track }> = ({ track }) => {
    let classes = "bg-gray-100/50 text-gray-500 border-gray-200/50";
    switch (track) {
        case TRACKS.SHORTFORM: classes = "bg-rose-50/50 text-rose-700 border-rose-100/50"; break;
        case TRACKS.LONGFORM: classes = "bg-pink-50/50 text-pink-700 border-pink-100/50"; break;
        case TRACKS.BUILDER_BASIC: classes = "bg-teal-50/50 text-teal-700 border-teal-100/50"; break;
        case TRACKS.BUILDER_ADVANCED: classes = "bg-emerald-50/50 text-emerald-700 border-emerald-100/50"; break;
        case TRACKS.SALES: classes = "bg-blue-50/50 text-blue-700 border-blue-100/50"; break;
        case TRACKS.AI_AGENT: classes = "bg-purple-50/50 text-purple-700 border-purple-100/50"; break;
    }
    return (
        <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${classes} whitespace-nowrap backdrop-blur-sm`}>
            {track || 'Unassigned'}
        </span>
    );
};

const MemberManagement: React.FC<MemberManagementProps> = ({ members }) => {
    const [filterTrack, setFilterTrack] = useState<Track | 'Total' | 'Inactive'>('Total');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

    if (!members || !Array.isArray(members)) {
        return <div className="p-8 text-center text-gray-500 font-mono text-sm">Initializing System...</div>;
    }

    const stats = useMemo(() => {
        const hasTrack = (m: Member, t: Track) => m.tracks ? m.tracks.includes(t) : m.track === t;

        return {
            total: members.length,
            shortform: members.filter(m => hasTrack(m, TRACKS.SHORTFORM)).length,
            longform: members.filter(m => hasTrack(m, TRACKS.LONGFORM)).length,
            builderBasic: members.filter(m => hasTrack(m, TRACKS.BUILDER_BASIC)).length,
            builderAdvanced: members.filter(m => hasTrack(m, TRACKS.BUILDER_ADVANCED)).length,
            sales: members.filter(m => hasTrack(m, TRACKS.SALES)).length,
            aiAgent: members.filter(m => hasTrack(m, TRACKS.AI_AGENT)).length,
            inactive: members.filter(m => m.track === TRACKS.UNASSIGNED || !m.track).length,
        };
    }, [members]);

    const filteredMembers = useMemo(() => {
        let result = members;
        if (filterTrack === 'Inactive') {
            result = result.filter(m => m.track === TRACKS.UNASSIGNED || !m.track);
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
        result.sort((a, b) => {
            const isInactive = (m: Member) => m.track === TRACKS.UNASSIGNED || !m.track;
            const aInactive = isInactive(a);
            const bInactive = isInactive(b);

            if (aInactive !== bInactive) return aInactive ? 1 : -1;

            const aCount = a.tracks ? a.tracks.length : (a.track ? 1 : 0);
            const bCount = b.tracks ? b.tracks.length : (b.track ? 1 : 0);
            if (aCount !== bCount) return bCount - aCount;

            return (a.name || '').localeCompare(b.name || '');
        });

        return result;
    }, [members, filterTrack, searchTerm]);


    return (
        <div className="space-y-4 pb-12 font-sans h-full flex flex-col">

            {/* Modal */}
            {selectedMemberId && (
                <MemberDetailModal userId={selectedMemberId} onClose={() => setSelectedMemberId(null)} />
            )}

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
                <StatusTile label="Shortform" count={stats.shortform} color="rose" active={filterTrack === TRACKS.SHORTFORM} onClick={() => setFilterTrack(TRACKS.SHORTFORM)} />
                <StatusTile label="Longform" count={stats.longform} color="pink" active={filterTrack === TRACKS.LONGFORM} onClick={() => setFilterTrack(TRACKS.LONGFORM)} />
                <StatusTile label="Basic" count={stats.builderBasic} color="teal" active={filterTrack === TRACKS.BUILDER_BASIC} onClick={() => setFilterTrack(TRACKS.BUILDER_BASIC)} />
                <StatusTile label="Advanced" count={stats.builderAdvanced} color="emerald" active={filterTrack === TRACKS.BUILDER_ADVANCED} onClick={() => setFilterTrack(TRACKS.BUILDER_ADVANCED)} />
                <StatusTile label="Sales" count={stats.sales} color="blue" active={filterTrack === TRACKS.SALES} onClick={() => setFilterTrack(TRACKS.SALES)} />
                <StatusTile label="AI Agent" count={stats.aiAgent} color="purple" active={filterTrack === TRACKS.AI_AGENT} onClick={() => setFilterTrack(TRACKS.AI_AGENT)} />
                <StatusTile label="Inactive" count={stats.inactive} color="gray" active={filterTrack === 'Inactive'} onClick={() => setFilterTrack('Inactive')} />
            </div>

            {/* 3. Compact Data Table */}
            <div className="bg-white/20 rounded-[24px] border border-white/40 shadow-inner overflow-hidden flex-1 flex flex-col backdrop-blur-xl relative">

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
                                    const isInactive = member.track === TRACKS.UNASSIGNED || !member.track;

                                    return (
                                        <tr
                                            key={member.id}
                                            onClick={() => setSelectedMemberId(member.discordId || member.id)}
                                            style={{ cursor: 'pointer' }}
                                            className={`group hover:bg-white/40 transition-colors duration-150 ${isInactive ? 'opacity-50' : ''}`}
                                        >
                                            {/* Identity */}
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
