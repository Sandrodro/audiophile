import styled from "styled-components";
import Image from "next/image";
import audiophileIcon from "../../../public/audiophile.svg";
import cartIcon from "../../../public/cart.svg";
import Link from "next/link";
import { useState } from "react";
import SeeProductBtn from "../buttons/SeeProduct";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, removeAll } from "../../state/cartSlice";

const StyledHeader = styled.header`
  position: relative;
  font-size: 13px;
  color: ${(props) => props.theme.colors.whitest};
  background-color: ${(props) => props.theme.colors.black};

  & div {
    display: grid;
    grid-template-columns: 145px 1fr 32px;
    width: 1300px;
    margin: 0 auto;
    padding: 37px 0;
  }

  & ul {
    display: flex;
    margin: 0 330px auto;
    flex-flow: row wrap;
    list-style: none;
    gap: 1em;
    letter-spacing: 2px;

    & li {
      cursor: pointer;
    }
  }

  & img {
    cursor: pointer;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  padding: 30px;
  display: flex;
  gap: 20px;
  flex-flow: column nowrap;
  align-items: center;
  right: 300px;
  top: 200px;
  background-color: white;
  z-index: 1000;
  border-radius: 5px;
  border: 3px solid black;
  width: 377px;
  min-height: 488px;

  & > div {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    & h4 {
      font-size: 18px;
      letter-spacing: 1.29px;
      font-weight: 700;
    }

    & h5 {
      font-size: 15px;
      opacity: 50%;
    }

    & button {
      border: none;
      outline: none;
      text-decoration: underline;
      opacity: 50%;
      color: #000000;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

const CartItemContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  width: 100%;
`;

const StyledCartItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & .flexRow {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    align-items: center;
  }

  & h6 {
    font-size: 15px;
  }

  & h7 {
    font-size: 14px;
    opacity: 50%;
  }
`;

const QuantityButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 96px;
  height: 32px;
  justify-content: space-around;
  background-color: #f1f1f1;

  & button {
    border: none;
    outline: none;
    font-size: 24px;
    cursor: pointer;
  }
`;

function Header() {
  const cartState = useSelector(selectCart);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <StyledModal>
          <div>
            <h4>CART {`(${cartState.length})`}</h4>
            <button onClick={() => dispatch(removeAll())}>Remove all</button>
          </div>
          <CartItemContainer>
            {cartState.map((item) => {
              return (
                <StyledCartItem>
                  <div className="flexRow">
                    <Image
                      src={item.image.desktop.substring(1)}
                      width={64}
                      height={64}
                    />
                    <div>
                      <h6>{item.name}</h6>
                      <h7>{`$ ${item.price}`}</h7>
                    </div>
                  </div>
                  <QuantityButton>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </QuantityButton>
                </StyledCartItem>
              );
            })}
          </CartItemContainer>
          <div>
            <h5>TOTAL</h5>
            <h4>
              {`$ ${
                cartState.length &&
                cartState.reduce((prevItem, currentItem) => {
                  return prevItem + currentItem.price;
                }, 0)
              }`}
            </h4>
          </div>
          <SeeProductBtn>CHECKOUT</SeeProductBtn>
        </StyledModal>
      ) : null}
      <StyledHeader>
        <div>
          <Link href="/">
            <Image src={audiophileIcon} height={25} width={145} />
          </Link>
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
            <Link href="earphones">
              <li>EARPHONES</li>
            </Link>
          </ul>
          <Image
            src={cartIcon}
            height={28}
            width={32}
            onClick={() => setShowModal((state) => !state)}
          />
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;
