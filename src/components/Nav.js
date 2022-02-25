import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav({ cartItems }) {
  const cartCounter = cartItems.map(item => item.qty).reduce((acc, item) => item + acc, 0);
  return (
    <section className="nav">
      <Link to="/" className='nav-link'>
        <div className='nav-left'>
          <h3 className='nav-logo'>
            Shopping Cart
          </h3>
        </div>
      </Link>
      <div className='nav-right'>
        <Link to="/checkout" className='nav-link'>
          <span className='nav-icon'>
            <i className='fas fa-cart-shopping'></i>
          </span>
          <div className='cart-item'>
            {cartCounter}
          </div>
        </Link>
      </div>
    </section>
  )
}
