import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
        <div className='nav-content'>
      <Link to="/checkout">
          <span className='nav-icon'>
            <i className='fas fa-cart-shopping'></i>
          </span>
      </Link>
          <div className='cart-item'>0</div>
        </div>
    </div>
  )
}
