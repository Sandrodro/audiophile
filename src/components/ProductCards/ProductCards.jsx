import styled from "styled-components";
import Image from "next/image";
import shoparrow from "../../../public/shoparrow.svg";
import headphoneImage from "../../../public/product/lil-headphone.png";
import earphoneImage from "../../../public/product/lil-earphone.png";
import speakerImage from "../../../public/product/lil-speaker.png";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  margin: 2rem auto;
  margin-bottom: 8rem;
  justify-content: space-between;
  width: 1100px;
  align-items: flex-end;
  flex-flow: row nowrap;
`;

const Card = styled.article`
  display: flex;
  width: 350px;
  height: 285px;
  cursor: pointer;
  background-image: linear-gradient(
    ${(props) => props.theme.colors.white},
    ${(props) => props.theme.colors.white}
  );
  background-origin: border-box;
  background-size: 100% 204px;
  background-position: left 63%;
  background-repeat: no-repeat;
  border-radius: 8px;
  flex-flow: column nowrap;
  gap: 1rem;
  align-items: center;

  & .shop {
    font-size: 13px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

function ProductCards() {
  return (
    <Container>
      <Link href="/headphones">
        <Card>
          <Image
            src={headphoneImage}
            width={122}
            height={146}
            className="image"
          />
          <h3 className="productTitle">HEADPHONES</h3>
          <div className="shop">
            <h6 className="shop">SHOP</h6>
            <Image
              src={shoparrow}
              width={8}
              height={18}
              className="rightArrow"
            />
          </div>
        </Card>
      </Link>
      <Link href="/speakers">
        <Card>
          <Image src={speakerImage} width={122} height={146} />
          <h3 className="productTitle">SPEAKERS</h3>
          <div className="shop">
            <h6 className="shop">SHOP</h6>
            <Image
              src={shoparrow}
              width={8}
              height={18}
              className="rightArrow"
            />
          </div>
        </Card>
      </Link>
      <Link href="/earphones">
        <Card>
          <Image src={earphoneImage} width={135} height={146} />
          <h3 className="productTitle">EARPHONES</h3>
          <div className="shop">
            <h6 className="shop">SHOP</h6>
            <Image
              src={shoparrow}
              width={8}
              height={18}
              className="rightArrow"
            />
          </div>
        </Card>
      </Link>
    </Container>
  );
}

export default ProductCards;
