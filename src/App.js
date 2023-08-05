import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import "./Index.css"
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from './Components/Home';
import About  from './Components/About.js';
import Contact from './Components/Contact';


const Footer = () => {
  return (
    <footer className=" text-gray text-center">
      <p className="m-0 text-muted">Made with &hearts; by Jamie Kessler</p>
    </footer>
  );
};


const App = () => {
  return(
    <Router>
      <Container fluid>
    <div className="directory">
      <nav className="navbar">
        <h5 className="text-white logo">Enjoy Free Shipping On All Cupcakes!</h5>
        <ul className="d-flex pt-2">
          <li><Link to ="/" style={{textDecoration:"none"}} className="text-white">Home</Link></li>
          <li><Link to ="/about" className="text-white" style={{textDecoration:"none"}}>About</Link></li>
          <li><Link to ="/contact" className="text-white" style={{textDecoration:"none"}} >Contact</Link></li>
        </ul>
        </nav>
      </div>
      

        
      
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        </Container>
        <Footer/>
        </Router>
       
        
      
      
      
   );
  }

  export default App;



  