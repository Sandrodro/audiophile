import styled from "styled-components";
import data from "../../../data.json";
import Image from "next/image";
import SeeProductBtn from "../../components/buttons/SeeProduct";
import React, { useState } from "react";

const Container = styled.section`
  width: 1300px;
  margin: 140px auto;
  display: flex;
  flex-flow: ${(props) => (props.left ? "row" : "row-reverse")} nowrap;
  align-items: center;
  justify-content: space-around;

  & img {
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  width: 445px;
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  & h1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
    font-weight: bold;
  }

  & p {
    font-size: 15;
    line-height: 25px;
    font-weight: medium;
    opacity: 50%;
  }
`;

const PriceContainer = styled.h3`
  font-size: 18px;
  letter-spacing: 1.29px;
  font-weight: bold;
`;

const AddToCartContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`;

const QuantityButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 120px;
  height: 48px;
  justify-content: space-around;
  background-color: #f1f1f1;

  & button {
    border: none;
    outline: none;
    font-size: 24px;
    cursor: pointer;
  }
`;

const NewProductCard = React.forwardRef(
  (
    {
      imageUrl,
      headline,
      paragraph,
      left,
      productPage,
      price,
      href,
      onClick,
      add,
      remove,
      dispatch,
      product,
    },
    ref
  ) => {
    const [quantity, setQuantity] = useState(0);

    return (
      <Container left={left}>
        <Image src={imageUrl} width={540} height={560} />
        <TextContainer>
          <h1>{headline}</h1>
          <p>{paragraph}</p>
          {productPage ? (
            <>
              <PriceContainer>{`$ ${price}`}</PriceContainer>
              <AddToCartContainer>
                <QuantityButton>
                  <button
                    onClick={() => {
                      setQuantity((quantity) =>
                        quantity === 0 ? 0 : quantity - 1
                      );
                      dispatch(remove(product.id));
                    }}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => {
                      setQuantity((quantity) => quantity + 1);
                      dispatch(add(product));
                    }}
                  >
                    +
                  </button>
                </QuantityButton>
                <SeeProductBtn>ADD TO CART</SeeProductBtn>
              </AddToCartContainer>
            </>
          ) : (
            <div href={href} ref={ref} onClick={onClick}>
              <SeeProductBtn>SEE PRODUCT</SeeProductBtn>
            </div>
          )}
        </TextContainer>
      </Container>
    );
  }
);

export default NewProductCard;
