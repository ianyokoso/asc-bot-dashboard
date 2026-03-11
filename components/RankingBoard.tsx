import React, { useState } from 'react';
import { Trophy, Users, User, TrendingUp, Award, MessageSquare, Calendar, ChevronDown, ChevronUp, Crown, Medal, Star } from 'lucide-react';

// Mock data for design preview
const MOCK_GROUP_RANKINGS = [
    { rank: 1, name: '크리에이터 1조', track: '크리에이터', avgCompletion: 96, activityPoints: 52, meetingPoints: 12, totalScore: 160, change: 0, members: [
        { name: '김민수', role: '조장', completion: 100, activity: 12, meeting: 3, total: 38, profileImage: '' },
        { name: '이서연', role: '조원', completion: 95, activity: 10, meeting: 3, total: 35, profileImage: '' },
        { name: '박지훈', role: '조원', completion: 92, activity: 15, meeting: 3, total: 37, profileImage: '' },
        { name: '최유나', role: '조원', completion: 98, activity: 15, meeting: 3, total: 40, profileImage: '' },
    ]},
    { rank: 2, name: '빌더 기초 2조', track: '빌더 기초', avgCompletion: 91, activityPoints: 45, meetingPoints: 9, totalScore: 145, change: 1, members: [
        { name: '정하늘', role: '조장', completion: 95, activity: 14, meeting: 3, total: 38, profileImage: '' },
        { name: '강도윤', role: '조원', completion: 88, activity: 11, meeting: 3, total: 33, profileImage: '' },
        { name: '윤서진', role: '조원', completion: 90, activity: 10, meeting: 3, total: 34, profileImage: '' },
        { name: '임하은', role: '조원', completion: 92, activity: 10, meeting: 0, total: 30, profileImage: '' },
    ]},
    { rank: 3, name: 'AI 에이전트 1조', track: 'AI 에이전트', avgCompletion: 88, activityPoints: 41, meetingPoints: 12, totalScore: 141, change: -1, members: [
        { name: '송재원', role: '조장', completion: 92, activity: 12, meeting: 3, total: 36, profileImage: '' },
        { name: '한지민', role: '조원', completion: 85, activity: 10, meeting: 3, total: 32, profileImage: '' },
        { name: '오태양', role: '조원', completion: 88, activity: 9, meeting: 3, total: 33, profileImage: '' },
        { name: '배수아', role: '조원', completion: 86, activity: 10, meeting: 3, total: 32, profileImage: '' },
    ]},
    { rank: 4, name: '세일즈 실전 1조', track: '세일즈 실전', avgCompletion: 85, activityPoints: 38, meetingPoints: 9, totalScore: 132, change: 2, members: [] },
    { rank: 5, name: '크리에이터 2조', track: '크리에이터', avgCompletion: 82, activityPoints: 35, meetingPoints: 6, totalScore: 123, change: 0, members: [] },
    { rank: 6, name: '빌더 심화 1조', track: '빌더 심화', avgCompletion: 80, activityPoints: 30, meetingPoints: 9, totalScore: 119, change: -1, members: [] },
];

const MOCK_INDIVIDUAL_RANKINGS = [
    { rank: 1, name: '최유나', group: '크리에이터 1조', track: '크리에이터', completion: 100, activity: 18, meeting: 3, totalScore: 48, profileImage: '' },
    { rank: 2, name: '김민수', group: '크리에이터 1조', track: '크리에이터', completion: 100, activity: 15, meeting: 3, totalScore: 45, profileImage: '' },
    { rank: 3, name: '정하늘', group: '빌더 기초 2조', track: '빌더 기초', completion: 95, activity: 14, meeting: 3, totalScore: 42, profileImage: '' },
    { rank: 4, name: '박지훈', group: '크리에이터 1조', track: '크리에이터', completion: 92, activity: 15, meeting: 3, totalScore: 41, profileImage: '' },
    { rank: 5, name: '송재원', group: 'AI 에이전트 1조', track: 'AI 에이전트', completion: 92, activity: 12, meeting: 3, totalScore: 39, profileImage: '' },
    { rank: 6, name: '이서연', group: '크리에이터 1조', track: '크리에이터', completion: 95, activity: 10, meeting: 3, totalScore: 38, profileImage: '' },
    { rank: 7, name: '윤서진', group: '빌더 기초 2조', track: '빌더 기초', completion: 90, activity: 10, meeting: 3, totalScore: 37, profileImage: '' },
    { rank: 8, name: '한지민', group: 'AI 에이전트 1조', track: 'AI 에이전트', completion: 85, activity: 10, meeting: 3, totalScore: 35, profileImage: '' },
    { rank: 9, name: '강도윤', group: '빌더 기초 2조', track: '빌더 기초', completion: 88, activity: 11, meeting: 3, totalScore: 34, profileImage: '' },
    { rank: 10, name: '오태양', group: 'AI 에이전트 1조', track: 'AI 에이전트', completion: 88, activity: 9, meeting: 3, totalScore: 33, profileImage: '' },
];

