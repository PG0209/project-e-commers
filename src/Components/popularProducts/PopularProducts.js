/** @format */

import React from "react";
import styled from "styled-components";
import { popularProducts } from "../componentData";
import PopularProduct from "./PopularProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, #fcfdff, #f6f7f8, #f1f1f2, #ebebeb, #e5e5e5);  
`;
const Title = styled.h1`
  height:100px;
  font-size: 42px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:25px;
`;
 

const PopularProducts = () => {
  return (
    <>
        <Title>Popular Products</Title>
        <Container>
        {popularProducts.map((items) => (
          <PopularProduct items={items} key={items.id} />
        ))}
      </Container>
    </>
  );
};

export default PopularProducts;
