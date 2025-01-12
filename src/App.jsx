import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Loader from './components/Loader';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Lazy loading for MovieCast and MovieReviews
const MovieCast = React.lazy(() => import('./components/MovieCast'));
const MovieReviews = React.lazy(() => import('./components/MovieReviews'));

const App = () => {
  return (
    <Router>
      <header className="header">
        <nav>
          <button className="nav-button">
            <Link to="/">Home</Link>
          </button>
          <button className="nav-button">
            <Link to="/movies">Movies</Link>
          </button>
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;










