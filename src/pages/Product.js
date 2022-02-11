import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product({ match }) {

  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const id = parseInt(match.params.id);
    const data = await fetch('/mockup/products.json');
    const productJSON = await data.json();
    const oneProduct = productJSON.items.filter(item => item.id === id);
    setProduct(oneProduct);
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <div className='product'>
      {product.map(item => (
        <div key={item.id} className='product-card'>
          <div className='product-photo'>photo</div>
          <div className='product-info'>
            <p>{item.name}</p>
            <p>{item.price} kr</p>
            <p>Available</p>
            <form>
              <label htmlFor="color">Color:</label>
              <select name="color" id="color">
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
              </select>
              <br />
              <label htmlFor="size">Size:</label>
              <select name="size" id="size">
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
              </select>
            </form>
              <button className="product-button">Add to cart</button>
              <Link className='product-link' to='/'><button className='shopping-button'>Keep shopping</button></Link>
          </div>
        </div>
      ))}
    </div>
  )
}
