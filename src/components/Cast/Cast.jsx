import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useOutletContext } from 'react-router-dom';
import { getMovieCast } from "../../servises/Api";
import css from "./Cast.module.css";
import  default_img  from "../../images/default_img.jpg";

export default function Cast() {
    const [cast, setCast] = useState();
    const { movieId } = useParams();
    // const movieId = useOutletContext();

    useEffect(() => {
        getMovieCast(movieId).then(data => {
            setCast(data.cast);
        })
    }, [movieId]);

      return (
      <ul className={css.CastList}>
         {cast &&
            cast.map(({ id, profile_path, name}) => (
               <li key={id}>
                  <img
                     src={profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : default_img}
                     alt={name}
                     width="100"
                  />
                  <p>{name}</p>
               </li>
            ))}
      </ul>
   );

};


Cast.propTypes = {
   cast: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         profile_path: PropTypes.string,
         name: PropTypes.string,
      })
   ),
};