


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const MovieList = ({ movies }) => {
  const location = useLocation(); 

  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}> 
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
