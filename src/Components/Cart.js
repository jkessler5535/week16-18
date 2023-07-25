import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from './CartContext';




export const Cart = () => {
  const {cart,setCart} =useContext(CartContext);
  const history = useHistory();
  
  

  /*Retrieve the cart data passed from Home
  component*/

  const {cart: initialCart} = history.location.state || {};

  useState(() => {
    if (initialCart) {
      setCart(initialCart);
    }
  }, [initialCart]);

const calculateTotal = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.costPerNight *
    item.nights;
  });

  return total;
};


/*Pass cart data and the calculated total to the checkout component*/

const handleCheckoutButtonClick =() => {
  history.push('/checkout',{cart,total:calculateTotal() });
};

if(cart.length === 0) {
  return(
    <div>
      <h1>Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  );
}

return (
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Cot per night</th>
          <th>Nights</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) =>(
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>${item.price}</td>

            <td>{item.nights}</td>
            <td>${item.costPerNight * item.nights}</td>
            </tr>
        ))}
      </tbody>
      <tfoot>
     
      <tr>
        <td colSpan="3">Number of nights</td>
        <td>x{cart.length}</td>
      </tr>
      <tr>
        <td colSpan="3">Cleaning Fee</td>
        <td>$150.00</td>
      </tr>
      <tr>
      <td colSPan="3">Tax Fee</td>
      <td>10%</td>
      </tr>
      <tr>
        <td colSpan="3">Grand Total</td><td>${calculateTotal()}</td>
      </tr>
      </tfoot>
    </table>
    <button onClick={handleClearClick}>Clear</button>
    <button onClick={handleCheckoutButtonClick}>Continue to Checkout</button>
  </div>
   );
 };

 
 export default Cart;
  

