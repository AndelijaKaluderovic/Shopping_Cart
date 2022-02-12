import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product({ product, handleAddToCart }) {
  const handleFeedback = () => {
    return alert('Product is added');
  }

  return (
    <div className='product'>
      <div className='product-card'>
        <div className='product-photo'>photo</div>
        <div className='product-info'>
          <p>{product.name}</p>
          <p>{product.price} kr</p>
          {product.available ? <p className='product-available'>In stock</p> : <p className='product-unavailable'>Out of stock</p>}
          {product.available && <form>
            <label htmlFor="color">Color:</label>
            <select name="color" id="color">
              {product.options.map((option, index) => (
                <option key={index}>{option.color}</option>
              ))}
            </select>
            <label htmlFor="quantity">Quantity:</label>
            <select name="quantity" id="quantity">
              {product.options.map((option, index) => (
                <option key={index}>{option.quantity}</option>
              ))}
            </select>
          </form>}
          {product.available && <button onClick={() => {
            handleFeedback();
            handleAddToCart(product);
          }}
            className="product-button">Add to cart</button>}
          <Link className='product-link' to='/'><button className='shopping-button'>Continue shopping</button></Link>
        </div>
      </div>
    </div>
  )
}
