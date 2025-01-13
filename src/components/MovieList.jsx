import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
