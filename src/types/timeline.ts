// Type definitions for timeline items (education and work history)

export interface TimelineItem {
  title: string;
  organization: string;
  organizationUrl: string;
  date: string;
  description: string;
  location?: string;
}
