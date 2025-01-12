import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [showCast, setShowCast] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=af069d5a4aa6dab18750675f951f88b6&language=en-US`;
      const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=af069d5a4aa6dab18750675f951f88b6&language=en-US&page=1`;
      const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=af069d5a4aa6dab18750675f951f88b6&language=en-US`;

      try {
        const [movieResponse, reviewsResponse, castResponse] = await Promise.all([
          axios.get(movieUrl),
          axios.get(reviewsUrl),
          axios.get(castUrl),
        ]);

        setMovie(movieResponse.data);
        setReviews(reviewsResponse.data.results);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const actorImageUrl = (path) => `https://image.tmdb.org/t/p/w200${path}`;

  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)} className="go-back-button">
        Go Back
      </button>
      <div className="details-container">
        <img src={imageUrl} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'N/A'}</p>
        </div>
      </div>

      <div className="button-container">
        <button onClick={() => setShowReviews(!showReviews)}>
          {showReviews ? 'Hide Reviews' : ' Reviews'}
        </button>
        <button onClick={() => setShowCast(!showCast)}>
          {showCast ? 'Hide Cast' : ' Cast'}
        </button>
      </div>

      {showReviews && (
        <div className="reviews-section">
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      )}

      {showCast && (
        <div className="cast-section">
          <h2>Cast</h2>
          {cast.length > 0 ? (
            <div className="cast-list">
              {cast.slice(0, 5).map((actor) => (
                <div key={actor.id} className="actor-card">
                  {actor.profile_path && (
                    <img 
                      src={actorImageUrl(actor.profile_path)} 
                      alt={actor.name} 
                      className="actor-image" 
                    />
                  )}
                  <h3>{actor.name}</h3>
                  <p>{actor.character}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No cast information available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;


