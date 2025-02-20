import { Film, Music, Medal, Plane, Book, Gamepad, Camera, Pizza, Palette } from "lucide-react";
import { Movies as MoviesComponent } from "../components/Hobbies/Movies";
import { Music as MusicComponent } from "../components/Hobbies/Music";
import { Reading as ReadingComponent } from "../components/Hobbies/Reading";
import { Gaming as GamingComponent } from "../components/Hobbies/Gaming";
import { Photography as PhotographyComponent } from "../components/Hobbies/Photography";
import { Travel as TravelComponent } from "../components/Hobbies/Travel";
import { Food as FoodComponent } from "../components/Hobbies/Food";
import { Art as ArtComponent } from "../components/Hobbies/Art";
import {Sports as SportsComponent} from "../components/Hobbies/Sports.tsx";
import { HobbyListItem } from "../types";

export const hobbies: HobbyListItem[] = [
    {
        title: "Movies",
        icon: Film,
        description: "Passionate about cinema, from classic films to modern blockbusters.",
        component: MoviesComponent,
    },
    {
        title: "Sports",
        icon: Medal,
        description: "Sports I enjoy playing",
        component: SportsComponent,
    },
    {
        title: "Travel",
        icon: Plane,
        description: "Traveling to different countries.",
        component: TravelComponent,
    },
    {
        title: "Music",
        icon: Music,
        description: "Music I enjoy listening to (and sometimes singing).",
        component: MusicComponent,
        details: " ",
    },
    {
        title: "Reading",
        icon: Book,
        description: "Some books I enjoyed reading.",
        component: ReadingComponent,
        details: " ",
    },
    {
        title: "Gaming",
        icon: Gamepad,
        description: "Enjoy strategy games.",
        component: GamingComponent,
        details: " ",
    },
    {
        title: "Photography",
        icon: Camera,
        description: "Amateur photographer.",
        component: PhotographyComponent,
        details: " ",
    },
    {
        title: "Food",
        icon: Pizza,
        description: "Trying different foods.",
        component: FoodComponent,
        details: " ",
    },
    {
        title: "Art",
        icon: Palette,
        description: "Everything from drawing to painting to creating art.",
        component: ArtComponent,
        details: " ",
    },
];