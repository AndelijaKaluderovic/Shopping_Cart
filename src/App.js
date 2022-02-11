import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/product" component={Product} />
        <Route path="/product/:id" component={Product} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
