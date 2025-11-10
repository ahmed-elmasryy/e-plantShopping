import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = ({ onHomeClick, onCartClick, currentPage }) => {
  const cart = useSelector(state => state.cart.items);

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={onHomeClick}>
          <h2>Paradise Nursery</h2>
        </div>
        <nav className="nav-links">
          <button 
            className={`nav-button ${currentPage === 'landing' ? 'active' : ''}`}
            onClick={onHomeClick}
          >
            Home
          </button>
          <button 
            className={`nav-button ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => window.location.href = '#products'}
          >
            Plants
          </button>
          <button 
            className="cart-button"
            onClick={onCartClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="cart-icon"
            >
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            {getTotalCartItems() > 0 && (
              <span className="cart-count">{getTotalCartItems()}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;