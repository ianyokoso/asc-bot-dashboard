
export type Track = string;

export const TRACKS = {
  SHORTFORM: 'Shortform' as Track,
  LONGFORM: 'Longform' as Track,
  BUILDER_BASIC: 'Builder Basic' as Track,
  BUILDER_ADVANCED: 'Builder Advanced' as Track,
  SALES: 'Sales' as Track,
  AI_AGENT: 'AI Agent' as Track,
  CREATOR_LITE: 'Creator Lite' as Track,
  BUILDER_LITE: 'Builder Lite' as Track,
  UNASSIGNED: 'Unassigned' as Track,
} as const;

export type SubmissionStatus = 'submitted' | 'missed' | 'pending' | 'none';

export interface TrackConfigItem {
  notionName: string;
  displayName: string;
  schedule: 'daily' | 'weekly';
  missingThreshold: number;
  groupDbName: string;
  linkedDropTracks: string[];
  aliases: string[];
  order: number;
}

export interface Member {
  id: string;
  name: string;
  discordId: string;
  discordUsername?: string;
  discordNickname?: string;
  profileImage?: string;
  track: Track;
  tracks?: Track[];
  joinedAt: string;
  notionSync: boolean;
}

export interface Submission {
  memberId: string;
  date: string;
  status: SubmissionStatus;
  tracks?: Track[];
  link?: string;
  content?: string;
  images?: string[];
}
