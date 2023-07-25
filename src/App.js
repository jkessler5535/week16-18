import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import {Container} from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Cart from './Components/Cart.js';
import Home from './Components/Home.js';
import Checkout from './Components/Checkout.js';
import {useState, useEffect} from 'react';
import CartProvider from './Components/CartContext.js';


export default function App() {
  return(
  <Container>
      <Router>
        <CartProvider>
        <Navbar/>
        <Home/>
        <Cart/>
        <Checkout/>
        </CartProvider>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
      </Router>
  </Container>
  );
}

function Navbar(){
  return(
    <nav>
      <Link to ="/">Home</Link>
      <Link to ="/cart">Cart</Link>
      <Link to ="/checkout">Checkout</Link>
    </nav>
  )
}

