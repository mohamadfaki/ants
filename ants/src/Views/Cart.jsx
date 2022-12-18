import styled from 'styled-components';
import Facebook from '../Assets/Group 85.png';
import Instagram from '../Assets/Instagram.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import stone from '../Assets/stonnn.png';
import ruby from '../Assets/ruby.png';
import white from '../Assets/white-beige-bottoms.png';
const Section = styled.div`
@font-face {
    font-family: 'ooo';
    src: local(ooo), url(../fonts/SvargaTypefacePERSONALUSEONLY-Regular.otf) format('opentype');
  }

  padding-bottom: 5%;
  font-family: 'Montserrat', sans-serif;

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
  }
  font-family: 'ooo';
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
const Column = styled.div`
  .checkbox-round {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    display: flex;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 1%;
  }
  .checkbox-round:checked {
    background-color: #ddd;
    border: 2px solid #69358d;
  }
  //change checed box when click
  .checkbox-round:checked::after {
    background: #69358d;
  }

  padding: 2%;
  padding-left: 10%;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 10%;
    border-radius: 50%;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    color: #000;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 9%;
    padding-left: 9%;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: auto;
    appearance: auto;
    opacity: 1;

    color: red;
  }
  input {
    width: 30%;
  }

  .low {
    width: 30%;
  }
`;
const Checkout = styled.div`
  display: flex;
  justify-content: flex-end;
  h5 {
    padding-left: 0%;
    padding-right: 18%;
  }
`;
const Cart = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const [isActive1, setIsActive1] = useState(false);

  const handleClick1 = () => {
    // 👇️ toggle
    setIsActive1((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  const [isActive2, setIsActive2] = useState(false);

  const handleClick2 = () => {
    // 👇️ toggle
    setIsActive2((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <Section>
      <Title>
        <h1>Your Cart</h1>
        <Line />
      </Title>
      <Column>
        <input
          style={{
            backgroundColor: isActive1 ? '#69358d' : '',
            color: isActive1 ? 'white' : '',
          }}
          onClick={handleClick1}
          type="checkbox"
          class="checkbox-round"
          checked
          id="checkbox"
        />
        <img src={stone} alt="img" />
        <p> Stone Ring</p>
        <p> One Size</p>
        <p> $ 100</p>
        <span class="number">
          <input className="low" type="number" />
        </span>
      </Column>
      <Column>
        <input
          style={{
            backgroundColor: isActive ? '#69358d' : '',
            color: isActive ? 'white' : '',
          }}
          onClick={handleClick}
          type="checkbox"
          class="checkbox-round"
          checked
          id="checkbox"
        />
        <img src={ruby} alt="img" />
        <p> Stone Ring</p>
        <p> One Size</p>
        <p> $ 100</p>
        <span class="number">
          <input type="number" />
        </span>
      </Column>

      <Column>
        <input
          style={{
            backgroundColor: isActive2 ? '#69358d' : '',
            color: isActive2 ? 'white' : '',
          }}
          onClick={handleClick2}
          type="checkbox"
          class="checkbox-round"
          checked
          id="checkbox"
        />
        <img src={white} alt="img" />
        <p> Stone Ring</p>
        <p> One Size</p>
        <p> $ 100</p>
        <span class="number">
          <input type="number" />
        </span>
      </Column>
      <Checkout>
        <h5>Total:0.00$</h5>
        <h5>Checkout</h5>
      </Checkout>
    </Section>
  );
};

export default Cart;
