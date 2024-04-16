import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaEnvelope } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink } from './FooterElements';
import logo from "../../images/tschijpm.svg"
import styled from 'styled-components';


const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 50px;
  background-color: #FF5A5A;
  color: #fff;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000;
  }
`;
const WaitlistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const BackedByContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  text-align: center;
  color: #fff;
  background-color: #fff;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;



const BackedByTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 5px;
  color: #fff
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BackedByLogo = styled.img`
  padding-left: 12rem;
  height: 400px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: auto; // Corrected typo
  color: #fff;
  background-color: #fff;

  @media (max-width: 767px) {
    height: 10rem;
    padding-left: 5rem;

  }

  // @media (min-width: 768px) {
  //   margin-top: 0;
  //   margin-left: 10px;
  // }
`;


const TechstarsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;




const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <div style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
        <WaitlistContainer>
          <a href="https://forms.gle/Sr8RAFLpKiyM1QZ27" target="_blank" rel="noopener noreferrer">
            <Button>Download the f📍cking app!</Button>
          </a>
        </WaitlistContainer>
        <BackedByContainer style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: "center", margin: "auto", color: "#000" }}>
          <BackedByTitle>Backed by</BackedByTitle>
        </BackedByContainer>

        <TechstarsLink href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer"
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "auto"
          }}
        >
          <BackedByLogo src={logo} alt="Techstars powered by JP Morgan"
            style={{ justifyContent: "center", alignItems: "center", margin: "auto" }} />
        </TechstarsLink>
      </div>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              ParkingKarma
            </SocialLogo>
            <WebsiteRights>ParkingKarma © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIconLink href="mailto:drake@parkingkarma.io" target="_blank" aria-label="Email"><FaEnvelope />
            </SocialIconLink>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer >



  );
};

export default Footer;
