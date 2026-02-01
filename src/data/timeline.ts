import { TimelineItem } from '@/types/timeline';

export const educationData: TimelineItem[] = [
  {
    title: 'BEng Software Engineering',
    organization: "Queen's University Belfast",
    organizationUrl: 'https://www.qub.ac.uk/',
    date: '2025 – Present (Placement Year Available)',
    description:
      'Software Engineering degree with focus on backend development, algorithms, and system design.',
  },
  {
    title: 'Software Engineering (Year 1)',
    organization: 'National Technical University of Ukraine "Igor Sikorsky KPI"',
    organizationUrl: 'https://kpi.ua/en',
    date: 'Completed Year 1',
    description:
      'Completed first year covering algorithms, Java, C/C++, and computer systems fundamentals.',
  },
];

// Unified experience data - ordered by relevance to backend engineering
export const experienceData: TimelineItem[] = [
  {
    title: 'Backend Developer (Part-Time)',
    organization: 'Zardan Systems',
    organizationUrl: 'https://zardansystems.com/en',
    date: 'October 2025 – Present',
    location: 'Remote',
    description:
      'Contributing to backend services using TypeScript and Go. Designing and maintaining REST APIs with authentication and validation. Collaborating with product and frontend teams on feature implementation. Debugging production issues and participating in code reviews.',
  },
  {
    title: 'Software Development Trainee',
    organization: 'Belfast Met & FIT (sponsored by Bank of America)',
    organizationUrl: 'https://www.belfastmet.ac.uk/digitalskills/',
    date: 'June 2025 – October 2025',
    location: 'Belfast, UK',
    description:
      'Built REST APIs and worked with SQL databases in industry-led training program. Developed Python automation tools and gained hands-on experience with backend development patterns. Completed SQL professional certification.',
  },
  {
    title: 'Mathematics Tutor / Curator',
    organization: 'Online School StudentUA',
    organizationUrl: 'https://student.ua/',
    date: 'August 2024 – June 2025',
    location: 'Remote',
    description:
      'Explained complex technical concepts and adapted communication style for diverse learning needs.',
  },
];

// Legacy exports for backward compatibility
export const commercialExperience: TimelineItem[] = [experienceData[0]];
export const otherExperience: TimelineItem[] = experienceData.slice(1);
export const workData: TimelineItem[] = experienceData;
