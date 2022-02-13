import React from 'react';
import { Link } from 'react-router-dom';
import './ProductTemplate.css';

export default function ProductTemplate({ item, handleProductDetails }) {
    return (
        <section className='productTemplate-card'>
            <div className='productTemplate-photo'>
                <img src={item.image} alt={item.name} />
            </div>
            <div className='productTemplate-info'>
                <p className='productTemplate-brand'>{item.brand}</p>
                <p className='productTemplate-name'>{item.name}</p>
                <p className='productTemplate-price'>{item.price}kr</p>
            </div>
            <Link className='productTemplate-link' to={`/product/${item.id}`}><button onClick={() => handleProductDetails(item.id)} className="productTemplate-button">Details</button></Link>
        </section>
    )
}
