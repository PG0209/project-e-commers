/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: #f0ede6;
  padding: 20px;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Card = styled.div`
  text-align: center;
  height: 100%;
  transition-duration: 0.1s;
   
  &:hover {
    transition: scale(1.1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 290px;
  width: 260px;
`;
const Tag = styled.h6`
  font-weight: 400;
  height: 70px;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:black;
   
`;

const Category = () =>{
  const categories = useSelector(state => state.allCategory.categories)
  //console.log(categories);
     return (
      <Container>
        {
          categories.map(post =>{
            const {category}= post;
            return(
              <Link to={`/category/${category}`} style={{textDecoration: 'none'}}>
          <Card>
            <Tag>{post}</Tag>
          </Card>
        </Link>
            )
          })
        }
      </Container>
  );
}
export default Category;