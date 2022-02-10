import React, { useEffect } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products() {
  
  useEffect(() => {
    fetchProducts();
  }, [])
  
  const fetchProducts = async () => {
    const products = await fetch('../mockup/products.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    });
    const productJSON = await products.json();
    console.log(productJSON);
  }
  return (
    <div className='products'>
      <div className='products-card'>
      <div className='products-photo'>photo</div>
      <p>Product name</p>
      <p>Product price</p>
      <Link to="/product"><button>Details</button></Link>
      </div>
    </div>
  )
}
