import { useState, useEffect } from 'react';
import { getPopularMovie } from "../servises/Api";
import MoviesList from '../components/MoviesList/MoviesList';


export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
      (async () => {
        getPopularMovie().then(films => {
            setMovies(films)
          });
      })();
    }, []);

  return (
    <main>
      <h2>Trending this Week</h2>
      {movies && <MoviesList films={movies} />}
    </main>
  );
};