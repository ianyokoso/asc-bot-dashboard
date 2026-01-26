
import React from 'react';
import { Users, FileCheck, AlertCircle, TrendingUp } from 'lucide-react';
import { Member, Submission } from '../types';

interface DashboardStatsProps {
  members: Member[];
  submissions: Submission[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ members, submissions }) => {
  const activeSubmissions = submissions.filter(s => s.status !== 'none');
  const submitted = activeSubmissions.filter(s => s.status === 'submitted').length;
  const missed = activeSubmissions.filter(s => s.status === 'missed').length;
  const rate = activeSubmissions.length > 0 ? (submitted / activeSubmissions.length) * 100 : 0;

  const stats = [
    { label: '전체 멤버', value: members.length.toString(), icon: Users, color: 'blue' },
    { label: '누적 제출물', value: submitted.toString(), icon: FileCheck, color: 'emerald' },
    { label: '미제출 항목', value: missed.toString(), icon: AlertCircle, color: 'rose' },
    { label: '평균 제출률', value: `${rate.toFixed(1)}%`, icon: TrendingUp, color: 'indigo' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg bg-${stat.color}-50 flex items-center justify-center`}>
            <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
