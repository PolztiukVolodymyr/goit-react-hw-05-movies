import { useState, useEffect } from 'react';
import { getPopularMovie } from "../servises/Api";
import MoviesList from '../components/MoviesList/MoviesList';
import css from "./HomePage.module.css";


export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
      (() => {
        getPopularMovie().then(films => {
            setMovies(films)
          });
      })();
    }, []);

  return (
    <main>
      <h2 className={css.TitleHome}>Trending this Week</h2>
      {movies && <MoviesList films={movies} />}
    </main>
  );
};