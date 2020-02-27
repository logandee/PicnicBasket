import React, { useState } from 'react';
import './App.css';
import OrderPage from './components/OrderPage';
import HomePage from './components/HomePage';
import SummaryPage from './components/SummaryPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
    <div className="App container">
      <header className="App-header">

      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/order" render={(props)=> <OrderPage {...props} setProducts={(products) => {setProducts(products)}}   />} />
        <Route path="/summary" render={(props) => <SummaryPage {...props} products={products} />} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
