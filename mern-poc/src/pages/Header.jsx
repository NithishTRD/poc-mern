import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">MERN POC</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
      </ul>   
    </nav>
  );
};

export default Header;
