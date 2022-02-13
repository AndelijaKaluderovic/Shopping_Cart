import React from 'react';
import './CartTemplate.css';

export default function CartTemplate({ cartItems, handleAddToCart, handleDecreaseQty, handleRemoveItem }) {
    return (
        <div className='cart'>
            {cartItems.map(item => (
                <div key={item.id} className='cart-info'>
                    <div className='cart-photo'>photo</div>
                    <p className='cart-name'>{item.name}</p>
                    <div className='cart-buttons'>
                        <button onClick={() => handleDecreaseQty(item)} className='btn-decrease'>-</button>
                        <p className='cart-qty'>{item.qty}</p>
                        <button onClick={() => handleAddToCart(item)} className='btn-increse'>+</button>
                    </div>
                    <p className='cart-price'>{item.price} kr</p>
                    <button onClick={() => handleRemoveItem(item)} className='btn-remove'>x</button>
                </div>
            ))}

        </div>
    )
}

