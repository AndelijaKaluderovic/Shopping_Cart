import React from 'react';
import ProductTemplate from '../components/ProductTemplate';
import './Products.css';

export default function Products({ products, handleProductDetails }) {
  return (
    <div className='products'>
      {products.map(item => (
        <ProductTemplate key={item.id} item={item} handleProductDetails={handleProductDetails} />
      ))}
    </div>
  )
}
