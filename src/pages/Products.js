import React from 'react';
import './Products.css';
import ProductTemplate from '../components/ProductTemplate';

export default function Products({ products, handeProductDetails }) {
  return (
    <div className='products'>
      {products.map(item => (
          <ProductTemplate key={item.id} item={item} handeProductDetails={handeProductDetails} />
      ))}
    </div>
  )
}
