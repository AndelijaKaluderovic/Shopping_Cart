import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch('/data/products.json');
    const productsJSON = await data.json();
    setProducts(productsJSON.items);
  };
  const handeProductDetails = (id) => {
    setProduct(products.find(x => x.id === id));
  }
  const handleAddToCart = (product) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  const handleDecreseQty = (product) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : x));
    }
  }
  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((x => x.id !== product.id)));
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <Router>
      <div className="App">
        <Nav cartCounter={cartItems.length} />
        <Switch>
          <Route exact path="/">
            <Products handeProductDetails={handeProductDetails} products={products} />
          </Route>
          <Route path="/product/:id" >
            <Product handleAddToCart={handleAddToCart} product={product} />
          </Route>
          <Route path="/checkout" >
            <Checkout cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecreseQty={handleDecreseQty} handleRemoveItem={handleRemoveItem} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
