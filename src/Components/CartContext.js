import React, {createContext, useState} from 'react';
import App from 'react';


export const CartContext = createContext();

export const CartProvider =(props) =>{
  const [cart, setCart] = useState([]);


return (
  
  <CartContext.Provider 
  value={{cart, setCart}}>
    {props.children}
    </CartContext.Provider>
  
 );
};