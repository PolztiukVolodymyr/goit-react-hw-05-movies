import { useState, useEffect } from "react";
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { getMovieDetails } from "../servises/Api";
import css from "./MovieDetailsPage.module.css";

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
                <div className={css.DetailsWrap}>
                    
                    <div className={css.InnerWrap}>
                        <div className={css.ImageWrap}>
                            <img
                                className={css.ImageDetails}
                                width="300"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.original_title}
                            />
                        </div>
                        <div className={css.InfoWrap}>
                            <h2 className={css.DetailsTitle}>{movie.title || movie.name}</h2>
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
                        
             
                    </div>
                    <hr />
                    
                    <nav className={css.InfoWrap}>
                        <h3 className={css.LincTitle}>Additional Information</h3>
                        <div className={css.LinkWrap}>
                            <NavLink to="cast"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${css.active}`
                                        : `${css.inactive}`} > Cast
                            </NavLink>
                            <NavLink to="reviews"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${css.active}`
                                        : `${css.inactive}`} > Reviews
                            </NavLink>

                        </div>
                    </nav>
                    
                    <hr />

                    <Outlet context={movieId} />
                </div>
                
            )}
        </>
    );
};

            <NavLink to="reviews"
                className={({ isActive }) =>
                    isActive
                        ? `${css.active}`
                        : `${css.inactive}`} > Reviews
            </NavLink>          

