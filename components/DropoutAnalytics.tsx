import React, { useState, useEffect, useMemo } from 'react';
import { UserMinus, TrendingDown, Users, AlertTriangle, Calendar, RefreshCw, BarChart3, Target } from 'lucide-react';

interface DroppedMember {
  memberId: string;
  name: string;
  track: string;
  droppedDate: string;
  droppedWeek?: number;
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

const LINE_COLORS = [
  '#8b5cf6', '#f43f5e', '#06b6d4', '#f59e0b', '#10b981', '#ec4899', '#3b82f6', '#f97316',
];

const DropoutAnalytics: React.FC = () => {
  const [stats, setStats] = useState<DropStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [view, setView] = useState<'overview' | 'weekly'>('overview');
  const [hoveredCell, setHoveredCell] = useState<{ track: string; week: number } | null>(null);

  const isProxyNeeded = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app');
  const API_BASE_URL = isProxyNeeded ? '/api-proxy' : 'http://168.107.16.76:8000';

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/drop-stats`);
      if (!res.ok) { setError(`서버 오류 (${res.status})`); return; }
      const data = await res.json();
      if (data.status === 'success') {
        setStats({
          summary: data.summary || { totalMembers: 0, totalDropped: 0, overallDropRate: 0, peakWeek: '-', peakWeekDrops: 0 },
          trackStats: data.trackStats || [],
          weeklyAnalysis: data.weeklyAnalysis || [],
          allTracks: data.allTracks || [],
          recentDrops: data.recentDrops || [],
        });
      } else { setError(data.message || 'Failed to load'); }
    } catch (e: any) { setError('서버 연결 실패: ' + (e?.message || '')); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchStats(); }, []);

  const trackColorMap = useMemo(() => {
    const map: Record<string, string> = {};
    if (stats?.allTracks) stats.allTracks.forEach((t, i) => { map[t] = LINE_COLORS[i % LINE_COLORS.length]; });
    return map;
  }, [stats?.allTracks]);

  // Compute retention data: per track, cumulative retention % at each week
  const retentionData = useMemo(() => {
    if (!stats) return { byTrack: {} as Record<string, number[]>, overall: [] as number[] };
    const { trackStats, weeklyAnalysis, allTracks } = stats;
    const byTrack: Record<string, number[]> = {};
    const overallRetention: number[] = [];

    // Get current week number (how far into cohort we are)
    const today = new Date();
    const cohortStart = new Date('2026-02-11'); // Will be approximate
    const currentWeek = Math.max(1, Math.ceil((today.getTime() - cohortStart.getTime()) / (7 * 86400000)));

    for (const track of allTracks) {
      const ts = trackStats.find(t => t.track === track);
      const total = ts?.total || 0;
      if (total === 0) { byTrack[track] = weeklyAnalysis.map(() => 100); continue; }

      let cumulativeDrops = 0;
      byTrack[track] = weeklyAnalysis.map((w) => {
        if (w.week > currentWeek) return -1; // future week, no data yet
        cumulativeDrops += (w.byTrack?.[track] || 0);
        return Math.round(((total - cumulativeDrops) / total) * 1000) / 10;
      });
    }

    // Overall retention
    const totalMembers = stats.summary.totalMembers || 1;
    let cumDrops = 0;
    for (const w of weeklyAnalysis) {
      if (w.week > currentWeek) { overallRetention.push(-1); continue; }
      cumDrops += w.total;
      overallRetention.push(Math.round(((totalMembers - cumDrops) / totalMembers) * 1000) / 10);
    }

    return { byTrack, overall: overallRetention };
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
          <button onClick={fetchStats} className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold">다시 시도</button>
        </div>
      </div>
    );
  }

  const { summary, trackStats, weeklyAnalysis, allTracks, recentDrops } = stats;
  const filteredMembers = selectedTrack
    ? (trackStats.find(t => t.track === selectedTrack)?.droppedMembers || [])
    : (recentDrops || []);

  const getBarColor = (rate: number) => rate >= 20 ? 'bg-rose-500' : rate >= 10 ? 'bg-amber-500' : 'bg-emerald-500';
  const getRateColor = (rate: number) => rate >= 20 ? 'text-rose-600' : rate >= 10 ? 'text-amber-600' : 'text-emerald-600';

  // Purple gradient for retention heatmap (higher = darker purple = better retention)
  const getRetentionColor = (pct: number) => {
    if (pct < 0) return 'bg-gray-50 text-gray-300'; // future
    if (pct >= 95) return 'bg-purple-600 text-white';
    if (pct >= 90) return 'bg-purple-500 text-white';
    if (pct >= 80) return 'bg-purple-400 text-white';
    if (pct >= 70) return 'bg-purple-300 text-purple-900';
    if (pct >= 60) return 'bg-purple-200 text-purple-800';
    if (pct >= 50) return 'bg-purple-100 text-purple-700';
    return 'bg-purple-50 text-purple-600';
  };

  // SVG Retention Curve Chart
  const RetentionChart = ({ data, tracks, colors, weeks }: {
    data: Record<string, number[]>; tracks: string[]; colors: Record<string, string>; weeks: WeeklyData[];
  }) => {
    const W = 700, H = 240, padL = 45, padR = 20, padT = 20, padB = 40;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;
    const validWeeks = weeks.filter((_, i) => {
      return tracks.some(t => (data[t]?.[i] ?? -1) >= 0);
    });
    const numPoints = validWeeks.length;
    if (numPoints === 0) return <p className="text-sm text-gray-400 text-center py-8">데이터 없음</p>;

    const xStep = numPoints > 1 ? chartW / (numPoints - 1) : chartW;
    const yScale = (val: number) => padT + chartH - (val / 100) * chartH;
    const xPos = (i: number) => padL + (numPoints > 1 ? i * xStep : chartW / 2);

    // Grid lines
    const gridLines = [0, 25, 50, 75, 100];

    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: '260px' }}>
        {/* Grid */}
        {gridLines.map(v => (
          <g key={v}>
            <line x1={padL} x2={W - padR} y1={yScale(v)} y2={yScale(v)} stroke="#e5e7eb" strokeWidth={1} strokeDasharray={v === 0 ? '' : '4,4'} />
            <text x={padL - 8} y={yScale(v) + 4} textAnchor="end" className="fill-gray-400" fontSize="10" fontWeight="500">{v}%</text>
          </g>
        ))}

        {/* X axis labels */}
        {validWeeks.map((w, i) => (
          <text key={w.week} x={xPos(i)} y={H - 8} textAnchor="middle" className="fill-gray-500" fontSize="10" fontWeight="600">{w.weekLabel}</text>
        ))}

        {/* Lines per track */}
        {tracks.map((track) => {
          const vals = data[track] || [];
          const points = validWeeks.map((_, i) => {
            const v = vals[weeks.indexOf(validWeeks[i])];
            return v >= 0 ? { x: xPos(i), y: yScale(v), v } : null;
          }).filter(Boolean) as { x: number; y: number; v: number }[];

          if (points.length < 1) return null;
          const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

          return (
            <g key={track}>
              <path d={pathD} fill="none" stroke={colors[track] || '#999'} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={4} fill="white" stroke={colors[track] || '#999'} strokeWidth={2} />
              ))}
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-8 pt-6 pb-2 shrink-0">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-100/80 rounded-xl">
              <TrendingDown className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#1e293b]">코호트 리텐션 분석</h2>
              <p className="text-xs text-gray-500 font-medium">트랙별 잔존율 및 주차별 이탈 추이</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/80 backdrop-blur-md p-1 rounded-full flex gap-1 border border-gray-200 shadow-sm">
              <button onClick={() => setView('overview')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${view === 'overview' ? 'bg-[#1e293b] text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}>
                <BarChart3 className="w-3.5 h-3.5" />트랙별
              </button>
              <button onClick={() => setView('weekly')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${view === 'weekly' ? 'bg-[#1e293b] text-white shadow-md' : 'text-gray-500 hover:text-gray-800'}`}>
                <Calendar className="w-3.5 h-3.5" />코호트
              </button>
            </div>
            <button onClick={fetchStats} className="p-2.5 bg-white/60 hover:bg-white/80 rounded-xl border border-white/60 transition-all shadow-sm">
              <RefreshCw className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-blue-100 rounded-lg"><Users className="w-3.5 h-3.5 text-blue-600" /></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">전체 멤버</span>
            </div>
            <p className="text-2xl font-extrabold text-[#1e293b]">{summary.totalMembers}<span className="text-sm font-bold text-gray-400 ml-0.5">명</span></p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-rose-100 rounded-lg"><UserMinus className="w-3.5 h-3.5 text-rose-600" /></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">탈락 인원</span>
            </div>
            <p className="text-2xl font-extrabold text-rose-600">{summary.totalDropped}<span className="text-sm font-bold text-gray-400 ml-0.5">명</span></p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-purple-100 rounded-lg"><TrendingDown className="w-3.5 h-3.5 text-purple-600" /></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">전체 잔존율</span>
            </div>
            <p className="text-2xl font-extrabold text-purple-600">{(100 - summary.overallDropRate).toFixed(1)}<span className="text-sm font-bold ml-0.5">%</span></p>
          </div>
          <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-amber-100 rounded-lg"><Target className="w-3.5 h-3.5 text-amber-600" /></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">이탈 집중 주차</span>
            </div>
            <p className="text-2xl font-extrabold text-amber-600">{summary.peakWeek || '-'}
              {(summary.peakWeekDrops || 0) > 0 && <span className="text-sm font-bold text-gray-400 ml-1">({summary.peakWeekDrops}명)</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-8 pb-6 overflow-y-auto custom-scrollbar min-h-0">
        {view === 'overview' ? (
          /* ===== TRACK OVERVIEW ===== */
          <div className="flex gap-6 h-full">
            <div className="w-1/2 flex flex-col gap-2.5">
              <h3 className="text-sm font-bold text-gray-700 mb-1">트랙별 탈락률</h3>
              <button onClick={() => setSelectedTrack(null)} className={`w-full text-left p-3.5 rounded-2xl border transition-all ${selectedTrack === null ? 'bg-indigo-50/80 border-indigo-200 shadow-sm' : 'bg-white/50 border-white/60 hover:bg-white/70'}`}>
                <span className="text-sm font-bold text-gray-700">전체 최근 탈락자</span>
              </button>
              {trackStats.map((ts) => (
                <button key={ts.track} onClick={() => setSelectedTrack(ts.track)} className={`w-full text-left p-3.5 rounded-2xl border transition-all ${selectedTrack === ts.track ? 'bg-indigo-50/80 border-indigo-200 shadow-sm' : 'bg-white/50 border-white/60 hover:bg-white/70'}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: trackColorMap[ts.track] || '#999' }}></div>
                      <span className="text-sm font-bold text-gray-800">{ts.track}</span>
                    </div>
                    <span className={`text-sm font-extrabold ${getRateColor(ts.dropRate)}`}>{ts.dropRate}%</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2 ml-[18px]">
                    <span className="text-[11px] text-gray-500">{ts.active}명 활동</span>
                    <span className="text-[11px] text-gray-300">|</span>
                    <span className="text-[11px] text-rose-500 font-semibold">{ts.dropped}명 탈락</span>
                    <span className="text-[11px] text-gray-300">|</span>
                    <span className="text-[11px] text-gray-500">총 {ts.total}명</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden ml-[18px]">
                    <div className={`h-full rounded-full transition-all duration-500 ${getBarColor(ts.dropRate)}`} style={{ width: `${Math.min(ts.dropRate, 100)}%` }} />
                  </div>
                </button>
              ))}
            </div>
            <div className="w-1/2 flex flex-col">
              <h3 className="text-sm font-bold text-gray-700 mb-2">
                {selectedTrack ? `${selectedTrack} 탈락자` : '최근 탈락자'}
                <span className="ml-2 text-xs font-medium text-gray-400">({filteredMembers.length}명)</span>
              </h3>
              {filteredMembers.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center"><UserMinus className="w-8 h-8 text-gray-200 mx-auto mb-2" /><p className="text-sm text-gray-400">탈락자가 없습니다</p></div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {filteredMembers.map((m, idx) => (
                    <div key={`${m.memberId}-${idx}`} className="p-3.5 rounded-xl bg-white/60 border border-white/60 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center"><UserMinus className="w-3.5 h-3.5 text-rose-500" /></div>
                        <div><p className="text-sm font-bold text-gray-800">{m.name}</p><p className="text-[11px] text-gray-500">{m.track}</p></div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500"><Calendar className="w-3 h-3" />{m.droppedDate}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ===== COHORT RETENTION VIEW (Adjust-style) ===== */
          <div className="flex flex-col gap-6">

            {/* 1. Cohort Retention Table */}
            <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-800">Cohort Analysis</h3>
                <div className="flex items-center gap-4 text-[10px] text-gray-400">
                  <span>Metric: <strong className="text-gray-600">Retention</strong></span>
                </div>
              </div>

              {weeklyAnalysis.length > 0 && allTracks.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left text-[11px] font-bold text-gray-500 pb-3 pr-4 w-48 sticky left-0 bg-white/70">트랙</th>
                        <th className="text-center text-[11px] font-bold text-gray-500 pb-3 px-2 min-w-[64px]">멤버</th>
                        {weeklyAnalysis.map((w) => (
                          <th key={w.week} className="text-center text-[11px] font-bold text-gray-500 pb-3 px-1 min-w-[72px]">
                            {w.weekLabel}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {allTracks.map((track) => {
                        const ts = trackStats.find(t => t.track === track);
                        const total = ts?.total || 0;
                        const retention = retentionData.byTrack[track] || [];

                        return (
                          <tr key={track} className="group">
                            <td className="py-1.5 pr-4 sticky left-0 bg-white/70">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: trackColorMap[track] || '#999' }}></div>
                                <span className="text-xs font-semibold text-gray-700 truncate">{track}</span>
                              </div>
                            </td>
                            <td className="py-1.5 px-2 text-center">
                              <span className="text-xs font-bold text-gray-800">{total}</span>
                            </td>
                            {weeklyAnalysis.map((w, wi) => {
                              const val = retention[wi] ?? -1;
                              const isHovered = hoveredCell?.track === track && hoveredCell?.week === w.week;
                              return (
                                <td key={w.week} className="py-1.5 px-1"
                                  onMouseEnter={() => setHoveredCell({ track, week: w.week })}
                                  onMouseLeave={() => setHoveredCell(null)}
                                >
                                  <div className={`h-10 rounded-lg flex items-center justify-center text-xs font-semibold transition-all cursor-default
                                    ${val < 0 ? 'bg-gray-50 text-gray-300' : getRetentionColor(val)}
                                    ${isHovered ? 'ring-2 ring-purple-400 ring-offset-1 scale-105' : ''}
                                  `}>
                                    {val >= 0 ? `${val}%` : '–'}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}

                      {/* Total row */}
                      <tr className="border-t-2 border-purple-100">
                        <td className="py-2.5 pr-4 sticky left-0 bg-white/70">
                          <span className="text-xs font-extrabold text-purple-700">Total</span>
                        </td>
                        <td className="py-2.5 px-2 text-center">
                          <span className="text-xs font-extrabold text-purple-700">{summary.totalMembers}</span>
                        </td>
                        {weeklyAnalysis.map((_, wi) => {
                          const val = retentionData.overall[wi] ?? -1;
                          return (
                            <td key={wi} className="py-2.5 px-1">
                              <div className={`h-10 rounded-lg flex items-center justify-center text-xs font-bold transition-all
                                ${val < 0 ? 'bg-gray-50 text-gray-300' : 'bg-purple-700 text-white'}
                              `}>
                                {val >= 0 ? `${val}%` : '–'}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center py-8">주차별 데이터가 없습니다</p>
              )}
            </div>

            {/* 2. Retention Curve Chart */}
            <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-800">Cohort Analysis Chart</h3>
                <div className="flex items-center gap-4 text-[10px] text-gray-400">
                  <span>Metric: <strong className="text-gray-600">Retention</strong></span>
                </div>
              </div>

              <RetentionChart
                data={retentionData.byTrack}
                tracks={allTracks}
                colors={trackColorMap}
                weeks={weeklyAnalysis}
              />

              {/* Legend */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 pt-3 border-t border-gray-100">
                {allTracks.map((track) => (
                  <div key={track} className="flex items-center gap-1.5">
                    <div className="w-3 h-[3px] rounded-full" style={{ backgroundColor: trackColorMap[track] || '#999' }}></div>
                    <span className="text-[11px] font-medium text-gray-600">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Performance Trend (Overall) */}
            <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-800">Performance Trends</h3>
                <div className="flex items-center gap-4 text-[10px] text-gray-400">
                  <span>Metric: <strong className="text-gray-600">Retention</strong></span>
                  <span>Period: <strong className="text-gray-600">Week</strong></span>
                </div>
              </div>

              {(() => {
                const W = 700, H = 200, padL = 45, padR = 20, padT = 20, padB = 40;
                const chartW = W - padL - padR;
                const chartH = H - padT - padB;
                const overall = retentionData.overall.filter(v => v >= 0);
                if (overall.length === 0) return <p className="text-sm text-gray-400 text-center py-8">데이터 없음</p>;

                const xStep = overall.length > 1 ? chartW / (overall.length - 1) : chartW;
                const yScale = (v: number) => padT + chartH - (v / 100) * chartH;
                const xPos = (i: number) => padL + (overall.length > 1 ? i * xStep : chartW / 2);

                const points = overall.map((v, i) => ({ x: xPos(i), y: yScale(v), v }));
                const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
                const areaD = pathD + ` L${points[points.length - 1].x},${padT + chartH} L${points[0].x},${padT + chartH} Z`;

                return (
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: '220px' }}>
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {[0, 25, 50, 75, 100].map(v => (
                      <g key={v}>
                        <line x1={padL} x2={W - padR} y1={yScale(v)} y2={yScale(v)} stroke="#e5e7eb" strokeWidth={1} strokeDasharray={v === 0 ? '' : '4,4'} />
                        <text x={padL - 8} y={yScale(v) + 4} textAnchor="end" className="fill-gray-400" fontSize="10" fontWeight="500">{v}%</text>
                      </g>
                    ))}
                    {points.map((_, i) => (
                      <text key={i} x={xPos(i)} y={H - 8} textAnchor="middle" className="fill-gray-500" fontSize="10" fontWeight="600">
                        {weeklyAnalysis[i]?.weekLabel || ''}
                      </text>
                    ))}
                    <path d={areaD} fill="url(#areaGrad)" />
                    <path d={pathD} fill="none" stroke="#8b5cf6" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                    {points.map((p, i) => (
                      <circle key={i} cx={p.x} cy={p.y} r={4} fill="white" stroke="#8b5cf6" strokeWidth={2} />
                    ))}
                  </svg>
                );
              })()}

              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
                <div className="w-3 h-[3px] rounded-full bg-purple-500"></div>
                <span className="text-[11px] font-medium text-gray-500">전체 잔존율</span>
              </div>
            </div>

            {/* 4. Insight */}
            {summary.totalDropped > 0 && summary.peakWeek && summary.peakWeek !== '-' && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-purple-900 mb-1">인사이트</h4>
                    <p className="text-xs text-purple-800 leading-relaxed">
                      <strong>{summary.peakWeek}</strong>에 이탈이 가장 많이 발생했습니다 ({summary.peakWeekDrops}명).
                      {(() => {
                        try {
                          const peakWeekData = weeklyAnalysis.find(w => w.weekLabel === summary.peakWeek);
                          if (!peakWeekData?.byTrack) return '';
                          const entries = Object.entries(peakWeekData.byTrack).filter(([, v]) => v > 0);
                          if (entries.length === 0) return '';
                          const topTrack = entries.sort(([, a], [, b]) => b - a)[0];
                          return ` 특히 ${topTrack[0]}에서 ${topTrack[1]}명이 이탈하여 해당 주차 커리큘럼 점검이 필요합니다.`;
                        } catch { return ''; }
                      })()}
                      {' '}전체 잔존율은 {(100 - summary.overallDropRate).toFixed(1)}%입니다.
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
