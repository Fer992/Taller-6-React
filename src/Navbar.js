import React from 'react';
import { Link } from 'react-router-dom';
import '../src/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        
        <li>
          <Link to="/about">Sobre</Link>
        </li>

        <li>
          <Link to="/counter">Contador</Link>
        </li>

        <li>
          <Link to="/counter-redux">Contador Redux</Link>
        </li>

        </ul>

        
    </nav>
  );
};

export default Navbar;