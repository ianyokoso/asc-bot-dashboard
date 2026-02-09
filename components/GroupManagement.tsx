
import React, { useState, useMemo, useEffect } from 'react';
import { LayoutGrid, Users, ExternalLink, Search, Crown, User, AlertCircle } from 'lucide-react';

interface GroupMember {
    id: string;
    name: string;
    discordId: string;
    role: string;
    profileImage?: string;
}

interface Group {
    groupName: string;
    dbId: string;
    members: GroupMember[];
}

interface TrackData {
    trackName: string;
    groups: Group[];
}

interface GroupManagementProps {
    groupData: TrackData[];
    isLoading: boolean;
    submissions: any[]; // Using any[] to be flexible, but should match Submission type
}

const PREFERRED_ORDER = [
    '크리에이터 트랙',
    '빌더 기초 트랙',
    '빌더 심화 트랙',
    '세일즈 실전 트랙',
    'AI 에이전트 트랙'
];

const GroupManagement: React.FC<GroupManagementProps> = ({ groupData, isLoading, submissions }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<string>('');

    // Sort Tracks based on Preferred Order
    const sortedTracks = useMemo(() => {
        if (!groupData) return [];

        return [...groupData].sort((a, b) => {
            const indexA = PREFERRED_ORDER.indexOf(a.trackName);
            const indexB = PREFERRED_ORDER.indexOf(b.trackName);

            // If both are in the preferred list, sort by index
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;

            // If only one is in the list, prioritize it
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;

            // Otherwise, sort alphabetically or keep original (fallback)
            return a.trackName.localeCompare(b.trackName);
        });
    }, [groupData]);

    // Set initial active tab
    useEffect(() => {
        if (sortedTracks.length > 0 && !activeTab) {
            setActiveTab(sortedTracks[0].trackName);
        }
    }, [sortedTracks, activeTab]);

    // Filter current track data
    const currentTrackData = useMemo(() => {
        const track = sortedTracks.find(t => t.trackName === activeTab);
        if (!track) return null;

        if (!searchTerm) return track;

        // Filter groups within the active track
        return {
            ...track,
            groups: track.groups.filter(group =>
                group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                group.members.some(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.discordId.includes(searchTerm))
            )
        };
    }, [sortedTracks, activeTab, searchTerm]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-64 space-y-4 font-['Pretendard']">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-gray-500">Notion에서 조별 데이터를 가져오는 중...</p>
            </div>
        );
    }

    if (!groupData || groupData.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-['Pretendard']">
                <AlertCircle className="w-12 h-12 mb-4 text-indigo-500 opacity-50" />
                <p className="text-lg font-bold text-gray-700">조별 데이터가 없습니다</p>
                <p className="text-sm">Notion 동기화를 먼저 진행해 주세요.</p>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-10 space-y-8 pb-24 font-['Pretendard']">
            {/* Header Area */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/40 rounded-2xl border border-white/60 shadow-sm backdrop-blur-md">
                            <LayoutGrid className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold text-[#1e293b] tracking-tight">조 관리</h2>
                            <p className="text-sm text-gray-500 font-medium">
                                {sortedTracks.length}개 트랙, 총 {groupData.reduce((acc, t) => acc + t.groups.length, 0)}개 조
                            </p>
                        </div>
                    </div>

                    <div className="relative group w-full md:w-72">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400 group-focus-within:text-indigo-600" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-2.5 border border-white/50 rounded-xl text-sm bg-white/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white/80 transition-all font-medium backdrop-blur-sm shadow-sm"
                            placeholder="조 이름, 멤버 검색..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Track Tabs */}
                <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex space-x-2 md:space-x-3 min-w-max">
                        {sortedTracks.map((track) => {
                            const isActive = activeTab === track.trackName;
                            // const memberCount = track.groups.reduce((acc, g) => acc + g.members.length, 0); // Not currently used

                            return (
                                <button
                                    key={track.trackName}
                                    onClick={() => setActiveTab(track.trackName)}
                                    className={`
                                        relative group flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300
                                        ${isActive
                                            ? 'bg-white text-indigo-600 shadow-md ring-1 ring-indigo-50 scale-[1.02]'
                                            : 'bg-white/40 text-gray-500 hover:bg-white/60 hover:text-gray-700'
                                        }
                                    `}
                                >
                                    <span>{track.trackName}</span>
                                    <span className={`
                                        px-1.5 py-0.5 rounded-md text-[10px] font-extrabold
                                        ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-black/5 text-gray-400 group-hover:bg-black/10'}
                                    `}>
                                        {track.groups.length}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {currentTrackData && currentTrackData.groups.length > 0 ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-2 mb-6 ml-1">
                            <div className="h-6 w-1.5 bg-indigo-500 rounded-full"></div>
                            <h3 className="text-lg font-bold text-gray-800">{currentTrackData.trackName}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                            {currentTrackData.groups.map((group, groupIdx) => {
                                // Calculate Progress
                                const submittedCount = group.members.filter(m =>
                                    submissions.some(s => s.memberId === m.id && s.status === 'submitted')
                                ).length;
                                const totalCount = group.members.length;
                                const progressPercentage = totalCount > 0 ? (submittedCount / totalCount) * 100 : 0;

                                // Badge Color Logic
                                let badgeColor = "bg-gray-100 text-gray-500";
                                if (progressPercentage === 100) badgeColor = "bg-green-100 text-green-600";
                                else if (progressPercentage >= 50) badgeColor = "bg-yellow-100 text-yellow-600";
                                else if (progressPercentage > 0) badgeColor = "bg-indigo-50 text-indigo-500";

                                return (
                                    <div
                                        key={groupIdx}
                                        className="group relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-[20px] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                    >
                                        {/* Card Header */}
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-base font-extrabold text-gray-800 tracking-tight">{group.groupName}</h4>

                                                    {/* Progress Badge (Idea 1) */}
                                                    <div className={`px-1.5 py-0.5 rounded-md text-[9px] font-bold flex items-center gap-1 ${badgeColor}`}>
                                                        {progressPercentage === 100 && <span>🔥</span>}
                                                        <span>{submittedCount}/{totalCount}</span>
                                                    </div>

                                                    <a
                                                        href={`https://www.notion.so/${group.dbId.replace(/-/g, '')}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="p-1 rounded-lg text-gray-300 hover:text-indigo-500 hover:bg-indigo-50 transition-colors ml-1"
                                                        title="Open Notion"
                                                    >
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                </div>
                                                <p className="text-[10px] font-medium text-gray-400 flex items-center gap-1">
                                                    <Users className="w-2.5 h-2.5" />
                                                    {group.members.length} Members
                                                </p>
                                            </div>
                                        </div>

                                        {/* Member List */}
                                        <div className="space-y-1.5 flex-1">
                                            {group.members.map((member, mIdx) => {
                                                const isLeader = member.role === '조장';
                                                const hasSubmitted = submissions.some(s => s.memberId === member.id && s.status === 'submitted');

                                                return (
                                                    <div
                                                        key={mIdx}
                                                        className={`
                                                            flex items-center justify-between p-2 rounded-lg border transition-all
                                                            ${isLeader
                                                                ? 'bg-indigo-50/80 border-indigo-200/60 shadow-sm ring-1 ring-indigo-100/50'
                                                                : 'bg-white/40 border-transparent hover:bg-white hover:border-white/60 hover:shadow-sm'
                                                            }
                                                        `}
                                                    >
                                                        <div className="flex items-center gap-2.5 overflow-hidden">
                                                            {/* Profile Image or Fallback */}
                                                            <div className={`
                                                                w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs shadow-sm overflow-hidden bg-gray-100
                                                                ${isLeader && !member.profileImage ? 'bg-gradient-to-br from-indigo-100 to-white text-indigo-600 ring-2 ring-white' : ''}
                                                            `}>
                                                                {member.profileImage ? (
                                                                    <img src={member.profileImage} alt={member.name} className="w-full h-full object-cover" />
                                                                ) : (
                                                                    isLeader ? <Crown className="w-3 h-3" /> : <User className="w-3 h-3 text-gray-400" />
                                                                )}
                                                            </div>

                                                            <div className="flex flex-col min-w-0">
                                                                <div className="flex items-center gap-1">
                                                                    <span className={`text-xs tracking-tight truncate ${isLeader ? 'font-bold text-gray-800' : 'font-medium text-gray-600'}`}>
                                                                        {member.name}
                                                                    </span>
                                                                    {/* Submission Dot Indicator (Idea 3) */}
                                                                    {hasSubmitted && (
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 ring-2 ring-white/50" title="Submitted"></div>
                                                                    )}
                                                                </div>
                                                                <span className="text-[9px] text-gray-400 font-mono truncate">
                                                                    {member.discordId}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {isLeader && (
                                                            <span className="flex-shrink-0 text-[8px] font-extrabold bg-indigo-600 text-white px-1 py-0.5 rounded shadow-sm shadow-indigo-200 ml-1">
                                                                조장
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <Search className="w-6 h-6 text-gray-300" />
                        </div>
                        <p className="text-gray-500 font-medium">검색 결과가 없습니다.</p>
                        <p className="text-sm text-gray-400 mt-1">"{searchTerm}"에 해당하는 조원이나 조를 찾을 수 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GroupManagement;
