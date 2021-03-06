import React from 'react';
import { Link } from 'react-router-dom';
import CartTemplate from '../components/CartTemplate';
import './Checkout.css';

export function getTotalPrice(data) {
  return data.reduce((a, c) => a + c.price * c.qty, 0);
};

export default function Checkout({ cartItems, handleAddToCart, handleDecreaseQty, handleRemoveItem }) {
  const totalPrice = getTotalPrice(cartItems);
  return (
    <div className='checkout'>
      <CartTemplate cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecreaseQty={handleDecreaseQty} handleRemoveItem={handleRemoveItem} />
      {cartItems.length !== 0
        ? <p className='checkout-total'>Total: {totalPrice} kr</p>
        : <p>Cart is empty</p>
      }
      <footer className='cart-footer'>
        <Link className='cart-link' to='/'><button className='btn-back'>Continue shopping</button></Link>
        <button className='btn-pay'>Proceed to Payment</button>
      </footer>
    </div>
  )
}
