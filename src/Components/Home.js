import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {CartContext} from './CartContext';




const homes =[
  {id:1, image: 'house1.jpg',
  location: 'Seattle, Washington',
   costPerNight: 199},
  {id:2, image: 'house2.jpg',
  location: 'Las Vegas, Nevada',
  costPerNight: 215},
  {id:3, image: 'house3.jpg',
  location: 'Phoenix, Arizona',
  costPerNight: 145},
  {id:4, image: 'house4.jpg',
  location: 'Maui, Hawaii',
  costPerNight: 320},
  {id:5, image: 'house5.jpg',
  location: 'Boston, Massachussetes',
  costPerNight: 125},
  {id:6, image: 'house6.jpg',
  location: 'Spokane, Washington',
  costPerNight: 325},
  {id:7, image: 'house7.jpg',
  location: 'Honolulu, Hawaii',
  costPerNight: 525},
  {id:8, image: 'house8.jpg',
  location: 'Boise, Idaho',
  costPerNight: 185},
  {id:9, image: 'house9.jpg',
 location: 'CordeLain, Idaho',
  costPerNight: 210},
];



const Home = () => {
  const history = useHistory(); 
   const[cart,setCart] = useState([]);

   const addToCart = (home) => {
    setCart((prevCart) =>
    [...prevCart,home]);
   };

   const handleSelectChange = (e, homeId) => {
    const nights = parseInt(e.target.value);
    const updatedCart = cart.map((item) =>{
      if (item.id === homeId){
        return {...item,nights};
      }
      return item;
    });
    setCart(updatedCart);
   };

   const handleCartButtonClick = () =>{
    history.push('cart',{cart});
   };

   return(
    <div>
      <h1>Home Page</h1>
      <div>
        {homes.map((home) => (
        <div key={home.id}>
          <img src={home.image}
          alt={home.location}/>
          <p>{home.location}</p>
          <p>Cost per night:${home.costPerNight}</p>
          <button onClick={() => addToCart(home)}>Add To Cart</button>
          <select onChange={(e) => handleSelectChange(e,home.id)}>
            <option value="1">1 night</option>
            <option value="2">2 night</option>
            <option value="3">3 night</option>
            <option value="4">4 night</option>
          </select>
      </div>
        ))}
      </div>
      <button onClick ={handleCartButtonClick}>Cart</button>
    </div>
  );
};

export default Home;