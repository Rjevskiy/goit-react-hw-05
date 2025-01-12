import axios from 'axios';

// Токен авторизации
const API_TOKEN = 'af069d5a4aa6dab18750675f951f88b6';
const API_URL = 'https://api.themoviedb.org/3/';

// Получения фильмов по запросу
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search/movie`, {
      params: {
        query: query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return response.data.results; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// Трендовые фильмы
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}trending/movie/day`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return response.data.results; 
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};
	
// Подробная информация о фильме
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })

    return response.data; 
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

