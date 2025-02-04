import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Navigation from './components/Navigation';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage'));

const MovieCast = React.lazy(() => import('./components/MovieCast'));
const MovieReviews = React.lazy(() => import('./components/MovieReviews'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage')); 

const App = () => {
  return (
    <>
      <Navigation />

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            
            <Route path="/" element={<HomePage />} />

           
            <Route path="/movies" element={<MoviesPage />} />

            
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>

           
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;











