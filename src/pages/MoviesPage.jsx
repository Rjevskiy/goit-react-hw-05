import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=af069d5a4aa6dab18750675f951f88b6&query=${searchQuery}&language=en-US`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h3>{movie.title}</h3> 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;

