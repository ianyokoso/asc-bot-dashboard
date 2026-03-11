import React, { useState } from 'react';
import { TrackConfigItem } from '../types';
import { Plus, Trash2, Save, ChevronDown, ChevronUp, GripVertical } from 'lucide-react';

interface TrackManagerProps {
    trackConfig: TrackConfigItem[];
    onSave: (config: TrackConfigItem[]) => void;
    isSaving?: boolean;
}

const EMPTY_TRACK: TrackConfigItem = {
    notionName: '',
    displayName: '',
    schedule: 'weekly',
    missingThreshold: 1,
    groupDbName: '',
    linkedDropTracks: [],
    aliases: [],
    order: 0,
};

const TrackManager: React.FC<TrackManagerProps> = ({ trackConfig, onSave, isSaving }) => {
    const [tracks, setTracks] = useState<TrackConfigItem[]>(
        [...trackConfig].sort((a, b) => a.order - b.order)
    );
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
    const [hasChanges, setHasChanges] = useState(false);

    const update = (idx: number, field: keyof TrackConfigItem, value: any) => {
        setTracks(prev => {
            const next = [...prev];
            next[idx] = { ...next[idx], [field]: value };
            return next;
        });
        setHasChanges(true);
    };

    const addTrack = () => {
        const maxOrder = tracks.reduce((max, t) => Math.max(max, t.order), 0);
        setTracks(prev => [...prev, { ...EMPTY_TRACK, order: maxOrder + 1 }]);
        setExpandedIdx(tracks.length);
        setHasChanges(true);
    };

    const removeTrack = (idx: number) => {
        setTracks(prev => prev.filter((_, i) => i !== idx));
        setExpandedIdx(null);
        setHasChanges(true);
    };

    const moveTrack = (idx: number, dir: -1 | 1) => {
        const target = idx + dir;
        if (target < 0 || target >= tracks.length) return;
        setTracks(prev => {
            const next = [...prev];
            [next[idx], next[target]] = [next[target], next[idx]];
            return next.map((t, i) => ({ ...t, order: i + 1 }));
        });
        setExpandedIdx(target);
        setHasChanges(true);
    };

    const handleSave = () => {
        const ordered = tracks.map((t, i) => ({ ...t, order: i + 1 }));
        onSave(ordered);
        setHasChanges(false);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="text-base font-bold flex items-center gap-2 text-[#1e293b]">
                    <div className="w-1 h-5 bg-violet-500 rounded-full"></div>
                    트랙 관리
                    <span className="text-xs font-medium text-slate-400 ml-1">{tracks.length}개</span>
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={addTrack}
                        className="px-3 py-1.5 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        트랙 추가
                    </button>
                    {hasChanges && (
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 disabled:opacity-50"
                        >
                            <Save className="w-3.5 h-3.5" />
                            {isSaving ? '저장 중...' : '저장'}
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {tracks.map((track, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md shadow-sm overflow-hidden transition-all"
                    >
                        {/* Header row */}
                        <div
                            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/70 transition-colors"
                            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                        >
                            <div className="flex flex-col gap-0.5">
                                <button onClick={e => { e.stopPropagation(); moveTrack(idx, -1); }} className="text-slate-300 hover:text-slate-600 disabled:opacity-30" disabled={idx === 0}>
                                    <ChevronUp className="w-3 h-3" />
                                </button>
                                <button onClick={e => { e.stopPropagation(); moveTrack(idx, 1); }} className="text-slate-300 hover:text-slate-600 disabled:opacity-30" disabled={idx === tracks.length - 1}>
                                    <ChevronDown className="w-3 h-3" />
                                </button>
                            </div>

                            <span className="text-xs font-mono text-slate-400 w-5">{idx + 1}</span>

                            <div className="flex-1 flex items-center gap-3">
                                <span className="font-bold text-sm text-slate-800">{track.displayName || '(이름 없음)'}</span>
                                <span className="text-xs text-slate-400">{track.notionName}</span>
                            </div>

                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${track.schedule === 'daily' ? 'bg-rose-100 text-rose-600' : 'bg-indigo-100 text-indigo-600'}`}>
                                {track.schedule === 'daily' ? '매일' : '주간'}
                            </span>

                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                                {track.missingThreshold}회 탈락
                            </span>

                            {expandedIdx === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </div>

                        {/* Expanded edit form */}
                        {expandedIdx === idx && (
                            <div className="px-4 pb-4 pt-1 border-t border-slate-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                    <Field label="노션 트랙명 (한글)" value={track.notionName} onChange={v => update(idx, 'notionName', v)} placeholder="크리에이터 숏폼 트랙" />
                                    <Field label="대시보드 표시명 (영문)" value={track.displayName} onChange={v => update(idx, 'displayName', v)} placeholder="Shortform" />
                                    <Field label="조 DB 트랙명" value={track.groupDbName} onChange={v => update(idx, 'groupDbName', v)} placeholder="크리에이터 트랙" />

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">제출 주기</label>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => update(idx, 'schedule', 'daily')}
                                                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${track.schedule === 'daily' ? 'bg-rose-500 text-white border-rose-500' : 'bg-white/50 text-slate-600 border-slate-200 hover:border-rose-300'}`}
                                            >
                                                매일 (월-금)
                                            </button>
                                            <button
                                                onClick={() => update(idx, 'schedule', 'weekly')}
                                                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${track.schedule === 'weekly' ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white/50 text-slate-600 border-slate-200 hover:border-indigo-300'}`}
                                            >
                                                주간 (일요일)
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">탈락 기준 (미제출 횟수)</label>
                                        <input
                                            type="number"
                                            min={1}
                                            value={track.missingThreshold}
                                            onChange={e => update(idx, 'missingThreshold', parseInt(e.target.value) || 1)}
                                            className="w-full px-3 py-2 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-indigo-400/30 outline-none text-sm font-semibold text-gray-800"
                                        />
                                    </div>

                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">별칭 (쉼표로 구분)</label>
                                        <input
                                            type="text"
                                            value={track.aliases.join(', ')}
                                            onChange={e => update(idx, 'aliases', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                                            className="w-full px-3 py-2 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-indigo-400/30 outline-none text-sm font-medium text-gray-700"
                                            placeholder="숏폼 과제, 크리에이터 라이트 트랙 (숏폼)"
                                        />
                                    </div>

                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">연동 탈락 트랙 (노션명, 쉼표 구분)</label>
                                        <input
                                            type="text"
                                            value={track.linkedDropTracks.join(', ')}
                                            onChange={e => update(idx, 'linkedDropTracks', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                                            className="w-full px-3 py-2 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-indigo-400/30 outline-none text-sm font-medium text-gray-700"
                                            placeholder="크리에이터 숏폼 트랙"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button
                                        onClick={() => removeTrack(idx)}
                                        className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border border-rose-200"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                        이 트랙 삭제
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {tracks.length === 0 && (
                    <div className="text-center py-8 text-slate-400 text-sm font-medium">
                        등록된 트랙이 없습니다. "트랙 추가" 버튼을 눌러 추가하세요.
                    </div>
                )}
            </div>
        </div>
    );
};

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; placeholder?: string }> = ({ label, value, onChange, placeholder }) => (
    <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">{label}</label>
        <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-white/50 border border-white/60 rounded-xl focus:ring-2 focus:ring-indigo-400/30 outline-none text-sm font-semibold text-gray-800 placeholder-gray-400/70"
        />
    </div>
);

export default TrackManager;
