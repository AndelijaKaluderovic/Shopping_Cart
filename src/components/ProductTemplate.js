import React from 'react';
import './ProductTemplate.css';
import { Link } from 'react-router-dom';

export default function ProductTemplate({ item, handleProductDetails }) {
    return (
        <section className='products-card'>
            <div className='products-photo'>photo</div>
            <div className='products-info'>
                <p className='products-brand'>{item.brand}</p>
                <p className='products-name'>{item.name}</p>
                <p className='products-price'>{item.price}kr</p>
            </div>
            <Link className='products-link' to={`/product/${item.id}`}><button onClick={() => handleProductDetails(item.id)} className="products-button">Details</button></Link>
        </section>
    )
}
