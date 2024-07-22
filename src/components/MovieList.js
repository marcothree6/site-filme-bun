import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; 

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p className="no-movies-message">No movies found. Please try a different search.</p>
      )}
    </div>
  );
};

export default MovieList;
