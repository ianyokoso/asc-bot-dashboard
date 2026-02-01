import React, { useState } from 'react';
import { Mail, Zap, ChevronDown } from 'lucide-react';
import { Member } from '../types';

interface NotificationTesterProps {
    members: Member[];
    onTest: (targetId: string, msgType: string) => void;
}

const NotificationTester: React.FC<NotificationTesterProps> = ({ members, onTest }) => {
    const [targetType, setTargetType] = useState<'me' | 'user'>('me');
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const [msgType, setMsgType] = useState<string>('숏폼 미제출 리마인더');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleTest = () => {
        let targetId = '1392850552416768072'; // Default to admin for 'me'
        if (targetType === 'user') {
            if (!selectedUserId) return alert("테스트 대상을 선택해주세요.");
            targetId = selectedUserId;
        }
        onTest(targetId, msgType);
    };

    return (
        <div className="relative mt-2 group">
            {/* Background Layer with Overflow Hidden (Clips Blobs) */}
            <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none transition-all duration-700 group-hover:bg-indigo-500/10"></div>
            </div>

            {/* Content Layer (Relative, No Overflow Clipping) */}
            <div className="relative z-10 p-6">
                <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-gray-800">
                    <div className="p-1.5 bg-indigo-500/10 rounded-lg backdrop-blur-md border border-indigo-500/20">
                        <Mail className="w-4 h-4 text-indigo-600" />
                    </div>
                    알림 테스트 발송
                </h3>

                <div className="space-y-6">
                    {/* Target Selection */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">Target Audience</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Option 1: Me */}
                            <label className={`cursor-pointer group relative overflow-hidden rounded-xl border transition-all duration-300 ${targetType === 'me' ? 'bg-indigo-50/50 border-indigo-500/50 shadow-sm ring-1 ring-indigo-500/20' : 'bg-white/40 border-white/60 hover:bg-white/60'}`}>
                                <div className="p-3 flex items-center gap-2.5">
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${targetType === 'me' ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300 bg-transparent'}`}>
                                        {targetType === 'me' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                    </div>
                                    <input type="radio" checked={targetType === 'me'} onChange={() => setTargetType('me')} className="hidden" />
                                    <span className={`text-sm font-medium ${targetType === 'me' ? 'text-indigo-900' : 'text-gray-600'}`}>내 DM으로만 보내기</span>
                                </div>
                            </label>

                            {/* Option 2: User */}
                            <label className={`cursor-pointer group relative overflow-hidden rounded-xl border transition-all duration-300 ${targetType === 'user' ? 'bg-indigo-50/50 border-indigo-500/50 shadow-sm ring-1 ring-indigo-500/20' : 'bg-white/40 border-white/60 hover:bg-white/60'}`}>
                                <div className="p-3 flex items-center gap-2.5">
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${targetType === 'user' ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300 bg-transparent'}`}>
                                        {targetType === 'user' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                    </div>
                                    <input type="radio" checked={targetType === 'user'} onChange={() => setTargetType('user')} className="hidden" />
                                    <span className={`text-sm font-medium ${targetType === 'user' ? 'text-indigo-900' : 'text-gray-600'}`}>특정 사용자에게 보내기</span>
                                </div>
                            </label>
                        </div>

                        {/* User Dropdown */}
                        <div className={`transition-all duration-500 ease-in-out relative z-50 ${targetType === 'user' ? 'max-h-20 opacity-100 mt-2 transform translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}`}>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full text-left p-2.5 pl-3 border border-indigo-100/50 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 focus:outline-none flex justify-between items-center transition-all shadow-sm ring-1 ring-transparent focus:ring-indigo-500/30 group"
                                >
                                    <span className={`text-sm ${selectedUserId ? "text-indigo-900 font-medium" : "text-gray-400"}`}>
                                        {selectedUserId
                                            ? (() => {
                                                const m = members.find(m => m.discordId === selectedUserId);
                                                return m ? `${m.discordNickname || m.name} (@${m.discordUsername || 'unknown'})` : "사용자 선택...";
                                            })()
                                            : "사용자 선택..."}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Panel */}
                                {isDropdownOpen && targetType === 'user' && (
                                    <div className="absolute z-[60] w-full mt-2 bg-white/95 backdrop-blur-2xl border border-indigo-100 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top">
                                        <div className="p-2 border-b border-indigo-50 bg-indigo-50/50">
                                            <input
                                                type="text"
                                                placeholder="이름, 닉네임, ID 검색..."
                                                className="w-full p-2 text-xs bg-white border border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500/20 outline-none text-gray-700 placeholder-gray-400"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                        <div className="overflow-y-auto max-h-52 custom-scrollbar p-1">
                                            {Array.isArray(members) && members
                                                .filter(m =>
                                                    (m.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    (m.discordNickname || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    (m.discordUsername || '').toLowerCase().includes(searchTerm.toLowerCase())
                                                )
                                                .map(m => (
                                                    <div
                                                        key={m.discordId}
                                                        onClick={() => {
                                                            setSelectedUserId(m.discordId);
                                                            setIsDropdownOpen(false);
                                                            setSearchTerm('');
                                                        }}
                                                        className={`p-2 rounded-lg text-xs cursor-pointer transition-all flex justify-between items-center ${selectedUserId === m.discordId ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="font-semibold text-gray-900">{m.discordNickname || m.name}</span>
                                                            <span className="text-[10px] text-gray-400">@{m.discordUsername || 'unknown'}</span>
                                                        </div>
                                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedUserId === m.discordId ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'}`}>{m.track || 'No Track'}</span>
                                                    </div>
                                                ))}
                                            {Array.isArray(members) && members.filter(m =>
                                                (m.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                (m.discordNickname || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                (m.discordUsername || '').toLowerCase().includes(searchTerm.toLowerCase())
                                            ).length === 0 && (
                                                    <div className="p-3 text-center text-xs text-gray-400">검색 결과가 없습니다.</div>
                                                )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Message Type Selection */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1">Notification Type</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {['숏폼 미제출 리마인더', '주간 과제 1차 리마인더 (오후)', '주간 과제 2차 리마인더 (저녁)', '패널티 경고 (4회)', '패널티 탈락 (5회)'].map((type) => (
                                <label key={type} className={`cursor-pointer group relative overflow-hidden rounded-xl border transition-all duration-200 ${msgType === type ? 'bg-indigo-50/50 border-indigo-500/50 shadow-sm ring-1 ring-indigo-500/20' : 'bg-white/40 border-white/60 hover:bg-white/60 text-gray-600'}`}>
                                    <div className="p-2.5 flex items-center justify-center text-center h-full gap-2">
                                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${msgType === type ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300 bg-transparent'}`}>
                                            {msgType === type && <div className="w-1 h-1 bg-white rounded-full"></div>}
                                        </div>
                                        <input type="radio" name="msgType" checked={msgType === type} onChange={() => setMsgType(type)} className="hidden" />
                                        <span className={`text-[13px] font-medium ${msgType === type ? 'text-indigo-900' : ''}`}>{type}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleTest}
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-[0_4px_14px_0_rgba(79,70,229,0.3)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                        Send Test Notification
                        <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationTester;
