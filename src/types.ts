import {LucideIcon} from 'lucide-react';

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
    resumeItem?: string[];
    image?: string;
    technologies?: string[];
    links?: Array<{
        label: string;
        url: string;
    }>;
    icon: LucideIcon;
}

export interface TechSkillItem {
    techSkill: string;
    items: string[];
}

export interface HobbyListItem {
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
    description?: string;
    lastModified?: string;
    link: string;
}

export interface HobbyItem {
    title: string;
    image: string;
    year?: string;
    rating?: number;
    description?: string;
    items?: string[];
}

export type ResumeJsonValue = string[] | TimelineItem[];

export interface ResumeJson {
    [key: string]: ResumeJsonValue,
}