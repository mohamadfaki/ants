import styled from 'styled-components';
import img from '../Assets/Inner.png';
const Section = styled.div`
  padding-bottom: 5%;
  font-family: 'Montserrat', sans-serif;
  img {
    padding-top: 7%;
    padding-left: 15%;
    width: 80%;
    height: 80%;
  }
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  padding: 5%;
  width: 50%;
  p {
    font-size: 1.2rem;
    font-weight: 400;
    padding-top: 4%;
  }

  h5 {
    font-size: 2rem;
    font-weight: 500;
    padding-top: 4%;
  }
  input {
    padding: 1.2%;
    width: 10%;
    margin-right: 10%;
  }
  button {
    background-color: #69358d;
    color: #fff;
    border: none;
    padding: 1%;
    margin-top: 5%;
    width: 70%;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .p{
    padding-top: 15%;
    margin-right: 15%;
  }
`;
const Innerprodcuts = () => {
  return (
    <Section>
      <Left>
        <img src={img} alt="sa" />
      </Left>
      <Right>
        {' '}
        <h5>Biotite</h5>
        <p>0.00$</p>
        <p>Quantity</p>
        <input className="low" type="number" min={1} />
        <button>Add to Cart</button>
        <p className="p">
          biotite, also called black mica, a silicate mineral in the common mica
          group. It is abundant in metamorphic rocks (both regional and
          contact), in pegmatites, and also in granites and other intrusive
          igneous rocks.
        </p>
      </Right>
    </Section>
  );
};

export default Innerprodcuts;
