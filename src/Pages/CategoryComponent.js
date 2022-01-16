/** @format */

import React, { useEffect }  from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux"
import { productCategory } from "../Redux/Actions/productActions";

 
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
  const categories = useSelector((state) => state );
  const dispatch = useDispatch( );

  const fetchCat = async () =>{
    const response = await axios
  .get("https://fakestoreapi.com/products/categories")
  .catch((error) =>{
    console.log("error", error);
  })
  dispatch(productCategory(response.data));
  }
  useEffect(() => {
     fetchCat();
  }, [ ])
  console.log("categories", categories);
  
     return (
    <Container>
      <>
        <Link to="mensfashion" style={{textDecoration: 'none'}}>
          <Card>
            <Image src={"https://i.ibb.co/TTQCqB5/b1-c.png"} />
            <Tag>MEN'S CLOTHS</Tag>
          </Card>
        </Link>
        <Link to="womensfashion" style={{textDecoration: 'none'}}>
        <Card>
          <Image
            src={
              "https://i.ibb.co/Kr7Cnxb/Full-length-portrait-of-a-happy-excited-girl-in-bright-colorful-clothes-holding-shopping-bags-while.jpg"
            }
          />
          <Tag>WOMEN'S CLOTHS</Tag>
        </Card>
        </Link>
        <Link to="electronicitems" style={{textDecoration: 'none'}}>
        <Card>
          <Image src={"https://i.ibb.co/bbNKVS2/e1-c.jpg"} />
          <Tag>ELECTRONICS</Tag>
        </Card>
        </Link>
        <Link to="jewellery" style={{textDecoration: 'none'}}>
        <Card>
          <Image
            src={
              "https://i.ibb.co/Q9shLVZ/Concept-of-wedding-accessories-with-wedding-ring-close-up.jpg"
            }
          />
          <Tag>JWELLERY</Tag>
        </Card>
        </Link>
      </>
    </Container>
  );
}
export default Category;