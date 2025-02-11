import { LucideIcon } from 'lucide-react';

export type ResumeItemType = 'education' | 'work' | 'research' | 'project' | 'award' | 'skill';
export type HobbiesType = 'movies' | 'books' | 'games' | 'music' | 'sports' | 'art' | 'travel' | 'food';
export type TimelineItemType = ResumeItemType | HobbiesType;

export interface TimelineItem {
  type: TimelineItemType;
  title: string;
  organization?: string;
  location?: string;
  date?: string;
  description?: string[];
  image?: string;
  technologies?: string[];
  links?: Array<{
    label: string;
    url: string;
  }>;
  icon: LucideIcon;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface HobbyItem {
  title: string;
  icon: LucideIcon;
  description: string;
  component: React.ComponentType;
  details?: React.ReactNode;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
  path: string;
}

export interface SocialsItem {
  label: string;
  action: string;
  icon: LucideIcon;
}

export interface MovieInfo {
  name: string;
  imageLink: string;
  finished: string;
}

export interface ResumeItem {
  name: string;
  description: string;
  lastModified: string;
  link: string;
}