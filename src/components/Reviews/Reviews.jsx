import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getMovieReviews } from "../../servises/Api";

export default function Reviews() {
    const [review, setReview] = useState();
    const { movieId } = useParams();
    
    useEffect(() => {
        getMovieReviews(movieId).then(data => {
            setReview(data.results)
        })
    }, [movieId]);

    return (
        <ul >
            {review && review.length ? (
                review.map((review) => (
                    <li key={review.id}>
                        <h2 >Author: {review.author}</h2>
                        <p >{review.content}</p>
                    </li>
                ))
            ) : (<li>There are no reviews</li>)
            }
        </ul>
    );

};

