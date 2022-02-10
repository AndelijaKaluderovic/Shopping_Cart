import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <Nav />
      <Products />
      <Product />
      <Checkout />
    </div>
  );
}

export default App;
