import { Film, Music, Medal, Plane, Book, Gamepad, Camera } from 'lucide-react';
import { Movies as MoviesComponent } from '../components/Hobbies/Movies';
import { Music as MusicComponent } from '../components/Hobbies/Music';
import { Reading as ReadingComponent } from '../components/Hobbies/Reading';
import { Gaming as GamingComponent } from '../components/Hobbies/Gaming';
import { Photography as PhotographyComponent } from '../components/Hobbies/Photography';
import { Travel as TravelComponent } from '../components/Hobbies/Travel';
import { HobbyListItem } from '../types';
import {Sports as SportsComponent} from "../components/Hobbies/Sports.tsx";

export const hobbies: HobbyListItem[] = [
    {
        title: 'Movies',
        icon: Film,
        description: 'Passionate about cinema, from classic films to modern blockbusters.',
        component: MoviesComponent,
    },
    {
        title: 'Sports',
        icon: Medal,
        description: 'Sports I enjoy playing',
        component: SportsComponent,
    },
    {
        title: 'Travel',
        icon: Plane,
        description: 'Traveling to different countries.',
        component: TravelComponent,
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