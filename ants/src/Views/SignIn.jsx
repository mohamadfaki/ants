import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/Path 909.png";
import Facebook from "../Assets/Group 85.png";
import Instagram from "../Assets/Instagram.png";
const Section = styled.div`
@font-face {
  font-family: 'ooo';
  src: local(ooo), url(../fonts/SvargaTypefacePERSONALUSEONLY-Regular.otf) format('opentype');
}
  padding-bottom: 5%;
  font-family: "Montserrat", sans-serif;

  .row {
    flex-direction: column;
    padding-right: 10%;
  }
  .Contanct {
    display: flex;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    height: 12%;
    padding-right: 03%;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 9%;
    color: #000;
    font-family: "ooo";
  }
`;
const Left = styled.div`
  width: 50%;
  img {
    padding-top: 8%;
    padding-left: 40%;
    height: 100%;
    width: 70%;
  }
`;
const Right = styled.div`
  margin-right: 12%;
  width: 50%;
  label {
    font-weight: 500;
    color: #000;
  }

  form {
    margin-top: 8%;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 100%;
    padding: 18px 20px;
    margin: 7px 10px;

    border: 1px solid #000;
  }
  // create button csss
  button {
    width: 50%;
    padding: 12px 20px;
    margin: 5% 20%;
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    border: 1px solid #000;
  }
  p {
    margin: 2% 5% 5% 20%;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
  }
  .lessfont {
    font-weight: 500;
    font-size: 1.2rem;
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
`;
const SignIn = () => {
  return (
    <Section>
      <Title>
        <h1>Log In</h1>
        <Line />
      </Title>
      <Contact>
        <Left>
          <img src={img} alt="contact" />
        </Left>
        <Right>
          <form>
            <div className="row">
              <label for="fname">UserName or Email</label>
              <input type="text" id="email" name="firstname" />
            </div>
            <div className="row">
              <label for="fname">Password</label>
              <input type="text" id="email" name="firstname" />
            </div>
            <button type="submit">Log In</button>
          </form>
          <div className="Contanct">
            <p>or Log in With</p>
            <img className="social-icon" src={Facebook} alt="facebook" />
            <img className="social-icon" src={Instagram} alt="facebook" />
          </div>
          <Link to="/sign-up" style={{textDecoration: 'none'}}>
            <p className="lessfont"> Are you new? Sign Up here!</p>
          </Link>
        </Right>
      </Contact>
    </Section>
  );
};

export default SignIn;
