// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import "../Styles/contact.css";
// import contact from "../Assets/contact.png";

// const ContactUs = () => {
//   const [formStatus, setFormStatus] = React.useState("Send");
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus("Submitting...");
//     const { name, email, message } = e.target.elements;
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     console.log(conFom);
//   };
//   return (
//     <Container>
//       <div className="contact-text">
//         <h1>Contact Us </h1>
//         <div className="contact-line"></div>
//       </div>

//       <div className="container-1">
//         <img
//           className="contact-img"
//           src={contact}
//           alt="story"
//           width="270px"
//           height="270px"
//         />
//       </div>
//       <div className="container-1">
//         <form onSubmit={onSubmit}>
//           <div className="mb-12">
//             <label className="form-label" htmlFor="name">
//               Name
//             </label>
//             <input className="form-control" type="text" id="name" required />
//             <label className="form-label" htmlFor="lastname">
//               Last Name
//             </label>
//             <input
//               className="form-control"
//               type="text"
//               id="lastname"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label" htmlFor="email">
//               Email
//             </label>
//             <input className="form-control" type="email" id="email" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label" htmlFor="message">
//               Message
//             </label>
//             <textarea className="form-control" id="message" required />
//           </div>
//           <button className="btn btn-danger btn-contact" type="submit">
//             {formStatus}
//           </button>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default ContactUs;
import styled from "styled-components";
import img from "../Assets/Path 907.png";
const Section = styled.div`
  padding-bottom: 5%;
  font-family: "Montserrat", sans-serif;
  .each {
    display: flex;
  }
  .row {
    flex-direction: column;
    padding-right: 10%;
    #email {
      min-width: 217%;
    }
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 9%;
    color: #000;
  }
`;
const Left = styled.div`
  width: 50%;
  img {
    padding-top: 8%;
    padding-left: 22%;
    height: 95%;
    width: 90%;
  }
`;
const Right = styled.div`
  margin-right: 12%;
  width: 50%;
  label {
    color: #000;
    font-weight: 500;
  }

  form {
    margin-top: 8%;
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    width: 100%;
    padding: 18px 20px;
    margin: 7px 10px;

    border: 1px solid #000;
  }
  textarea {
    min-width: 173%;
  }
`;
const Line = styled.div`
  margin-left: 2%;
  width: 67%;
  height: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;
const Contact = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 5%;
`;
const ContactUs = () => {
  return (
    <Section>
      <Title>
        <h1>Contact us</h1>
        <Line />
      </Title>
      <Contact>
        <Left>
          <img src={img} alt="contact" />
        </Left>
        <Right>
          <form>
            <div className="each">
              <div className="row">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" />
              </div>
              <div className="row">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" />
              </div>
            </div>
            <div className="each">
              <div className="row">
                <label for="fname">Email</label>
                <input type="text" id="email" name="firstname" />
              </div>
            </div>
            <div className="each">
              <div className="row">
                <label for="fname">Message</label>

                <textarea name="message" rows="10" cols="30" />
              </div>
            </div>
          </form>
        </Right>
      </Contact>
    </Section>
  );
};

export default ContactUs;
