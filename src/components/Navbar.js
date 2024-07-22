import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import './Navbar.css';

const Navbar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Back</Link>
      <div className="navbar-links">
        <Link to="/favorites" className="navbar-favorites">
          Favorites <span className="favorites-count">{favorites.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
