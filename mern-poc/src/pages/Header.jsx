import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">1STOP LIGHTING</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for Anything" />
          <FontAwesomeIcon icon={faSearch} className="icon" /> {/* Search icon */}
        </div>
        <div className="icons">
          <Link to="/profile" className="icon-container">
            <FontAwesomeIcon icon={faUser} />
            <span>User</span>
          </Link>
          <Link to="#" className="icon-container">
            <FontAwesomeIcon icon={faHeart} />
            <span>Favorites</span>
          </Link>
          <Link to="#" className="icon-container">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart</span>
          </Link>
          <Link to="#" className="icon-container">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>Help</span>
          </Link>
        </div>
      </nav>
      <div className="separator"></div>
      <ul className="brand-links">
        <li><Link to="#">Brands</Link></li>
        <li><Link to="#">Plug & Play</Link></li>
        <li><Link to="#">Ceiling Lights</Link></li>
        <li><Link to="#">Chandeliers</Link></li>
        <li><Link to="#">Wall Lights</Link></li>
        <li><Link to="#">Outdoor</Link></li>
        <li><Link to="#">Ceiling Fans</Link></li>
        <li><Link to="#">Shop By Room</Link></li>
        <li><Link to="#">New</Link></li>
        <li><Link to="#">Learn</Link></li>
        <li><Link to="#">Sale</Link></li>
      </ul>
    </header>
  );
};

export default Header;
