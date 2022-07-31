import { Route, Routes } from 'react-router-dom';

import Home from "../../pages/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import Movies from "../../pages/MoviesPage";

import Cast from "../Cast/Cast";
import Navigation from "../Navigation/Navigation";
import Reviews from "../Reviews/Reviews";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <ToastContainer type="error" theme="colored" autoClose={3000}/>
    </div>
  )
};

