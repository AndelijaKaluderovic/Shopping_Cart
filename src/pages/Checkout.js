import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';


export default function Checkout() {
  return (
    <div className="checkout">
      <p>Checkout</p>
      <Link to="/">&#8592; Back to home</Link> 
      </div>
  )
}
