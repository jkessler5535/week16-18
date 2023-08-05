import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Container,Row,Col} from "react-bootstrap";
import Cupcake from "../Cupcake.json";
import Lottie from "lottie-react";




//Define Home function
function Home () {
// Create a variable called history and assign it a value from the useHistory function
  const history = useHistory();

  // Define a function called handleButtonClicked
  const handleButtonClicked = () =>
  {  
    
    // When the button is clicked, use the history object to navigate to the "/about" page
    history.push("/about.js");
  };
  


  return ( 
<Container>
  <div className="d-flex justify-content-center align-items-center Hero mb-5 pb-4">
  <div className="card intro mt-5">
      <h1 className="card-title text-secondary">Heavenly Cupcakes</h1>
      <Lottie id="lottie" animationData={Cupcake}/>
    <div className="card-body  p-4">
        <p className="intro-para card-text pt-3 pb-4 w-150 ">Indulge in a world of delectable delights at our bakery, where every bite is a blissful experience.<br></br> Savor the perfect balance of flavors, textures, and creativity in every creation.Welcome to a haven<br></br> of sweetness and joy, where dessert dreams come true!</p>
        <Link to="/About">
          <Button className="enter-btn btn btn-success  "onClick={handleButtonClicked}>About</Button>
        </Link>
    </div>
  </div>
  </div>


   
  
  

  </Container>
  
  );
}

export default Home;