import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

export default function Products() {
  
  useEffect(() => {
    fetchProducts();
  }, [])
  
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch('../mockup/products.json');
    const productsJSON = await data.json();
    console.log(productsJSON.items);
    setProducts(productsJSON.items);
  }
  return (
    <div className='products'>
      {products.map(item => (
      <div className='products-card'>
      <div className='products-photo'>photo</div>
      <p key={item.id}>{item.name}</p>
      <p key={item.id}>{item.price}</p>
      <Link to="/product"><button>Details</button></Link>
      </div>
      ))}
    </div>
  )
}
