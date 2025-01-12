import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage'; // Импортируем компонент MovieDetailsPage

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} /> {/* Добавили маршрут для страницы с фильмом */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;








