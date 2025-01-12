import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Loader from './pages/Loader';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const MoviesPage = React.lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage'));

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
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;







