import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import CartTemplate from '../components/CartTemplate';

export function getTotalPrice(data) {
  return data.reduce((a, c) => a + c.price * c.qty, 0);
}
;

export default function Checkout({ cartItems, handleAddToCart, handleDecreseQty, handleRemoveItem }) {
  const totalPrice = getTotalPrice(cartItems);
  return (
    <div className='checkout'>
      <CartTemplate cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecreseQty={handleDecreseQty} handleRemoveItem={handleRemoveItem} />
      {cartItems.length !== 0
        ? <p>Total: {totalPrice} kr</p>
        : <p>Cart is empty</p>
      }
      <footer className='cart-footer'>
        <Link className='cart-link' to='/'><button className='btn-back'>Continue shopping</button></Link>
        <button className='btn-pay'>Proceed to Pay</button>
      </footer>
    </div>
  )
}
