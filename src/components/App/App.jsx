
import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../../pages/HomePage.jsx'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage.jsx'));
const Movies = lazy(() => import('../../pages/MoviesPage'));

const Cast = lazy(() => import('../Cast/Cast'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

// import Home from "../../pages/HomePage";
// import MovieDetailsPage from "../../pages/MovieDetailsPage";
// import Movies from "../../pages/MoviesPage";

// import Cast from "../../components/Cast/Cast";
// import Navigation from "../../components/Navigation/Navigation";
// import Reviews from "../../components/Reviews/Reviews";




export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer type="error" theme="colored" autoClose={3000} />
    </div>
  )
};

