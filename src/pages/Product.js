import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product({ match }) {

  const [product, setProduct] = useState([]);

  // const fetchProduct = async () => {
  //   const data = await fetch('/mockup/products.json');
  //   const productJSON = await data.json();
  //   const oneProduct = await productJSON.items.filter(item => item.id === parseInt(match.params.id));
  //   setProduct(oneProduct[0]);
  // }

  useEffect(() => {
    fetchProduct();
      // eslint-disable-next-line
  }, [])

  const fetchProduct = async () => {
    await fetch('/mockup/products.json').then(response => {
      return response.json()
    }).then(responseData => {
      return responseData.items.filter(item => item.id === parseInt(match.params.id));
    }).then(data => {
      setProduct(data[0]);
    })
      .catch(err => {
        console.log("fetch error" + err);
      });
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
          </form> }
          {product.available && <button className="product-button">Add to cart</button>}
          <Link className='product-link' to='/'><button className='shopping-button'>Keep shopping</button></Link>
        </div>
      </div>
    </div>
  )
}
