import React from 'react';

export default function Navbar(){
  return(
    <nav>
      <Link to ="/">Home</Link>
      <Link to ="/cart">Cart</Link>
      <Link to ="/checkout">Checkout</Link>
    </nav>
  );
}