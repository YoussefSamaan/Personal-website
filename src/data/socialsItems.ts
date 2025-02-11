import { Linkedin, Github, Mail } from 'lucide-react';
import { SocialsItem} from '../types';

export const socialsItems: SocialsItem[] = [
  { id: 'linkedIn', label: 'LinkedIn', action: "https://linkedin.com/in/youssefsamaan", icon: Linkedin },
  { id: 'github', label: 'Github', action: "https://github.com/YoussefSamaan", icon: Github },
  { id: 'email', label: 'Email', action: "mailto:ysamaan2001@gmail.com", icon: Mail },
];