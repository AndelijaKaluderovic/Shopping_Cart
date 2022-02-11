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
      <div key={item.id} className='products-card'>
      <div className='products-photo'>photo</div>
      <div className='products-info'>
      <p className='products-brand'>{item.brand}</p>
      <p className='products-name'>{item.name}</p>
      <p className='products-price'>{item.price} kr</p>
      </div>
      <Link className='products-link' to={`/product/${item.id}`}><button className="products-button">Details</button></Link>
      </div>
      ))}
    </div>
  )
}
