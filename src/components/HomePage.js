import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8acf439531db1af8787ef8f03dd7d7cd&query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
    fetchMovies(query);
  };

  return (
    <div className="homepage">
      <div className="header">
      <header>
        <h1>Welcome to MovieApp</h1>
        <p>Find your favorite movies with our search tool.</p>
      </header>
        <Link to="/" className="home-button">Home</Link>
        <SearchBar onSearch={handleSearch} />
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
