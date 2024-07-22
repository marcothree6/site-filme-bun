import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css';

const App = () => {
  return (
    <FavoritesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  );
};

export default App;
