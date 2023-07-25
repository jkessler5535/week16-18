import React, {createContext,useState} from 'react';
import {CartContext} from './CartContext.js';




export const CartProvider = ({children}) =>{
  const [cart,setCart] = useState([]);

const addToCart = (item) => {
  setCart([...cart,item]);
};
const removeFromCart = (item) =>{
  setCart(cart.filter((cartItem) =>
  cartItem !== item));
};
}

const Checkout = ({cart,total}) => {
  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvv: '',

  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) =>({...prevFormData, [name]:value}));
  };

  const handleFormSubmit =(e) => {
    e.preventDefault();
    alert("Your order has been submitted");
  };

  return(
    <div>
      <CartContext.Provider
      value={{cart,addToCart,removeFromCart}}>
        {children}
      </CartContext.Provider>
      
      <h2>Checkout</h2>
      <h3>Billing Info</h3>
      <form
      onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" 
        value={formData.firstName}

        onChange={handleInputChange}
        required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName"
        value={formData.lastName}

        onChange={handleInputChange}
        required
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"
        value={formData.email}

        onChange={handleInputChange}
        required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address"
        value={formData.address}

       onChange={handleInputChange}
       required />

       <label htmlFor="city">City:</label>
       <input type="text" id="city" name="city"
       value={formData.city}

       onChange={handleInputChange}
       required/>

       <label htmlFor="state">State:</label>
       <input type="text" id="state" name="state"
       value={formData.state}

       onChange={handleInputChange}
       required />
       <label htmlFor="zipcode">Zip Code:</label>
       <input type="text" id="zip" name="zip"
       value={formData.zip}

       onChange={handleInputChange}
       required />

       <h3>Payment Info</h3>
       <label htmlFor="cardNumber">Card Number:</label>
       <input type="number" id="cardNumber" 
       name="cardNumber"

       value={formData.cardNumber}

       onChange={handleInputChange}
       required />
       <label htmlFor="expDate">Expiration Date:</label>
       <input type="text" id="expDate" name="expDate"
       value={formData.expDate}
       required/>

       <label htmlFor="cvv">CVV:</label>
       <input type="text" id="cvv" name="cvv"
       value={formData.cvv}

       onChange={handleInputChange}
       required/>

       <button type="submit">Complete</button>
       </form>

       <h2>Order Summary</h2>
       <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Cost per night</th>
            <th>Nights</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item._id}>
              <td>{item.location}</td>
              <td>${item.costPerNight}</td> 
              <td>{item.nights}</td> 
              <td>${item.costPerNight*item.nights}</td>
            </tr>
          ))}
        </tbody>
       <tfoot>
      <tr>
        <td colSpan='4'>Number of nights:{cart.length}</td>  
      </tr>
      <tr>
        <td colSpan="4">Cleaning Fee: $150.00</td>
      </tr>
      <tr>
        <td colSpan="4">Tax Fee: 10%</td>
      </tr>
      <tr>
        <td colSpan="3">Grand Total:</td>
        <td>${total}</td>
      </tr>
       </tfoot>
       </table>
    </div>
  );
 };

 export default Checkout;