/** @format */

import React from "react";
import styled from "styled-components";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useState } from "react";
import { slidesData } from "./componentData";

const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  font-size: 40px;
  color: black;
  opacity: 15%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  cursor: pointer;
  margin: auto;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease 0s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const H3 = styled.h3`
  font-weight:400;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #f8f9fa;
  border: none;
  background-color: black;
  border-radius: 5px;
  transition-duration: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

function Sliders() {
  const [slideIndex, setSlideIndex] = useState(0);

  const haldelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  console.log(haldelClick);
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => haldelClick("left")}>
          <BsFillArrowLeftSquareFill />
        </Arrow>
        {slidesData.map((items) => (
          <Wrapper slideIndex={slideIndex} key={items.id}>
            <Slide bg={items.bg} >
              <ImgContainer>
                <Image src={items.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{items.title}</Title>
                <Desc>
                  <H3>SUPER SALE. </H3>
                  ON NEW ARRIVALS. DON'T COMPROMISE ON STYLE.
                </Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          </Wrapper>
        ))}
        ;
        <Arrow direction="right" onClick={() => haldelClick("right")}>
          <BsFillArrowRightSquareFill />
        </Arrow>
      </Container>
    </>
  );
}

export default Sliders;
