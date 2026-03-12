import React, { useState, useEffect, useMemo } from 'react';
import { UserMinus, TrendingDown, Users, AlertTriangle, Calendar, RefreshCw, BarChart3, Target } from 'lucide-react';

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

interface WeeklyData {
  week: number;
  weekLabel: string;
  dateRange: string;
  total: number;
  byTrack: Record<string, number>;
}

interface DropStats {
  summary: {
    totalMembers: number;
    totalDropped: number;
    overallDropRate: number;
    peakWeek: string;
    peakWeekDrops: number;
  };
  trackStats: TrackStat[];
  weeklyAnalysis: WeeklyData[];
  allTracks: string[];
  recentDrops: DroppedMember[];
}

// Track colors for the heatmap/chart
const TRACK_COLORS: Record<string, { bg: string; text: string; bar: string }> = {};
const COLOR_PALETTE = [
  { bg: 'bg-blue-100', text: 'text-blue-700', bar: '#3b82f6' },
  { bg: 'bg-rose-100', text: 'text-rose-700', bar: '#f43f5e' },
  { bg: 'bg-amber-100', text: 'text-amber-700', bar: '#f59e0b' },
  { bg: 'bg-emerald-100', text: 'text-emerald-700', bar: '#10b981' },
  { bg: 'bg-purple-100', text: 'text-purple-700', bar: '#8b5cf6' },
  { bg: 'bg-cyan-100', text: 'text-cyan-700', bar: '#06b6d4' },
  { bg: 'bg-orange-100', text: 'text-orange-700', bar: '#f97316' },
  { bg: 'bg-pink-100', text: 'text-pink-700', bar: '#ec4899' },
];

function getTrackColor(track: string, idx: number) {
  if (!TRACK_COLORS[track]) {
    TRACK_COLORS[track] = COLOR_PALETTE[idx % COLOR_PALETTE.length];
  }
  return TRACK_COLORS[track];
}

