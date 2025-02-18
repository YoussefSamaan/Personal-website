import { FileText, Clock, Briefcase, Heart } from 'lucide-react';
import { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Resume', icon: FileText, path: '/resume' },
  { label: 'Timeline', icon: Clock, path: '/timeline' },
  { label: 'Experience', icon: Briefcase, path: '/experience' },
  { label: 'Hobbies', icon: Heart, path: '/hobbies'  },
];