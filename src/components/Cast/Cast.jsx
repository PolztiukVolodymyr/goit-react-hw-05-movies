import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import { useOutletContext } from 'react-router-dom';
import { getMovieCast } from "../../servises/Api";

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
      <ul >
         {cast &&
            cast.map(({ id, profile_path, name}) => (
               <li key={id}>
                  <img
                    
                     src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                     alt={name}
                     width="100"
                  />
                  <p>{name}</p>
               </li>
            ))}
      </ul>
   );

}