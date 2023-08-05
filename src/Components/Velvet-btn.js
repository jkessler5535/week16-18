import {Button, Modal} from 'react-bootstrap';
import React, {useState} from 'react';

//set up state to track modal is open or closed
const VelvetButton =()=>{
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
            Red Velvet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>price:$1.99</strong></p>
          <ul>
            <li>Chocolate Drizzle:+ $0.50</li>
            <li>Extra Cream Cheese Frosting: + $0.50</li>
            <li>Cinnamon & Coconut Sugar: + $0.50</li>
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

export default VelvetButton;