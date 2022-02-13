import styled from "styled-components";
import audiophileIcon from "../../../public/audiophile.svg";
import Image from "next/image";
import Link from "next/link";

const FooterContainer = styled.footer`
  width: 100%;
  height: 365px;
  background-color: #101010;
  width: 100%;
  color: #ffffff;
  margin: 0;

  & img {
    cursor: pointer;
  }

  & .flexContainer {
    width: 1300px;
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    flex-flow: row nowrap;
    gap: 100px;

    & ul {
      list-style: none;
      display: flex;
      flex-flow: row nowrap;
      gap: 25px;
      letter-spacing: 2px;
      font-size: 13px;

      & li {
        cursor: pointer;
      }
    }

    & p {
      opacity: 50%;
      width: 540px;
      margin-top: 40px;
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="flexContainer">
        <div>
          <Link href="/">
            <Image src={audiophileIcon} width={143} height={25} />
          </Link>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div>
          <ul>
            <Link href="/">
              <li>HOME</li>
            </Link>
            <Link href="/headphones">
              <li>HEADPHONES</li>
            </Link>
            <Link href="/speakers">
              <li>SPEAKERS</li>
            </Link>
            <Link href="/earphones">
              <li>EARPHONES</li>
            </Link>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
