
export enum Track {
  SHORTFORM = 'Shortform',
  LONGFORM = 'Longform',
  BUILDER_BASIC = 'Builder Basic',
  BUILDER_ADVANCED = 'Builder Advanced',
  SALES = 'Sales',
  AI_AGENT = 'AI Agent',
  UNASSIGNED = 'Unassigned'
}

export type SubmissionStatus = 'submitted' | 'missed' | 'pending' | 'none';

export interface Member {
  id: string;
  name: string;
  discordId: string;
  discordUsername?: string;
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
}

export interface TrackConfig {
  track: Track;
  reminderTime: string;
  isFixedAssignment: boolean;
}
