import {HobbyCards} from "./helpers/HobbyCards.tsx";
import { hobbies } from "../../data/hobbiesData.ts";
import { SportItems } from "../../data/Hobbies/SportItems.ts";

// const sportsHobby = hobbies.find(hobby => hobby.title === 'Sports');

export function Sports() {
    return (
        <HobbyCards HobbyInfo={hobbies[1]} HobbyItems={SportItems} />
    );
}