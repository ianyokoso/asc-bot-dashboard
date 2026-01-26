
import { Member, Track, Submission, SubmissionStatus } from './types';

export const mockMembers: Member[] = [
  { id: '1', name: '김철수', discordId: 'chulsoo#1234', track: Track.BUILDER, joinedAt: '2024-01-15', notionSync: true },
  { id: '2', name: '이영희', discordId: 'younghee#5678', track: Track.SHORTFORM, joinedAt: '2024-01-16', notionSync: true },
  { id: '3', name: '박지성', discordId: 'js_park#0000', track: Track.SALES, joinedAt: '2024-01-17', notionSync: true },
  { id: '4', name: '손흥민', discordId: 'sonny#7777', track: Track.AI_AGENT, joinedAt: '2024-01-18', notionSync: false },
  { id: '5', name: '정우성', discordId: 'ws_jung#1111', track: Track.BUILDER, joinedAt: '2024-01-19', notionSync: true },
  { id: '6', name: '강동원', discordId: 'dongwon#2222', track: Track.SHORTFORM, joinedAt: '2024-01-20', notionSync: true },
  { id: '7', name: '송혜교', discordId: 'hyekyo#3333', track: Track.LONGFORM, joinedAt: '2024-01-21', notionSync: true },
  { id: '8', name: '한소희', discordId: 'sohee#4444', track: Track.SALES, joinedAt: '2024-01-22', notionSync: true },
  { id: '9', name: '공유', discordId: 'gongyoo#9999', track: Track.AI_AGENT, joinedAt: '2024-01-23', notionSync: true },
  { id: '10', name: '수지', discordId: 'suzy#8888', track: Track.LONGFORM, joinedAt: '2024-01-24', notionSync: true },
];

export const generateSubmissions = (): Submission[] => {
  const submissions: Submission[] = [];
  const today = new Date();
  
  // Sundays for weekly tracks (Builder, Sales, AI Agent, Longform)
  const sundays: string[] = [];
  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 4; i++) {
    const d = new Date(lastSunday);
    d.setDate(lastSunday.getDate() - (i * 7));
    sundays.push(d.toISOString().split('T')[0]);
  }

  // 숏폼 트랙을 위한 기수 전체 평일 (예: 1월 3일 ~ 26일)
  const shortformDates: string[] = [];
  const startDate = new Date('2024-01-03');
  const endDate = new Date('2024-01-26');
  
  let current = new Date(startDate);
  while (current <= endDate) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) { // 평일만 포함
      shortformDates.push(current.toISOString().split('T')[0]);
    }
    current.setDate(current.getDate() + 1);
  }

  mockMembers.forEach(member => {
    const relevantDates = (member.track === Track.SHORTFORM) ? shortformDates : sundays;
    
    relevantDates.forEach(dateStr => {
      const rand = Math.random();
      let status: SubmissionStatus = rand > 0.15 ? 'submitted' : 'missed';
      if (rand > 0.95) status = 'pending';

      submissions.push({
        memberId: member.id,
        date: dateStr,
        status: status,
        link: status === 'submitted' ? 'https://notion.so/assignment/' + Math.random().toString(36).substring(7) : undefined
      });
    });
  });

  return submissions;
};
