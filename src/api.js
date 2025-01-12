// src/api.js
import axios from 'axios';

// Токен для авторизации
const API_TOKEN = 'af069d5a4aa6dab18750675f951f88b6';
const API_URL = 'https://api.themoviedb.org/3/';

// Функция для получения фильмов по поисковому запросу
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

    return response.data.results; // Возвращаем список фильмов
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// Функция для получения трендовых фильмов
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}trending/movie/day`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return response.data.results; // Возвращаем список трендовых фильмов
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};
	
// Функция для получения подробной информации о фильме
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

