import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=af069d5a4aa6dab18750675f951f88b6`;

      try {
        const response = await axios.get(url);
        
        const limitedCast = response.data.cast.slice(0, 9); 
        setCast(limitedCast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className="cast-section">
      
      {cast.length ? (
        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="actor-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="actor-image"
              />
              <div className="actor-info">
                <h4>{actor.name}</h4>
                <p>{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

export default MovieCast;

