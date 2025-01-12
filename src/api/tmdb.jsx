
import axios from 'axios';

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const options = {
  headers: {
    Authorization: 'Bearer af069d5a4aa6dab18750675f951f88b6',  
  }
};

axios.get(url, options)
  .then(response => console.log(response.data))  // Выводим данные фильма в консоль
  .catch(err => console.error('Error fetching movies:', err));  // Обрабатываем ошибки
