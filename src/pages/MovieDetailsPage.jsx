import { useState, useEffect } from "react";
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetails } from "../servises/Api";

export default function MovieDetailsPage() {

    const [movie, setMovie] = useState();
    const { movieId } = useParams();

    useEffect(() => {
        (() => {
            movieId && getMovieDetails(movieId).then(data => {
                setMovie(data);
            });
             
        })();
    }, [movieId]);

    return (
        <>
            {movie && (
                <div>
                    <div>
                        <img
                            width="300"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.original_title}
                        />
                    </div>
                    <div>
                        <h2 >{movie.title || movie.name}</h2>
                        <p >
                            <b>Release date:</b> {movie.release_date}
                        </p>
                        <p >
                            <b>User Score:</b> {movie.vote_average}
                        </p>
                        <p >
                            <b>Genres:</b>{' '}
                            {movie.genres.map(genr => genr.name).join(' / ')}
                        </p>
                        <p >
                            <b>Runtime:</b> {movie.runtime} min.
                        </p>
                        <p>
                            <b>Overview:</b>
                        </p>
                        <p >{movie.overview}</p>
                        
             
                    </div>
                    <hr />
                    <nav >
                        <NavLink to="cast">Cast</NavLink>
                        <NavLink to="reviews">Reviews</NavLink>
                    </nav>
                    <hr />

                    <Outlet context={movieId} />
                </div>
                
            )}
        </>
    );
};



