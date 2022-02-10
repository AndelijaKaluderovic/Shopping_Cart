import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <div className="nav">
      <div className='nav-content'>
        <span className='nav-icon'>
          <i className='fas fa-cart-shopping'></i>
        </span>
        <div className='cart-item'>0</div>
      </div>
    </div>
  )
}
