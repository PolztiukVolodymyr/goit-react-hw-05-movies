import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../servises/Api";

import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
    const [value, setValue] = useState('');
    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('query');

  useEffect(() => {
    (async () => {
        name && getSearchMovie(name).then(data => setFilms(data.results));
        })();
  }, [name]);

  const onHandleChange = event => {
    setValue(event.target.value);
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    setSearchParams({ name: value });
    setValue('');
  };

  return (
    <div>
      <main>
        <form onSubmit={onHandleSubmit}>
          <input type="text" onChange={onHandleChange} value={value} />
          <button type="submit">Search</button>
        </form>
        {films && <MoviesList films={films} />}
      </main>
    </div>
  );
}

