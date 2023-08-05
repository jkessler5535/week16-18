import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Container} from "react-bootstrap";
import {Form} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import rainbowCakes from '../images/rainbowcakes.jpg';



 
// Defines a function component called Cupcakes
// Creates formData state variable with initial values for the form fields
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialOrder: '',
    howDidYouHear: ''
  });

  // Creates dataList state variable as an empty array
  const [dataList, setDataList] = useState([]);

  // Defines a function handleChange that runs when a form input is changed
  // Gets the name and value of the input that triggered the change event
  // Updates the formData state variable by copying the previous state and updating the changed value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


// Defines a function handleSubmit that runs when the form is submitted
// Prevents the default form submission behavior
// Creates a copy of the current formData and stores it in a variable called newData
// Adds the newData to the dataList state variable by copying the previous state and appending the newData
// Logs the newData to the browser console
// Resets the formData state variable to its initial values to clear the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    setDataList((prevDataList) => [...prevDataList, newData]);
    console.log(newData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      specialOrder: '',
      howDidYouHear: ''
    });
  };


// Defines a function handleEdit that runs when the edit button is clicked
// Gets the data item from the dataList at the specified index
 // Updates the formData state variable with the selectedData item
// Calls the handleDelete function to remove the data item from the list
  const handleEdit = (index) => {
    const selectedData = dataList[index];
    setFormData(selectedData);
    handleDelete(index);
  };


// Defines a function handleDelete that runs when the delete button is clicked
// Creates a copy of the dataList and stores it in a variable called newDataList
// Removes the data item at the specified index from the newDataList
 // Updates the dataList state variable with the newDataList
  const handleDelete = (index) => {
    const newDataList = [...dataList];
    newDataList.splice(index, 1);
    setDataList(newDataList);
  };


  const handleRowSubmit = (data) => {
    console.log(data);
    alert('Your information had been submitted!');
  };

  return (
    <Container>
    <div>
    <h1 className="text-secondary mt-5">Inquiry</h1>
      <div className="cupcake-hero mt-5">
      <img src={rainbowCakes} height="250" alt="cake-by-Deva-Williamson" className="img-fluid rounded"/>
    </div>
   
      <p className="note pt-5">Note: We will try our best to get back to you 
        within 48 hours. Orders are not final until payment
        is made. Thanks!</p>

      <Form className="mb-5 pb-5 mt-3 pt-5" onSubmit={handleSubmit}>
        <label className="form-label">Name :</label>
        <input className="form-control mb-3" type="text" name="name" value={formData.name} onChange={handleChange}
        required
        />

        <label className="form-label">Phone number : </label>
        <input className="form-control mb-3" type="text"
        name="phone" value={formData.phone} onChange={handleChange}
        required
        />
        

        <label className ="form-label">Email :</label>
        <input className="form-control mb-3" type="email" name="email" value={formData.email} onChange={handleChange}
        required
        />
        

        <label className ="form-label mb-3"> Special Order Details :</label>
          <textarea className="form-control mb-3" rows="8"
            name="specialOrder"
            value={formData.specialOrder}
            onChange={handleChange}
            required
          />
        

        <label className ="form-label mb-3">How did you hear about us?</label>
        <input className="form-control mb-5" type="text" name="howDidYouHear"
        value={formData.howDidYouHear}
        onChange={handleChange}
        required
        />

        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="mailing-list"></input>
            <label className ="form-check-label ml-2 mb-2" htmlFor="mailing-list">Add me to your mailing list</label>
         </div>
         <br/>

        <Button className="btn btn-info" type="submit">Submit</Button>
      </Form>


      <div className="text-center text-secondary">
        <h2>Confirm Information</h2>
      </div>
      <Table striped bordered className="table-info mb-5">
        <thead>
          <tr>
            <th id="table-head" style={{backgroundColor:"lightgray", color: "white"}}>Name</th>
            <th id="table-head" style={{backgroundColor:"lightgray", color: "white"}}>Phone</th>
            <th id="table-head" style={{backgroundColor:"lightgray", color: "white"}}>Email</th>
            <th id="table-head" style={{backgroundColor:"lightgray", color: "white"}}>Special Order</th>
            <th id="table-head" style={{backgroundColor:"lightgray", color: "white"}}>How Did You Hear</th>
            <th id="table-head" style={{backgroundColor:"lightgray", color: "white"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td id="dataCell">{data.name}</td>
              <td id="dataCell">{data.phone}</td>
              <td id="dataCell">{data.email}</td>
              <td id="dataCell">{data.specialOrder}</td>
              <td id="dataCell">{data.howDidYouHear}</td>
              <td className="d-flex" id="dataCell">
                <Button className="btn btn-secondary " id="table-btn" onClick={() => handleEdit(index)}>Edit</Button>

                <Button className="btn btn-danger ml-1" id="table-btn" onClick={() => handleDelete(index)}>Delete</Button>
              
                <Button className="btn btn-primary  text-white ml-1" id="table-btn" onClick={() => handleRowSubmit(data)}>Submit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Container>
  );
};

export default Contact;
            
      