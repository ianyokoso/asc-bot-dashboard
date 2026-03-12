import React, { useState, useEffect } from 'react';
import { UserMinus, TrendingDown, Users, AlertTriangle, Calendar, RefreshCw } from 'lucide-react';

interface DroppedMember {
  memberId: string;
  name: string;
  track: string;
  droppedDate: string;
  activityStatus: string;
}

interface TrackStat {
  track: string;
  total: number;
  active: number;
  dropped: number;
  dropRate: number;
  droppedMembers: DroppedMember[];
}

interface DropStats {
  summary: {
    totalMembers: number;
    totalDropped: number;
    overallDropRate: number;
  };
  trackStats: TrackStat[];
  recentDrops: DroppedMember[];
}

const DropoutAnalytics: React.FC = () => {
  const [stats, setStats] = useState<DropStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
  const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/drop-stats`);
      const data = await res.json();
      if (data.status === 'success') {
        setStats(data);
      } else {
        setError(data.message || 'Failed to load');
      }
    } catch (e) {
      setError('서버 연결 실패');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStats(); }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <span className="text-sm text-gray-500 font-medium">탈락 현황 로딩 중...</span>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-2" />
          <p className="text-gray-600 font-medium">{error || '데이터 없음'}</p>
          <button onClick={fetchStats} className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold">
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  const { summary, trackStats, recentDrops } = stats;
  const filteredMembers = selectedTrack
    ? trackStats.find(t => t.track === selectedTrack)?.droppedMembers || []
    : recentDrops;

  const getBarColor = (rate: number) => {
    if (rate >= 20) return 'bg-rose-500';
    if (rate >= 10) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  const getRateColor = (rate: number) => {
    if (rate >= 20) return 'text-rose-600';
    if (rate >= 10) return 'text-amber-600';
    return 'text-emerald-600';
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-6 pb-4 shrink-0">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-100/80 rounded-xl">
              <TrendingDown className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#1e293b]">탈락 현황 분석</h2>
              <p className="text-xs text-gray-500 font-medium">트랙별 탈락률 및 탈락자 현황</p>
            </div>
          </div>
          <button
            onClick={fetchStats}
            className="p-2.5 bg-white/60 hover:bg-white/80 rounded-xl border border-white/60 transition-all shadow-sm"
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">전체 멤버</span>
            </div>
            <p className="text-3xl font-extrabold text-[#1e293b]">{summary.totalMembers}<span className="text-base font-bold text-gray-400 ml-1">명</span></p>
          </div>

          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-rose-100 rounded-lg">
                <UserMinus className="w-4 h-4 text-rose-600" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">탈락 인원</span>
            </div>
            <p className="text-3xl font-extrabold text-rose-600">{summary.totalDropped}<span className="text-base font-bold text-gray-400 ml-1">명</span></p>
          </div>

          <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-100 rounded-lg">
                <TrendingDown className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">전체 탈락률</span>
            </div>
            <p className={`text-3xl font-extrabold ${getRateColor(summary.overallDropRate)}`}>{summary.overallDropRate}<span className="text-base font-bold ml-0.5">%</span></p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pb-6 overflow-y-auto custom-scrollbar flex gap-6 min-h-0">
        {/* Left: Track Stats */}
        <div className="w-1/2 flex flex-col gap-3">
          <h3 className="text-sm font-bold text-gray-700 mb-1">트랙별 탈락률</h3>

          {/* All tracks button */}
          <button
            onClick={() => setSelectedTrack(null)}
            className={`w-full text-left p-4 rounded-2xl border transition-all ${
              selectedTrack === null
                ? 'bg-indigo-50/80 border-indigo-200 shadow-sm'
                : 'bg-white/50 border-white/60 hover:bg-white/70'
            }`}
          >
            <span className="text-sm font-bold text-gray-700">전체 최근 탈락자</span>
          </button>

          {trackStats.map((ts) => (
            <button
              key={ts.track}
              onClick={() => setSelectedTrack(ts.track)}
              className={`w-full text-left p-4 rounded-2xl border transition-all ${
                selectedTrack === ts.track
                  ? 'bg-indigo-50/80 border-indigo-200 shadow-sm'
                  : 'bg-white/50 border-white/60 hover:bg-white/70'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-800">{ts.track}</span>
                <span className={`text-sm font-extrabold ${getRateColor(ts.dropRate)}`}>
                  {ts.dropRate}%
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-gray-500">{ts.active}명 활동 중</span>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-rose-500 font-semibold">{ts.dropped}명 탈락</span>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-gray-500">총 {ts.total}명</span>
              </div>
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getBarColor(ts.dropRate)}`}
                  style={{ width: `${Math.min(ts.dropRate, 100)}%` }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Right: Dropped Members List */}
        <div className="w-1/2 flex flex-col">
          <h3 className="text-sm font-bold text-gray-700 mb-3">
            {selectedTrack ? `${selectedTrack} 탈락자` : '최근 탈락자'}
            <span className="ml-2 text-xs font-medium text-gray-400">({filteredMembers.length}명)</span>
          </h3>

          {filteredMembers.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm text-gray-400">탈락자가 없습니다</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filteredMembers.map((m, idx) => (
                <div
                  key={`${m.memberId}-${m.track}-${idx}`}
                  className="p-4 rounded-xl bg-white/60 border border-white/60 shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center">
                      <UserMinus className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.track}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {m.droppedDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropoutAnalytics;
