import Ticker from './Ticker.tsx'
import { movies } from "../../../../data/Hobbies/MovieInfo.ts";
import { MovieInfo } from "../../../../types.ts";


function MovieCarousel() {

  function shuffle(array: MovieInfo[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const ShuffledMovies = shuffle(movies)
  const NumMovies = movies.length
  const moviesInEachCarousel = Math.round(NumMovies/4);
  const timeForMoviesSlow = (moviesInEachCarousel * 10)
  const timeForMoviesFast = (moviesInEachCarousel * 12)

  const movies1 = ShuffledMovies.slice(0, moviesInEachCarousel); 
  const movies2 = ShuffledMovies.slice(moviesInEachCarousel, 2*moviesInEachCarousel); 
  const movies3 = ShuffledMovies.slice(2*moviesInEachCarousel, 3*moviesInEachCarousel); 
  const movies4 = ShuffledMovies.slice(3*moviesInEachCarousel, NumMovies); 



  return (
    <div className="flex flex-1 justify-center space-x-2">
      <Ticker
        movieList={movies1} 
        animationDirection="animate-scroll-down"
        animationTime={timeForMoviesFast}
      />

      <Ticker
        movieList={movies2}
        animationDirection="animate-scroll-up"
        animationTime={timeForMoviesSlow}
      />

      <Ticker
        movieList={movies3}
        animationDirection="animate-scroll-down"
        animationTime={timeForMoviesSlow}
      />

      <Ticker
        movieList={movies4} 
        animationDirection="animate-scroll-up"
        animationTime={timeForMoviesFast}
      />
    </div>
  )
}

export default MovieCarousel