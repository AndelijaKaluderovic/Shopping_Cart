import React from 'react';
import './Products.css';

export default function Products() {
  return (
    <div className='products'>
      <div className='products-card'>
      <div className='products-photo'>photo</div>
      <p>Product name</p>
      <p>Product price</p>
      <button>Details</button>
      </div>
      <div className='products-card'>
      <div className='products-photo'>photo</div>
      <p>Product name</p>
      <p>Product price</p>
      <button>Details</button>
      </div>
    </div>
  )
}
