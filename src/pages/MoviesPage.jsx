import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../servises/Api";
import {  toast } from 'react-toastify';
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
    const [value, setValue] = useState('');
    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    (() => {
           
      query && getSearchMovie(query).then(data => {
        console.log(data.results)
           if (data.results.length === 0) {
           toast.warning(`Movie with this name not found!`);
        };
        setFilms(data.results)
      
        });
     })();
  }, [query]);

  const onHandleChange = event => {
    setValue(event.target.value);
  };

  const onHandleSubmit = event => {
    event.preventDefault();
       if (value.trim() === "") {
          toast.error("Enter a search value, please!");
          return;
    };
    setSearchParams({ query: value });
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

   