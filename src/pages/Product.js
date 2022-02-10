import React from 'react';
import './Product.css';

export default function Product() {
  return (
    <div>
      <div className='product-card'>
        <div className='product-photo'>photo</div>
        <p>Product name</p>
        <p>Product price</p>
        <p>Availible</p>
        <form>
          <label for="color">Color:</label>
          <select name="color" id="color">
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
          </select>
          <br />
          <label for="size">Size:</label>
          <select name="size" id="size">
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
          </select>
        </form>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
