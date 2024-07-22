import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from './MovieCard';
import './Favorites.css';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
