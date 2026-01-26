
export enum Track {
  SHORTFORM = 'Shortform',
  LONGFORM = 'Longform',
  BUILDER = 'Builder',
  SALES = 'Sales',
  AI_AGENT = 'AI Agent'
}

export type SubmissionStatus = 'submitted' | 'missed' | 'pending' | 'none';

export interface Member {
  id: string;
  name: string;
  discordId: string;
  track: Track;
  joinedAt: string;
  notionSync: boolean;
}

export interface Submission {
  memberId: string;
  date: string;
  status: SubmissionStatus;
  link?: string;
}

export interface TrackConfig {
  track: Track;
  reminderTime: string;
  isFixedAssignment: boolean;
}
