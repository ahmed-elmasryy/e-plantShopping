
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import Header from './Header';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'products', 'cart'

  const handleGetStartedClick = () => {
    setCurrentPage('products');
  };

  const handleHomeClick = () => {
    setCurrentPage('landing');
  };

  const handleCartClick = () => {
    setCurrentPage('cart');
  };

  const handleContinueShopping = () => {
        setCurrentPage('products');
    };

  return (
    <div className="app-container">
      <Header 
        onHomeClick={handleHomeClick}
        onCartClick={handleCartClick}
        currentPage={currentPage}
      />
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs/>
            </div>
          </div>
        </div>
      )}
      
      {currentPage === 'products' && (
        <ProductList />
      )}
      
      {currentPage === 'cart' && (
        <CartItem 
          onContinueShopping={handleContinueShopping}
          onHomeClick={handleHomeClick}
        />
      )}
    </div>
  );
}

export default App;



