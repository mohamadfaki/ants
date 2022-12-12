import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/contact.css";
import contact from "../Assets/contact.png";


const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
   <Container>
   <div className="contact-text">
   <h1>Contact Us </h1>
   <div className="contact-line"></div>
 </div>

  
   <div className="container-1"><img className="contact-img" src={contact} alt="story" width="270px" height="270px" /></div>
   <div className="container-1">
   <form onSubmit={onSubmit}>
     <div className="mb-12">
       <label className="form-label" htmlFor="name">
         Name
       </label>
       <input className="form-control" type="text" id="name" required />
       <label className="form-label" htmlFor="lastname">
      Last Name
     </label>
     <input className="form-control" type="text" id="lastname" required />
     </div>
      
     <div className="mb-3">
       <label className="form-label" htmlFor="email">
         Email
       </label>
       <input className="form-control" type="email" id="email" required />
     </div>
     <div className="mb-3">
       <label className="form-label" htmlFor="message">
         Message
       </label>
       <textarea className="form-control" id="message" required />
     </div>
     <button className="btn btn-danger btn-contact" type="submit">
       {formStatus}
     </button>
   </form>
  </div>
  
  



 
 
   </Container>
  );
};

export default ContactUs;
