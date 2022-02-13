import styled from "styled-components";
import Image from "next/image";
import customerPic from "../../../public/customer.png";

const Container = styled.section`
  width: 1100px;
  margin: 150px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & h1 {
    width: 445px;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
    font-weight: bold;

    & span {
      color: #d87d4a;
    }
  }

  & p {
    width: 445px;
    font-size: 15px;
    font-weight: medium;
    line-height: 25px;
    opacity: 50%;
    margin-top: 2rem;
  }
`;

function About() {
  return (
    <Container>
      <TextContainer>
        <h1>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </TextContainer>
      <Image src={customerPic} width={540} height={588} />
    </Container>
  );
}

export default About;
