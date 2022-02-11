import React, { useEffect, useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product({match}) {
   
  // useEffect(() => {
  //   fetchProduct();
  //   console.log(match);
  // }, [])
  
  // const [product, setProduct] = useState([]);

  // const fetchProduct = async () => {
  //   const data = await fetch('../mockup/products.json');
  //   const productJSON = await data.json();
  //   console.log('coming from products', productJSON.items);
  //   setProduct(productJSON.items);
  // }
  return (
    <div className='product'>
      <div className='product-card'>
        <div className='product-photo'>photo</div>
        <div className='product-info'>
        <p>Product name</p>
        <p>Product price</p>
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
        </div>
        <button type="button" className="product-button">Add to cart</button>
      </div>
     <Link to="/">&#8592; Back to home</Link> 
    </div>
  )
}
