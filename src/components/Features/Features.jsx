import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-flow: row nowrap;
  width: 1100px;
  margin: 50px auto;
  justify-content: space-between;

  & .paragraph {
    width: 635px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;

  & h1 {
    font-size: 32px;
    letter-spacing: 1.14px;
    line-height: 36px;
  }

  & p {
    font-size: 15px;
    line-height: 25px;
    opacity: 50%;
  }

  & ul {
    list-style: none;
    display: flex;
    font-size: 15px;
    flex-flow: column nowrap;
    gap: 15px;
  }

  & ul .orange {
    color: #d87d4a;
    opacity: 100%;
    font-weight: bold;
    font-size: 15px;
    margin-right: 1rem;
  }

  & ul .item {
    opacity: 50%;
  }
`;

function Features({ features, box }) {
  return (
    <Container>
      <Column className="paragraph">
        <h1>FEATURES</h1>
        {features.split("\n").map((str) => (
          <p>{str}</p>
        ))}
      </Column>
      <Column>
        <h1>IN THE BOX</h1>
        <ul>
          {box.map((item) => {
            return (
              <li>
                <span className="orange">{`${item.quantity}x`}</span>
                <span className="item">{item.item}</span>
              </li>
            );
          })}
        </ul>
      </Column>
    </Container>
  );
}

export default Features;
