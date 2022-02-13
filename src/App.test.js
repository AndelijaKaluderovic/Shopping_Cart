import App from './App';
import React, { useState, useEffect } from 'react';
import Products from './pages/Products';
import ProductTemplates from './components/ProductTemplate';
import CartTemplate from './components/CartTemplate';
import Nav from './components/Nav';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

 const products = [
  {
      "id": 1,
      "name": "Philips hue bulb",
      "brand": "Philips",
      "price": "500",
      "available": true,
      "weight": 0.2,
      "options": [
          {
              "color": "white",
              "power": [
                  6.5,
                  9.5
              ],
              "quantity": 3
          },
          {
              "color": "red",
              "power": [
                  6.5,
                  9.5
              ],
              "quantity": 7
          }
      ]
  },
  {
      "id": 2,
      "name": "Trådfria Lampor",
      "brand": "IKEA",
      "price": "300",
      "available": true,
      "weight": 0.2,
      "options": [
          {
              "color": "white",
              "power": [
                  6.5,
                  9.5
              ],
              "quantity": 3
          }
      ]
  }
]
describe('App page', () => {
  test('checks if App page is rendering Products page', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Products)).toHaveLength(1);
  });

  test('checks if Products page is rendering exact amound of ProductTemplates', () => {
    const wrapper = shallow(<Products products={products}/>);
    expect(wrapper.find(ProductTemplates)).toHaveLength(2);
  });

  test('checks if decrease button erases product if qty is less then 1', () => {
    const handleDecreaseMock = jest.fn();
    const wrapper = shallow(<CartTemplate handleDecreaseQty={handleDecreaseMock} cartItems={[{
        "id": 1,
        "name": "Philips hue bulb",
        "brand": "Philips",
        "price": "500",
        "available": true,
        "weight": 0.2
    }]} />);
    wrapper.find(".btn-decrease").simulate("click");
    const wrapper1 = shallow(<App />);
    expect(wrapper1.find(Nav).props().cartCounter).toBe(0);
  });
});