const RankBadge: React.FC<{ rank: number }> = ({ rank }) => {
    if (rank === 1) return (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-200/50">
            <Crown className="w-5 h-5 text-white" />
        </div>
    );
    if (rank === 2) return (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center shadow-lg shadow-slate-200/50">
            <Medal className="w-5 h-5 text-white" />
        </div>
    );
    if (rank === 3) return (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-200/50">
            <Award className="w-5 h-5 text-white" />
        </div>
    );
    return (
        <div className="w-9 h-9 rounded-full bg-white/60 border border-white/80 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-500">{rank}</span>
        </div>
    );
};

const ChangeIndicator: React.FC<{ change: number }> = ({ change }) => {
    if (change > 0) return <span className="text-xs text-emerald-500 font-bold flex items-center gap-0.5"><ChevronUp className="w-3.5 h-3.5" />{change}</span>;
    if (change < 0) return <span className="text-xs text-rose-500 font-bold flex items-center gap-0.5"><ChevronDown className="w-3.5 h-3.5" />{Math.abs(change)}</span>;
    return <span className="text-xs text-gray-400 font-medium">-</span>;
};

const ScoreBar: React.FC<{ value: number; max: number; color: string }> = ({ value, max, color }) => (
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${(value / max) * 100}%` }} />
    </div>
);

const RankingBoard: React.FC = () => {
    const [view, setView] = useState<'group' | 'individual'>('group');
    const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

    return (
        <div className="h-full flex flex-col">
            {/* Podium + Stats */}
            <div className="shrink-0 px-6 pt-6 pb-2">
                <div className="flex gap-5">
                    {/* Podium Section */}
                    <div className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-pink-50/50 border border-white/60 backdrop-blur-sm">
                        <div className="flex items-end justify-center gap-4 h-[200px]">
                            {/* 2nd Place */}
                            {(() => {
                                const second = MOCK_GROUP_RANKINGS[1];
                                const maxScore = MOCK_GROUP_RANKINGS[0].totalScore;
                                const barHeight = (second.totalScore / maxScore) * 140;
                                return (
                                    <div className="flex flex-col items-center gap-2 w-[140px]">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center shadow-lg shadow-slate-200/50">
                                            <Medal className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-xs font-bold text-[#1e293b] text-center leading-tight">{second.name}</span>
                                        <div
                                            className="w-full rounded-t-2xl bg-gradient-to-t from-slate-300 to-slate-200 flex flex-col items-center justify-end pb-3 relative overflow-hidden shadow-inner"
                                            style={{ height: `${barHeight}px` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20" />
                                            <span className="text-2xl font-black text-white relative z-10 drop-shadow-sm">{second.totalScore}</span>
                                            <span className="text-[9px] font-bold text-white/80 relative z-10">2nd</span>
                                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-400/30 to-transparent" />
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* 1st Place */}
                            {(() => {
                                const first = MOCK_GROUP_RANKINGS[0];
                                const barHeight = 160;
                                return (
                                    <div className="flex flex-col items-center gap-2 w-[140px]">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-300/50 ring-2 ring-amber-200/50">
                                            <Crown className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-sm font-extrabold text-[#1e293b] text-center leading-tight">{first.name}</span>
                                        <div
                                            className="w-full rounded-t-2xl bg-gradient-to-t from-amber-400 to-yellow-300 flex flex-col items-center justify-end pb-3 relative overflow-hidden shadow-lg shadow-amber-200/30"
                                            style={{ height: `${barHeight}px` }}
                                        >
                                            <div className="absolute inset-0 bg-white/10" />
                                            <span className="text-3xl font-black text-white relative z-10 drop-shadow-md">{first.totalScore}</span>
                                            <span className="text-[10px] font-bold text-white/90 relative z-10">1st</span>
                                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-500/30 to-transparent" />
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* 3rd Place */}
                            {(() => {
                                const third = MOCK_GROUP_RANKINGS[2];
                                const maxScore = MOCK_GROUP_RANKINGS[0].totalScore;
                                const barHeight = (third.totalScore / maxScore) * 140;
                                return (
                                    <div className="flex flex-col items-center gap-2 w-[140px]">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-200/50">
                                            <Award className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-xs font-bold text-[#1e293b] text-center leading-tight">{third.name}</span>
                                        <div
                                            className="w-full rounded-t-2xl bg-gradient-to-t from-amber-700 to-amber-500 flex flex-col items-center justify-end pb-3 relative overflow-hidden shadow-inner"
                                            style={{ height: `${barHeight}px` }}
                                        >
                                            <div className="absolute inset-0 bg-white/10" />
                                            <span className="text-2xl font-black text-white relative z-10 drop-shadow-sm">{third.totalScore}</span>
                                            <span className="text-[9px] font-bold text-white/80 relative z-10">3rd</span>
                                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-800/30 to-transparent" />
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                        {/* Score gap indicators */}
                        <div className="flex justify-center gap-16 mt-3">
                            <div className="text-center">
                                <span className="text-[10px] text-gray-400 font-medium">1st - 2nd 격차</span>
                                <p className="text-sm font-extrabold text-indigo-600">
                                    {MOCK_GROUP_RANKINGS[0].totalScore - MOCK_GROUP_RANKINGS[1].totalScore}점
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="text-[10px] text-gray-400 font-medium">2nd - 3rd 격차</span>
                                <p className="text-sm font-extrabold text-indigo-600">
                                    {MOCK_GROUP_RANKINGS[1].totalScore - MOCK_GROUP_RANKINGS[2].totalScore}점
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="w-[280px] grid grid-rows-4 gap-3">
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-amber-400/20 rounded-lg">
                                    <Trophy className="w-3.5 h-3.5 text-amber-600" />
                                </div>
                                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">1st Place</span>
                            </div>
                            <p className="text-base font-extrabold text-amber-900">크리에이터 1조</p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/50 border border-white/60 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-indigo-400/20 rounded-lg">
                                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Groups</span>
                            </div>
                            <p className="text-base font-extrabold text-[#1e293b]">6개 조 <span className="text-xs font-medium text-gray-400">/ 24명</span></p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/50 border border-white/60 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-emerald-400/20 rounded-lg">
                                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Avg Completion</span>
                            </div>
                            <p className="text-base font-extrabold text-[#1e293b]">87% <span className="text-xs font-medium text-emerald-500">+3%</span></p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/50 border border-white/60 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-purple-400/20 rounded-lg">
                                    <MessageSquare className="w-3.5 h-3.5 text-purple-600" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Activity Points</span>
                            </div>
                            <p className="text-base font-extrabold text-[#1e293b]">241점 <span className="text-xs font-medium text-purple-500">이번 주</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Toggle */}
            <div className="shrink-0 flex justify-center py-4">
                <div className="bg-white/80 backdrop-blur-md p-1 rounded-full flex gap-1 border border-indigo-100 shadow-sm">
                    <button
                        onClick={() => setView('group')}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${view === 'group'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50'}`}
                    >
                        <Users className="w-4 h-4" />
                        조별 랭킹
                    </button>
                    <button
                        onClick={() => setView('individual')}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${view === 'individual'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50'}`}
                    >
                        <User className="w-4 h-4" />
                        개인 랭킹
                    </button>
                </div>
            </div>

            {/* Rankings Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6">
                {view === 'group' ? (
                    <div className="space-y-3">
                        {MOCK_GROUP_RANKINGS.map((group) => (
                            <div key={group.rank} className="group/card">
                                {/* Main Row */}
                                <div
                                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                        group.rank <= 3
                                            ? 'bg-white/70 border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                                            : 'bg-white/40 border-white/50 hover:bg-white/60'
                                    }`}
                                    onClick={() => setExpandedGroup(expandedGroup === group.rank ? null : group.rank)}
                                >
                                    <div className="flex items-center gap-4">
                                        <RankBadge rank={group.rank} />

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-extrabold text-[#1e293b]">{group.name}</span>
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100/80 text-indigo-600 font-bold">{group.track}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <TrendingUp className="w-3 h-3" />
                                                    달성률 {group.avgCompletion}%
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="w-3 h-3" />
                                                    활동 {group.activityPoints}점
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    모임 {group.meetingPoints}점
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-right flex items-center gap-4">
                                            <ChangeIndicator change={group.change} />
                                            <div>
                                                <p className="text-2xl font-black text-[#1e293b]">{group.totalScore}</p>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase">Total</p>
                                            </div>
                                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedGroup === group.rank ? 'rotate-180' : ''}`} />
                                        </div>
                                    </div>

                                    {/* Score Bars */}
                                    <div className="mt-3 grid grid-cols-3 gap-3">
                                        <div>
                                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1">
                                                <span>과제 달성률</span>
                                                <span>{group.avgCompletion}%</span>
                                            </div>
                                            <ScoreBar value={group.avgCompletion} max={100} color="bg-gradient-to-r from-emerald-400 to-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1">
                                                <span>게시판 활동</span>
                                                <span>{group.activityPoints}점</span>
                                            </div>
                                            <ScoreBar value={group.activityPoints} max={60} color="bg-gradient-to-r from-purple-400 to-purple-500" />
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-[10px] text-gray-400 font-bold mb-1">
                                                <span>조별 모임</span>
                                                <span>{group.meetingPoints}점</span>
                                            </div>
                                            <ScoreBar value={group.meetingPoints} max={15} color="bg-gradient-to-r from-amber-400 to-amber-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Members */}
                                {expandedGroup === group.rank && group.members.length > 0 && (
                                    <div className="mt-1 ml-6 mr-2 p-4 rounded-2xl bg-white/30 border border-white/40 backdrop-blur-sm">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Users className="w-3 h-3" />
                                            조원 상세
                                        </div>
                                        <div className="space-y-2">
                                            {group.members.map((member, idx) => (
                                                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                                        {member.name.charAt(0)}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm font-bold text-[#1e293b]">{member.name}</span>
                                                            {member.role === '조장' && (
                                                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center gap-0.5">
                                                                    <Crown className="w-2.5 h-2.5" />
                                                                    조장
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-6 text-xs">
                                                        <div className="text-center">
                                                            <p className="text-gray-400 text-[10px] font-medium">달성률</p>
                                                            <p className="font-bold text-[#1e293b]">{member.completion}%</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-gray-400 text-[10px] font-medium">게시판</p>
                                                            <p className="font-bold text-purple-600">{member.activity}</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-gray-400 text-[10px] font-medium">모임</p>
                                                            <p className="font-bold text-amber-600">{member.meeting}</p>
                                                        </div>
                                                        <div className="text-center min-w-[40px]">
                                                            <p className="text-gray-400 text-[10px] font-medium">합계</p>
                                                            <p className="font-extrabold text-[#1e293b]">{member.total}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Individual Rankings */
                    <div className="space-y-2">
                        {/* Header */}
                        <div className="flex items-center gap-4 px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            <div className="w-9" />
                            <div className="flex-1">이름</div>
                            <div className="w-20 text-center">달성률</div>
                            <div className="w-16 text-center">게시판</div>
                            <div className="w-16 text-center">모임</div>
                            <div className="w-16 text-center">합계</div>
                        </div>

                        {MOCK_INDIVIDUAL_RANKINGS.map((person) => (
                            <div
                                key={person.rank}
                                className={`flex items-center gap-4 p-3 rounded-2xl border transition-all duration-300 ${
                                    person.rank <= 3
                                        ? 'bg-white/70 border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                                        : 'bg-white/40 border-white/50 hover:bg-white/60'
                                }`}
                            >
                                <RankBadge rank={person.rank} />

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                                            {person.name.charAt(0)}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-[#1e293b]">{person.name}</span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[10px] text-gray-400 font-medium">{person.group}</span>
                                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-indigo-50 text-indigo-500 font-bold">{person.track}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-20 text-center">
                                    <div className="inline-flex items-center gap-1">
                                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: `${person.completion}%` }} />
                                        </div>
                                        <span className="text-xs font-bold text-[#1e293b]">{person.completion}%</span>
                                    </div>
                                </div>

                                <div className="w-16 text-center">
                                    <span className="text-sm font-bold text-purple-600">{person.activity}</span>
                                </div>

                                <div className="w-16 text-center">
                                    <span className="text-sm font-bold text-amber-600">{person.meeting}</span>
                                </div>

                                <div className="w-16 text-center">
                                    <span className="text-lg font-black text-[#1e293b]">{person.totalScore}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RankingBoard;
