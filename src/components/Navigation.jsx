import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Navigation = () => {
  return (
    <header className="navigation">
      <nav>
        <button className="nav-button">
          <Link to="/">Home</Link>
        </button>
        <button className="nav-button">
          <Link to="/movies">Movies</Link>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
