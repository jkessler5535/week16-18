import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Mint from '../images/Mint.jpg';
import RedVelvet from '../images/RedVelvet.jpg';
import Strawberry from '../images/Strawberry.jpg';
import cake from '../images/reviewcake.jpg';
import Review from "./Reviews.js";
import Rating from './Rating';

 
import MyButton from './Mint-btn.js';
import VelvetBtn from "./Velvet-btn.js";
import StrawberryBtn from "./Strawberry-btn.js";




function About() {
  return (
    <Container>
<div className="mt-5">
      <h1 className="text-secondary mb-5">About</h1>
  <div className="d-flex flex-wrap  align-items-center">
    <Row>
    <Col xs={12} sm={6}>
      <img src={cake} className="img-fluid mb-3 rounded"  alt="cake"/>
    </Col>
  
    <Col xs={12} sm={6}>
      <p>
        Founded in 1986 by Joe and Samantha Harris, Heavenly Cupcakes on 7th Street in San Diego quickly became the number one cupcake bakery in town. With a high volume of customers and five-star ratings, our handcrafted, delicious cupcakes are the perfect treat for any occasion. Experience the joy of our moist and flavorful creations today!
      </p>
    </Col>
    </Row>
  </div>

    <div className="mb-5 mt-5">
      <Rating value={3} />
      <Review />
    </div>
  </div>
  <hr></hr>

  <div>
    <h2 className=" bg-light p-3 text-center text-secondary">Some of our Award winning cupcakes!</h2>
  </div>
  <div className="mt-3 mb-5 d-flex flex-wrap  align-items-center">

    <Row>
      <Col xs={12} sm={6}>
        <h2 className="pb-4 text-secondary">Mint Chocolate</h2>
      <p>
        A mint chocolate cupcake is a delicious treat that combines the refreshing taste of mint with the rich and indulgent flavor of chocolate. It typically features a moist and fluffy chocolate cupcake infused with a hint of mint, topped with creamy mint frosting and garnished with chocolate shavings. It's no wonder this cupcake made one of the top vest sellers!
       <MyButton/>
      </p>
      </Col>
      <Col xs={12} sm={6}>
        <img src={Mint} alt="mint cake" className="img-fluid Mint ml-5 pl-5 rounded"/>
      </Col>
    </Row>
  </div>
  <hr></hr>

  <div className="mt-5 mb-5">
    <Row>
      <Col xs={12} sm={6}>
      <img src={RedVelvet} alt="red velvet"
      className="img-fluid RedVelvet rounded"/>
      </Col>

      <Col xs={12} sm={6}>
        <h2 className="pb-4 text-secondary">Red Velvet</h2>
       <p>
        This red velvet cupcake is moist and velvety with a hint of cocoa, boasting its vibrant red color. Topped with rich cream cheese frosting, it offers a perfect balance of tanginess and sweetness. Every bite is a heavenly combination of flavors, making it an indulgent treat for any ocassion.
        <VelvetBtn/>
       </p>
      </Col>
    </Row>
  </div>
  <hr></hr>

  <div className="mt-5 mb-5 pb-5 text-secondary">
    <Row>
      <Col xs={12} sm={6}>
        <h2 className="mt-1 mb-4">Strawberry</h2>
        <p>
          A tasty strawberry cupcake bursting with the natural sweetness of fresh strawberries. Its fluffy, moist testure melts in your mouth, complementing the delicate strawberry flavor. Topped with luscious strawberry frosting, it's a delightful treat that satifies your craving and brings a smile to your face.
          <StrawberryBtn/>
        </p>
      </Col>
      <Col xs={12} sm={6}>
        <img src={Strawberry} alt="strawberry cake" className="img-fluid Strawberry ml-5 pl-5 rounded"/>
      </Col>
    </Row>
  </div>
  <hr></hr>
    </Container>
  );
}

export default About;

