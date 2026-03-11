import React, { useMemo, useState } from 'react';
import LuxuryHeader from '../components/LuxuryHeader';
import LuxuryTrackTabs from '../components/LuxuryTrackTabs';
import LuxurySubmissionTable from '../components/LuxurySubmissionTable';
import { Member, Submission, Track, TrackConfigItem, TRACKS } from '../types';

interface UserDashboardProps {
  members: Member[];
  submissions: Submission[];
  isSyncing: boolean;
  onSync: () => void;
  cohortConfig: {
    startDate: string;
    endDate: string;
    name: string;
    holidayStart?: string;
    holidayEnd?: string;
  };
  trackConfig: TrackConfigItem[];
}

const UserDashboard: React.FC<UserDashboardProps> = ({
  members,
  submissions,
  isSyncing,
  onSync,
  cohortConfig,
  trackConfig
}) => {
  const currentHeaderTitle = useMemo(() => {
    const displayCohort = cohortConfig.name.endsWith('기') ? cohortConfig.name : `${cohortConfig.name}기`;
    return `${displayCohort} 과제 제출 현황`;
  }, [cohortConfig.name]);

  // Tab State Managed Here (Top Level for User View)
  const trackOrder = trackConfig.length > 0
    ? [...trackConfig].sort((a, b) => a.order - b.order).map(tc => tc.displayName as Track)
    : [TRACKS.SHORTFORM, TRACKS.LONGFORM, TRACKS.BUILDER_BASIC, TRACKS.BUILDER_ADVANCED, TRACKS.SALES, TRACKS.AI_AGENT];
  const [activeTrack, setActiveTrack] = useState<Track>(trackOrder[0] || 'Shortform');

  return (
    <div className="flex h-screen bg-[#F0F4F8] overflow-hidden relative font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
      {/* 1. Visual Foundation: Stronger Pastel Mesh Gradient matching Mockup */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 z-0"></div>

      {/* Decorative Blobs (Vibrant & Large) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-80 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-80 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[30%] right-[30%] w-[40%] h-[40%] bg-pink-300/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-80 animate-blob animation-delay-4000"></div>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10 h-full">
        {/* Unified Luxury Header - Reduced padding handled inside component, minimal gap here */}
        <LuxuryHeader
          title={currentHeaderTitle}
          onSync={onSync}
          isSyncing={isSyncing}
          startDate={cohortConfig.startDate}
          endDate={cohortConfig.endDate}
        />

        {/* Floating Track Tabs */}
        <LuxuryTrackTabs
          trackOrder={trackOrder}
          activeTrack={activeTrack}
          setActiveTrack={setActiveTrack}
          members={members}
        />

        {/* Spacious Data Table - Reduced top padding */}
        <LuxurySubmissionTable
          members={members}
          submissions={submissions}
          cohortConfig={cohortConfig}
          activeTrack={activeTrack}
          schedule={trackConfig.find(tc => tc.displayName === activeTrack)?.schedule || 'daily'}
        />
      </main>
    </div>
  );
};

export default UserDashboard;
