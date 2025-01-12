import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('day'); 

  // Получение  фильмов 
  const fetchTrendingMovies = async (timeframe) => {
    const url = `https://api.themoviedb.org/3/trending/movie/${timeframe}?api_key=af069d5a4aa6dab18750675f951f88b6&language=en-US&page=1`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  // Эффект при изменении категории
  useEffect(() => {
    fetchTrendingMovies(category);
  }, [category]);

  return (
    <div>
      <h1>Trending Movies</h1>
      <div>
        <button onClick={() => setCategory('day')}>Trending Today</button>
        <button onClick={() => setCategory('week')}>Trending This Week</button>
      </div>
      <ul className='HomePage'>
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

export default HomePage;