const DropoutAnalytics: React.FC = () => {
  const [stats, setStats] = useState<DropStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [view, setView] = useState<'overview' | 'weekly'>('overview');

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

  // Assign colors to tracks
  useEffect(() => {
    if (stats?.allTracks) {
      stats.allTracks.forEach((t, i) => getTrackColor(t, i));
    }
  }, [stats]);

  const maxWeeklyDrops = useMemo(() => {
    if (!stats?.weeklyAnalysis || stats.weeklyAnalysis.length === 0) return 1;
    const vals = stats.weeklyAnalysis.map(w => w.total);
    const m = vals.reduce((a, b) => Math.max(a, b), 0);
    return Math.max(1, m);
  }, [stats]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-[3px] border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <span className="text-sm text-gray-500 font-medium">탈락 현황 분석 중...</span>
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

  const { summary, trackStats, weeklyAnalysis, allTracks, recentDrops } = stats;
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

  const getHeatColor = (count: number, max: number) => {
    if (count === 0) return 'bg-gray-50 text-gray-300';
    const intensity = count / max;
    if (intensity >= 0.75) return 'bg-rose-500 text-white font-bold';
    if (intensity >= 0.5) return 'bg-rose-300 text-rose-900 font-semibold';
    if (intensity >= 0.25) return 'bg-rose-200 text-rose-800';
    return 'bg-rose-100 text-rose-700';
  };

  // Max value for heatmap cell
  const maxCellValue = useMemo(() => {
    if (!weeklyAnalysis) return 1;
    let max = 1;
    for (const w of weeklyAnalysis) {
      for (const t of allTracks) {
        if ((w.byTrack[t] || 0) > max) max = w.byTrack[t];
      }
    }
    return max;
  }, [weeklyAnalysis, allTracks]);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-6 pb-2 shrink-0">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-100/80 rounded-xl">
              <TrendingDown className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#1e293b]">탈락 현황 분석</h2>
              <p className="text-xs text-gray-500 font-medium">트랙별 탈락률 및 주차별 추이 분석</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* View Toggle */}
            <div className="bg-white/80 backdrop-blur-md p-1 rounded-full flex gap-1 border border-gray-200 shadow-sm">
              <button
                onClick={() => setView('overview')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  view === 'overview' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                트랙별
              </button>
              <button
                onClick={() => setView('weekly')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  view === 'weekly' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                주차별
              </button>
            </div>
            <button
              onClick={fetchStats}
              className="p-2.5 bg-white/60 hover:bg-white/80 rounded-xl border border-white/60 transition-all shadow-sm"
            >
              <RefreshCw className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <Users className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">전체 멤버</span>
            </div>
            <p className="text-2xl font-extrabold text-[#1e293b]">{summary.totalMembers}<span className="text-sm font-bold text-gray-400 ml-0.5">명</span></p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-rose-100 rounded-lg">
                <UserMinus className="w-3.5 h-3.5 text-rose-600" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">탈락 인원</span>
            </div>
            <p className="text-2xl font-extrabold text-rose-600">{summary.totalDropped}<span className="text-sm font-bold text-gray-400 ml-0.5">명</span></p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-amber-100 rounded-lg">
                <TrendingDown className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">전체 탈락률</span>
            </div>
            <p className={`text-2xl font-extrabold ${getRateColor(summary.overallDropRate)}`}>{summary.overallDropRate}<span className="text-sm font-bold ml-0.5">%</span></p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-purple-100 rounded-lg">
                <Target className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">탈락 집중 주차</span>
            </div>
            <p className="text-2xl font-extrabold text-purple-600">{summary.peakWeek}
              {summary.peakWeekDrops > 0 && <span className="text-sm font-bold text-gray-400 ml-1">({summary.peakWeekDrops}명)</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-8 pb-6 overflow-y-auto custom-scrollbar min-h-0">
        {view === 'overview' ? (
          /* ===== OVERVIEW: Track-based view ===== */
          <div className="flex gap-6 h-full">
            {/* Left: Track Stats */}
            <div className="w-1/2 flex flex-col gap-2.5">
              <h3 className="text-sm font-bold text-gray-700 mb-1">트랙별 탈락률</h3>

              <button
                onClick={() => setSelectedTrack(null)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  selectedTrack === null
                    ? 'bg-indigo-50/80 border-indigo-200 shadow-sm'
                    : 'bg-white/50 border-white/60 hover:bg-white/70'
                }`}
              >
                <span className="text-sm font-bold text-gray-700">전체 최근 탈락자</span>
              </button>

              {trackStats.map((ts, idx) => (
                <button
                  key={ts.track}
                  onClick={() => setSelectedTrack(ts.track)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                    selectedTrack === ts.track
                      ? 'bg-indigo-50/80 border-indigo-200 shadow-sm'
                      : 'bg-white/50 border-white/60 hover:bg-white/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: getTrackColor(ts.track, idx).bar }}></div>
                      <span className="text-sm font-bold text-gray-800">{ts.track}</span>
                    </div>
                    <span className={`text-sm font-extrabold ${getRateColor(ts.dropRate)}`}>
                      {ts.dropRate}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2 ml-[18px]">
                    <span className="text-[11px] text-gray-500">{ts.active}명 활동</span>
                    <span className="text-[11px] text-gray-300">|</span>
                    <span className="text-[11px] text-rose-500 font-semibold">{ts.dropped}명 탈락</span>
                    <span className="text-[11px] text-gray-300">|</span>
                    <span className="text-[11px] text-gray-500">총 {ts.total}명</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden ml-[18px]">
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
              <h3 className="text-sm font-bold text-gray-700 mb-2">
                {selectedTrack ? `${selectedTrack} 탈락자` : '최근 탈락자'}
                <span className="ml-2 text-xs font-medium text-gray-400">({filteredMembers.length}명)</span>
              </h3>

              {filteredMembers.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <UserMinus className="w-8 h-8 text-gray-200 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">탈락자가 없습니다</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {filteredMembers.map((m, idx) => (
                    <div
                      key={`${m.memberId}-${m.track}-${idx}`}
                      className="p-3.5 rounded-xl bg-white/60 border border-white/60 shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                          <UserMinus className="w-3.5 h-3.5 text-rose-500" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{m.name}</p>
                          <p className="text-[11px] text-gray-500">{m.track}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {m.droppedDate}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ===== WEEKLY VIEW ===== */
          <div className="flex flex-col gap-6">
            {/* Weekly Bar Chart */}
            <div className="p-6 rounded-2xl bg-white/60 border border-white/60 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-4">주차별 탈락 추이</h3>
              <div className="flex items-end gap-3 h-48">
                {weeklyAnalysis.map((w) => (
                  <div key={w.week} className="flex-1 flex flex-col items-center gap-1">
                    {/* Stacked Bar */}
                    <div className="w-full flex flex-col-reverse items-center" style={{ height: '160px' }}>
                      {w.total === 0 ? (
                        <div className="w-full max-w-[48px] h-1 bg-gray-100 rounded-full"></div>
                      ) : (
                        <div
                          className="w-full max-w-[48px] rounded-lg overflow-hidden flex flex-col-reverse transition-all duration-500"
                          style={{ height: `${Math.max((w.total / maxWeeklyDrops) * 160, 12)}px` }}
                        >
                          {allTracks.map((track, tIdx) => {
                            const count = w.byTrack[track] || 0;
                            if (count === 0) return null;
                            const pct = (count / w.total) * 100;
                            return (
                              <div
                                key={track}
                                style={{
                                  height: `${pct}%`,
                                  backgroundColor: getTrackColor(track, tIdx).bar,
                                  minHeight: '4px'
                                }}
                                title={`${track}: ${count}명`}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {/* Count label */}
                    <span className={`text-xs font-bold ${w.total > 0 ? 'text-gray-700' : 'text-gray-300'}`}>
                      {w.total > 0 ? w.total : '-'}
                    </span>
                    {/* Week label */}
                    <span className="text-[10px] font-semibold text-gray-500">{w.weekLabel}</span>
                    <span className="text-[9px] text-gray-400">{w.dateRange}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-gray-100">
                {allTracks.map((track, idx) => (
                  <div key={track} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getTrackColor(track, idx).bar }}></div>
                    <span className="text-[11px] font-medium text-gray-600">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Heatmap: Track x Week */}
            <div className="p-6 rounded-2xl bg-white/60 border border-white/60 shadow-sm">
              <h3 className="text-sm font-bold text-gray-700 mb-1">트랙 x 주차 히트맵</h3>
              <p className="text-[11px] text-gray-400 mb-4">셀 색이 진할수록 해당 주차에 탈락이 집중된 구간입니다.</p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-[11px] font-bold text-gray-500 pb-2 pr-4 w-40">트랙</th>
                      {weeklyAnalysis.map((w) => (
                        <th key={w.week} className="text-center text-[10px] font-bold text-gray-500 pb-2 px-1 min-w-[56px]">
                          <div>{w.weekLabel}</div>
                          <div className="font-normal text-gray-400">{w.dateRange}</div>
                        </th>
                      ))}
                      <th className="text-center text-[11px] font-bold text-gray-600 pb-2 pl-3 min-w-[48px]">합계</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTracks.map((track, tIdx) => {
                      const trackTotal = weeklyAnalysis.reduce((sum, w) => sum + (w.byTrack[track] || 0), 0);
                      return (
                        <tr key={track}>
                          <td className="py-1 pr-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: getTrackColor(track, tIdx).bar }}></div>
                              <span className="text-xs font-semibold text-gray-700 truncate">{track}</span>
                            </div>
                          </td>
                          {weeklyAnalysis.map((w) => {
                            const count = w.byTrack[track] || 0;
                            return (
                              <td key={w.week} className="py-1 px-1">
                                <div className={`w-full h-9 rounded-lg flex items-center justify-center text-xs transition-all ${getHeatColor(count, maxCellValue)}`}>
                                  {count > 0 ? count : ''}
                                </div>
                              </td>
                            );
                          })}
                          <td className="py-1 pl-3">
                            <div className={`h-9 rounded-lg flex items-center justify-center text-xs font-bold ${trackTotal > 0 ? 'bg-gray-100 text-gray-800' : 'text-gray-300'}`}>
                              {trackTotal > 0 ? trackTotal : '-'}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {/* Total row */}
                    <tr className="border-t border-gray-200">
                      <td className="py-2 pr-4">
                        <span className="text-xs font-bold text-gray-700">주차 합계</span>
                      </td>
                      {weeklyAnalysis.map((w) => (
                        <td key={w.week} className="py-2 px-1">
                          <div className={`w-full h-9 rounded-lg flex items-center justify-center text-xs font-bold ${w.total > 0 ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-300'}`}>
                            {w.total > 0 ? w.total : '-'}
                          </div>
                        </td>
                      ))}
                      <td className="py-2 pl-3">
                        <div className="h-9 rounded-lg flex items-center justify-center text-xs font-extrabold bg-rose-600 text-white">
                          {summary.totalDropped}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Insight Card */}
            {summary.totalDropped > 0 && summary.peakWeek !== '-' && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-900 mb-1">인사이트</h4>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>{summary.peakWeek}</strong>에 탈락이 가장 많이 발생했습니다 ({summary.peakWeekDrops}명).
                      {(() => {
                        const peakWeekData = weeklyAnalysis.find(w => w.weekLabel === summary.peakWeek);
                        if (!peakWeekData) return '';
                        const topTrack = Object.entries(peakWeekData.byTrack)
                          .sort(([,a], [,b]) => b - a)[0];
                        if (!topTrack || topTrack[1] === 0) return '';
                        return ` 특히 ${topTrack[0]}에서 ${topTrack[1]}명이 탈락하여 해당 주차 커리큘럼 검토가 필요할 수 있습니다.`;
                      })()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropoutAnalytics;
