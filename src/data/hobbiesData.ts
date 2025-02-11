import { Film, Music, Book, Gamepad, Camera } from 'lucide-react';
import { Movies as MoviesComponent } from '../components/Hobbies/Movies';
import { Music as MusicComponent } from '../components/Hobbies/Music';
import { Reading as ReadingComponent } from '../components/Hobbies/Reading';
import { Gaming as GamingComponent } from '../components/Hobbies/Gaming';
import { Photography as PhotographyComponent } from '../components/Hobbies/Photography';
import { HobbyItem } from '../types';

export const hobbies: HobbyItem[] = [
    {
        id: 'movies',
        title: 'Movies',
        icon: Film,
        description: 'Passionate about cinema, from classic films to modern blockbusters.',
        component: MoviesComponent,
    },
    // {
    //     id: 'music',
    //     title: 'Music',
    //     icon: Music,
    //     description: 'Playing guitar and piano. Enjoy jazz, classical, and rock music.',
    //     component: MusicComponent,
    //     details: " ",
    // },
    // {
    //     id: 'reading',
    //     title: 'Reading',
    //     icon: Book,
    //     description: 'Love science fiction and technical books.',
    //     component: ReadingComponent,
    //     details: " ",
    // },
    // {
    //     id: 'gaming',
    //     title: 'Gaming',
    //     icon: Gamepad,
    //     description: 'Enjoy strategy games and RPGs.',
    //     component: GamingComponent,
    //     details: " ",
    // },
    // {
    //     id: 'photography',
    //     title: 'Photography',
    //     icon: Camera,
    //     description: 'Amateur photographer focusing on street and landscape photography.',
    //     component: PhotographyComponent,
    //     details: " ",
    // },
];