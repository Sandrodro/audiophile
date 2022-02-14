import styled from "styled-components";
import Image from "next/image";
import SeeProductBtn from "../buttons/SeeProduct";
import Link from "next/link";

const Container = styled.section`
  display: flex;
  width: 1100px;
  margin: 0 auto;
  height: 571px;
  flex-flow: column nowrap;
  gap: 3rem;

  & h3 {
    font-size: 32px;
    align-self: center;
    letter-spacing: 1.14px;
    line-height: 36px;
    font-weight: bold;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  width: 350px;
  height: 471px;
  display: flex;
  border-radius: 8px;
  gap: 1rem;
  flex-flow: column nowrap;
  align-items: center;

  & .roundedImage {
    border-radius: 8px;
  }
`;

function Suggestions({ otherProducts }) {
  return (
    <Container>
      <h3>YOU MAY ALSO LIKE</h3>
      <CardContainer>
        {otherProducts.map((product) => {
          return (
            <Link href={`/product/${product.slug}`} passHref key={product.slug}>
              <Card>
                <Image
                  src={product.image.desktop.substring(1)}
                  width={350}
                  height={318}
                  className="roundedImage"
                />
                <h4>{product.name}</h4>
                <SeeProductBtn>SEE PRODUCT</SeeProductBtn>
              </Card>
            </Link>
          );
        })}
      </CardContainer>
    </Container>
  );
}

export default Suggestions;
