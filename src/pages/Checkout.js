import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import CartTemplate from '../components/CartTemplate';


export default function Checkout({ cartItems, handleAddToCart, handleDecreseQty, handleRemoveItem }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  return (
    <div className='checkout'>
      <CartTemplate cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecreseQty={handleDecreseQty} handleRemoveItem={handleRemoveItem} />
      {cartItems.length !== 0
        ? <p>Total: {totalPrice} kr</p>
        : <p>Cart is empty</p>
      }
      <footer className='cart-footer'>
        <Link className='cart-link' to='/'><button className='btn-back'>Keep shopping</button></Link>
        <button className='btn-pay'>Pay</button>
      </footer>
    </div>
  )
}
