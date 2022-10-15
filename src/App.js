import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import service from "./service";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  gap: 2.8rem;
  height: 65%;
  justify-content: center;
`;

const Product = styled.div`
  display: flex;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  color: white;
  padding: 12px;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1b204c;
  position: relative;
  top: 40px;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 40px;
  height: 220px;
`;

const Card = styled.div`
  /* display: flex; */
  width: 17rem;
  border-radius: 15px;
  position: relative;
  gap: 20px;
`;

const Price = styled.div`
  font-family: Rubik;
  font-size: 39px;
  font-weight: 300;
  line-height: 46px;
  letter-spacing: 0px;
`;

const Category = styled.div`
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0px;
`;

const Title = styled.span`
  font-family: Rubik;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  color: #bbc0ff;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #d8d8d8; ;
`;

const Dots = styled.div`
  display: flex;
  gap: 5px;
`;

const Count = styled.div`
  font-family: Rubik;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
`;

const colors = [
  "#ff8b64",
  "#55c2e6",
  "#ff5e7d",
  "#ff8b64",
  "#55c2e6",
  "#4bcf82",
  "#7335d3",
  "#f1c75c",
  "#4bcf82",
  "#7335d3",
];

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    service.getData().then((data) => setProducts(data));
  }, []);
  return (
    <div className="App">
      <Wrapper>
        {products.map(({ category, title, price, rating: { count } }, i) => (
          <Product key={i}>
            <Card style={{ backgroundColor: colors[i] }}>
              <Container>
                <Details>
                  <Category>{category}</Category>
                  <Price>{`${price} $`}</Price>
                  <Title>{title}</Title>
                </Details>
                <SideBar>
                  <Dots>
                    <Circle></Circle>
                    <Circle></Circle>
                    <Circle></Circle>
                  </Dots>
                  <Count>
                    <div>InStore</div>
                    <div>{count}</div>
                  </Count>
                </SideBar>
              </Container>
            </Card>
          </Product>
        ))}
      </Wrapper>
    </div>
  );
}

export default App;
