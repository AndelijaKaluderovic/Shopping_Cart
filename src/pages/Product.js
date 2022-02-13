import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export default function Product({ product, handleAddToCart }) {

  const [feedback, setFeedback] = useState(false);
  const handleFeedback = () => {
    setFeedback(true);
    setTimeout(() => {
      setFeedback(false);
    }, 2500);
  }

  return (
    <section className='product-card'>
      <div className='product-photo'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-info'>
        <p>{product.name}</p>
        <p>{product.price} kr</p>
        {product.available ? <p className='product-available'>In stock</p> : <p className='product-unavailable'>Out of stock</p>}
        {product.available && <div>
          <label htmlFor="color" className='products-variant'>Color:</label>
          <select name="color" id="color">
            {product.options.map((option, index) => (
              <option key={index}>{option.color}</option>
            ))}
          </select>
        </div>}
        {product.available && <button onClick={() => {
          handleFeedback();
          handleAddToCart(product);
        }}
          className="product-button">Add to cart</button>}
        <Link className='product-link' to='/'><button className='shopping-button'>Continue shopping</button></Link>
        {feedback && <p className='product-feedback'>Product successfully added to cart</p>}
      </div>
    </section>
  )
}
