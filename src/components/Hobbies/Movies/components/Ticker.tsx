import { MovieCard } from "./MovieCard.tsx";
import { MovieInfo } from "../../../../types.ts";


function Ticker(props: { movieList: any; animationDirection: any; animationTime: any; }) {

  const movieList: MovieInfo[] = [...props.movieList, ...props.movieList]
  const numberOfMovies = movieList.length

  return (
      <div className="w-[22vh] h-[92vh] overflow-hidden relative">

        {movieList.map((movieObject: MovieInfo, index: number) =>
          <MovieCard
            key={index}
            animationDirection={props.animationDirection}
            animationTime={props.animationTime}
            name = {movieObject.name}
            image = {movieObject.imageLink}
            finished = {movieObject.finished}
            numberOfMovies = {numberOfMovies}
          />
        )}

        <div className='absolute top-0 h-[40px] w-full bg-gradient-to-b from-[white] to-transparent' />

        <div className="absolute bottom-0 h-[40px] w-full bg-gradient-to-t from-[white] to-transparent"/>

      </div>
  );
}

export default Ticker;