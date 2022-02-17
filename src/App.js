import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch('/data/products.json');
    const productsJSON = await data.json();
    setProducts(productsJSON.items);
    return productsJSON.items;
  };

  const handleProductDetails = (id) => {
    const oneProduct = products.find(x => x.id === id)
    setProduct(oneProduct);
  }
  const handleAddToCart = (product) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  const handleDecreaseQty = (product) => {
    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : x));
    }
  }
  const handleRemoveItem = (product) => {
    const newCartItems = cartItems.filter((x => x.id !== product.id))
    setCartItems(newCartItems);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems} />
        <Switch>
          <Route exact path="/">
            <Products handleProductDetails={handleProductDetails} products={products} />
          </Route>
          <Route path="/product/:id" >
            <Product handleAddToCart={handleAddToCart} product={product} />
          </Route>
          <Route path="/checkout" >
            <Checkout cartItems={cartItems} handleAddToCart={handleAddToCart} handleDecreaseQty={handleDecreaseQty} handleRemoveItem={handleRemoveItem} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
