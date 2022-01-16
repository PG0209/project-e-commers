/** @format */

import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import { GrPhone, GrLocation } from "react-icons/gr";
  import styled from "styled-components";
  
  const Container = styled.div`
    display: flex;
    background-color: #f8f9fa;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    font-weight:500;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    font-weight: 500;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
    width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Shopzee..</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <AiOutlineFacebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <AiOutlineInstagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <AiOutlineTwitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Jweleries</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <GrLocation style={{ marginRight: "10px" }} /> 622 Marathalli,
            Bangalore 562114
          </ContactItem>
          <ContactItem>
            <GrPhone style={{ marginRight: "10px" }} /> +1 234 567 8900
          </ContactItem>
          <ContactItem>
            <AiOutlineMail style={{ marginRight: "10px" }} /> contact@shop.zee
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
       </Container>
    );
  };
  
  export default Footer;
  