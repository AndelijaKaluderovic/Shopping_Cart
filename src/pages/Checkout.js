import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';


export default function Checkout() {
  return (
    <div className='checkout'>
      <div className='cart'>
        <div className='cart-info'>
        <div className='cart-photo'>photo</div>
          <p className='cart-name'>Product name</p>
          <div className='cart-buttons'>
            <button className='btn-decrese'>-</button>
            <button className='btn-increse'>+</button>
          </div>
          <p className='cart-price'>price</p>
          <button className='btn-remove'>x</button>
        </div>
      </div>
      <div className='cart'>
        <div className='cart-info'>
        <div className='cart-photo'>photo</div>
          <p className='cart-name'>Product name</p>
          <div className='cart-buttons'>
            <button className='btn-decrese'>-</button>
            <button className='btn-increse'>+</button>
          </div>
          <p className='cart-price'>price</p>
          <button className='btn-remove'>x</button>
        </div>
      </div>
      <p>Total: 2999 kr</p>
      <Link to='/'>&#8592; Back to home</Link>
    </div>
  )
}
