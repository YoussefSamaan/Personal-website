import MovieCarousel from "./Movies/components/MovieCarousel.tsx";
import Intro from "./Movies/components/Intro.tsx";

export function Movies() {
    return (
        <div className="flex">
            <Intro/>
            <MovieCarousel/>
        </div>
    );
}