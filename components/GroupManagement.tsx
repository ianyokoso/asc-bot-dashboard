import React, { useEffect, useState, useMemo } from 'react';
import { Member, Submission, SubmissionStatus } from '../types';
import { User, RefreshCw, CheckCircle2, Clock, XCircle, AlertCircle, LayoutGrid } from 'lucide-react';

// Interfaces for API Data (Structure Only)
interface ApiMember {
    id: string;
    name: string;
    discordId: string;
    role: string;
}

interface Group {
    groupName: string;
    dbId: string;
    members: ApiMember[];
}

interface TrackGroup {
    trackName: string;
    groups: Group[];
}

interface GroupManagementProps {
    members: Member[];       // Global Member Data (Full info)
    submissions: Submission[]; // Global Submission Data
}

const GroupManagement: React.FC<GroupManagementProps> = ({ members: globalMembers, submissions }) => {
    const [trackGroups, setTrackGroups] = useState<TrackGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedTrack, setSelectedTrack] = useState<string>('All');

    // Desired Order Preference
    const trackOrderPref = [
        '크리에이터 트랙',
        '빌더 기초 트랙',
        '빌더 심화 트랙',
        '세일즈 실전 트랙',
        'AI 에이전트 트랙'
    ];

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            setLoading(true);
            setError(null);

            // Try local/proxy
            let url = window.location.hostname === 'localhost' ? '/api-proxy/api/groups' : 'http://localhost:8000/api/groups';
            // In production/deployment, it might just be /api/groups
            if (process.env.NODE_ENV === 'production') url = '/api/groups';

            const response = await fetch(url).catch(e => null);

            if (!response) {
                // Fallback attempt
                const res2 = await fetch('http://168.107.16.76:8000/api/groups').catch(e => null);
                if (!res2) throw new Error("Cannot connect to API");
                const json = await res2.json();
                if (json.status === 'success') {
                    setTrackGroups(sortTracks(json.data || []));
                } else {
                    setError(json.message || 'Failed to load');
                }
                return;
            }

            const json = await response.json();

            if (json.status === 'success') {
                setTrackGroups(sortTracks(json.data || []));
            } else {
                setError(json.message || 'Failed to load groups');
            }
        } catch (err) {
            setError('Network error connecting to server (Ensure admin_server.py is running)');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const sortTracks = (tracks: TrackGroup[]) => {
        return tracks.sort((a, b) => {
            const idxA = trackOrderPref.indexOf(a.trackName);
            const idxB = trackOrderPref.indexOf(b.trackName);
            // If both found, sort by index
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            // If only A found, A comes first
            if (idxA !== -1) return -1;
            // If only B found, B comes first
            if (idxB !== -1) return 1;
            // Neither found, alphabetical
            return a.trackName.localeCompare(b.trackName);
        });
    };

    const filteredData = selectedTrack === 'All'
        ? trackGroups
        : trackGroups.filter(t => t.trackName === selectedTrack);

    // Helper: Get submission stats for a Discord ID
    const getMemberStats = (discordId: string) => {
        const globalMem = globalMembers.find(m =>
            m.discordId === discordId ||
            (m.discordUsername && m.discordUsername === discordId) ||
            (m.discordNickname && m.discordNickname.includes(discordId))
        );

        if (!globalMem) return { submitted: 0, total: 0, recentStatus: [] };

        // Get last 5 days submissions
        const memberSubs = submissions.filter(s => s.memberId === globalMem.id);
        memberSubs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        const recent = memberSubs.slice(0, 5).map(s => s.status);
        const submittedCount = memberSubs.filter(s => s.status === 'submitted').length;

        return {
            submitted: submittedCount,
            total: memberSubs.length,
            recentStatus: recent,
            profileImage: globalMem.profileImage
        };
    };

    const renderStatusDot = (status: SubmissionStatus) => {
        if (status === 'submitted') return <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" title="Submitted" />;
        if (status === 'missed') return <div className="w-2 h-2 rounded-full bg-rose-400 opacity-80" title="Missed" />;
        if (status === 'pending') return <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" title="Pending" />;
        return <div className="w-2 h-2 rounded-full bg-slate-200" title="No Data" />;
    };

    // Calculate Total stats for header
    const totalGroups = trackGroups.reduce((acc, t) => acc + t.groups.length, 0);
    const totalMembers = trackGroups.reduce((acc, t) => acc + t.groups.reduce((a, g) => a + g.members.length, 0), 0);

    // Loading
    if (loading) return (
        <div className="flex h-full items-center justify-center space-x-3 min-h-[400px]">
            <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-xl font-bold text-indigo-400/80 animate-pulse font-sans">Syncing Group Structure...</div>
        </div>
    );

    // Error
    if (error) return (
        <div className="h-full flex items-center justify-center p-10">
            <div className="p-8 text-center bg-white/50 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] max-w-md w-full">
                <div className="w-16 h-16 bg-rose-100/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner">⚠️</div>
                <h3 className="text-xl font-extrabold text-slate-800 mb-2">Data Sync Failed</h3>
                <p className="text-slate-500 mb-8 font-medium">{error}</p>
                <button
                    onClick={fetchGroups}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-[0_10px_20px_rgba(79,70,229,0.3)] font-bold text-sm"
                >
                    Retry Connection
                </button>
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col font-sans p-6 md:p-8">
            {/* Header Area */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-50/50 rounded-xl border border-indigo-100">
                    <LayoutGrid className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold text-[#1e293b] tracking-tight">
                        조 편성 현황
                    </h2>
                    <p className="text-xs font-bold text-slate-400 mt-0.5">
                        총 {totalGroups}개 조 / {totalMembers}명 배정 완료
                    </p>
                </div>
            </div>

            {/* Tabs Row (Left Aligned) */}
            <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none w-full">
                {/* 'All Tracks' Pill */}
                <button
                    onClick={() => setSelectedTrack('All')}
                    className={`
                relative px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex-shrink-0 flex items-center gap-2
                ${selectedTrack === 'All'
                            ? 'bg-indigo-600 text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)] translate-y-[-1px]'
                            : 'bg-white/40 text-slate-500 hover:bg-white/60 hover:text-slate-700 border border-white/60'}
            `}
                >
                    All Tracks
                </button>

                {/* Track Pills */}
                {trackGroups.map(t => {
                    const isActive = selectedTrack === t.trackName;
                    return (
                        <button
                            key={t.trackName}
                            onClick={() => setSelectedTrack(t.trackName)}
                            className={`
                        relative px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex-shrink-0 flex items-center gap-2
                        ${isActive
                                    ? 'bg-white/90 text-[#1e293b] shadow-[0_4px_20px_rgba(0,0,0,0.05)] ring-1 ring-white translate-y-[-1px]'
                                    : 'bg-white/40 text-slate-500 hover:bg-white/60 hover:text-slate-700 border border-white/60'}
                    `}
                        >
                            {t.trackName.replace(' 트랙', '')}
                            <span className={`px-1.5 py-0.5 rounded-md text-[9px] font-extrabold ${isActive ? 'bg-[#1e293b] text-white' : 'bg-slate-200/50 text-slate-500'}`}>
                                {t.groups.length}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-10 space-y-12">
                {filteredData.map(track => (
                    <div key={track.trackName} className="animate-fade-in-up">
                        <div className="flex items-center mb-5 gap-3 pl-1">
                            <div className="h-6 w-1 bg-indigo-500 rounded-full"></div>
                            <h3 className="text-lg font-bold text-[#1e293b]">
                                {track.trackName}
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                                {track.groups.length} Groups
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                            {track.groups.map(group => (
                                <div
                                    key={group.dbId}
                                    className="bg-white/60 backdrop-blur-xl rounded-[24px] border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
                                >
                                    {/* Card Header */}
                                    <div className={`
                    px-5 py-3.5 border-b border-slate-100/80 flex justify-between items-center bg-white/40
                  `}>
                                        <h4 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                                            {group.groupName}
                                            {group.members.some(m => m.role === '조장') && (
                                                <span title="Leader assigned" className="text-[8px]">👑</span>
                                            )}
                                        </h4>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold tracking-wide
                         ${group.members.length >= 7 ? 'bg-emerald-50 text-emerald-600' :
                                                group.members.length >= 5 ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'}`}
                                        >
                                            {group.members.length}명
                                        </span>
                                    </div>

                                    {/* Member List */}
                                    <div className="p-3 flex-1">
                                        <ul className="space-y-2">
                                            {group.members.length === 0 ? (
                                                <li className="text-center text-slate-400 py-6 text-xs font-medium italic bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                                                    배정된 인원 없음
                                                </li>
                                            ) : (
                                                group.members.map(member => {
                                                    const stats = getMemberStats(member.discordId);

                                                    return (
                                                        <li key={member.id} className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-white/80 transition-all duration-200 group/item border border-transparent hover:border-indigo-50">
                                                            {/* Avatar */}
                                                            <div className="relative flex-shrink-0">
                                                                <div className={`
                                            w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border
                                            ${member.role === '조장'
                                                                        ? 'bg-amber-50 text-amber-600 border-amber-100'
                                                                        : 'bg-white text-slate-400 border-white'}
                                        `}>
                                                                    {stats.profileImage ? (
                                                                        <img src={stats.profileImage} alt="" className="w-full h-full object-cover rounded-full" />
                                                                    ) : (
                                                                        member.role === '조장' ? '👑' : member.name.charAt(0)
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center justify-between mb-0.5">
                                                                    <div className="text-xs font-bold text-slate-700 truncate max-w-[80px]">
                                                                        {member.name}
                                                                    </div>
                                                                    {/* Mini submission visualization */}
                                                                    {stats.recentStatus.length > 0 && (
                                                                        <div className="flex gap-0.5">
                                                                            {stats.recentStatus.slice(0, 3).map((st, i) => (
                                                                                <div key={i}>{renderStatusDot(st)}</div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="text-[10px] text-slate-400 truncate font-medium">
                                                                        @{member.discordId}
                                                                    </div>
                                                                    <div className="text-[9px] text-slate-400 font-bold bg-slate-50 px-1 rounded">
                                                                        {stats.submitted}회
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    );
                                                })
                                            )}
                                        </ul>
                                    </div>

                                    {/* Footer Action */}
                                    <div className="bg-slate-50/30 px-4 py-2 border-t border-slate-100/50 flex justify-center group-hover:bg-indigo-50/30 transition-colors">
                                        <a
                                            href={`https://www.notion.so/${group.dbId.replace(/-/g, '')}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[10px] font-bold text-indigo-400 hover:text-indigo-600 flex items-center justify-center gap-1 group-hover:gap-1.5 transition-all"
                                        >
                                            Notion 바로가기
                                            <span>↗</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {filteredData.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
                            <LayoutGrid className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="text-base font-bold text-slate-600">선택된 트랙에 조가 없습니다.</h3>
                        <button
                            onClick={() => setSelectedTrack('All')}
                            className="mt-2 text-indigo-500 font-bold hover:underline text-xs"
                        >
                            필터 초기화
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GroupManagement;
