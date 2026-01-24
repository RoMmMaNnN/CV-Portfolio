// Type definitions for projects and skills

export interface Skill {
  name: string;
  icon: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  linkSecond?: string;
  progress?: number;
  estimatedRelease?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  databases: Skill[];
}
