import { FileText, Clock, Briefcase, Heart } from 'lucide-react';
import { NavItem } from '../types';

export const navItems: NavItem[] = [
  { id: 'resume', label: 'Resume', icon: FileText, path: '/resume' },
  { id: 'timeline', label: 'Timeline', icon: Clock, path: '/timeline' },
  { id: 'experience', label: 'Experience', icon: Briefcase, path: '/experience' },
  { id: 'hobbies', label: 'Hobbies', icon: Heart, path: '/hobbies'  },
];