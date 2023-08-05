import {Button, Modal} from 'react-bootstrap';
import React, {useState} from 'react';

//set up state to track modal is open or closed
const MyButton =()=>{
   const [showModal, setShowModal] = useState(false);

   //function to open the modal when the button is clicked

   const handleModalOpen = () =>
   {
    setShowModal(true);
   }
   //function to close the modal 
   const handleModalClose = () =>
  {
    setShowModal(false) ;
  }


  return(
    <div>
      <Button className="btn btn-info mt-5" onClick={handleModalOpen}>
        Click Me!
      </Button>

      <Modal show={showModal} 
      onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title >
            Mint Chocolate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>price:$1.99</strong></p>
          <ul>
            <li>Chocolate Ganache Topping:+ $0.50</li>
            <li>Extra Mint Frosting: + $0.50</li>
            <li>Crushed Choclate swirl: + $0.50</li>
          </ul>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"
          onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyButton;