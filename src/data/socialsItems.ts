import { Linkedin, Github, Mail } from 'lucide-react';
import { SocialsItem} from '../types';

export const socialsItems: SocialsItem[] = [
  { label: 'LinkedIn', action: "https://linkedin.com/in/youssefsamaan", icon: Linkedin },
  { label: 'Github', action: "https://github.com/YoussefSamaan", icon: Github },
  { label: 'Email', action: "mailto:ysamaan2001@gmail.com", icon: Mail },
];