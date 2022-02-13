import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 290px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #000000;

  & h1 {
    font-size: 40px;
    letter-spacing: 1.43px;
    line-height: 44px;
  }
`;

function CategoryHeader({ category }) {
  return (
    <HeaderContainer>
      <h1>{category}</h1>
    </HeaderContainer>
  );
}

export default CategoryHeader;
