import { Link, useLocation } from 'react-router-dom';


export default function MoviesList ({ films }) {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <p>{film.original_title}</p>
              <img
                height="150"
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};