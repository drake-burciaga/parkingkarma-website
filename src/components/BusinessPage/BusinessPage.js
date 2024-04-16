import React from 'react';
import parkingkarmalogo from "../../images/yin-yang-solid.svg"
import logo from "../../images/tschijpm.svg"
import styled from 'styled-components';
import screenshotAdImage from "../../images/adexample.svg";
import Footer from '../../components/Footer/biz';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import FreeAds from "../../images/freeads.svg"
import { ReactSVG } from 'react-svg';






const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between; 

  @media (max-width: 768px) {
    flex-direction: column; // stack the items vertically on mobile
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column; // stack the items vertically on mobile
  }
`;

const HeaderLeft = styled.div`
  flex: 1;
  padding-right: 20px;
  // ... other styles ...

  @media (max-width: 768px) {
    order: 0; // ensure the header is above the image on mobile
  }


`; const HeaderRight = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
position: relative;

img {
  max-width: 100%;
  height: auto;

  @media (min-width: 1025px) {
    width: 35rem; // Adjusted width to make the image larger on desktop
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    width: 40rem;

    margin-top: 15px;
    padding-left: 0px;
    align-items: center;
    justify-content: center;
  }
}
`;


const FreeAdsImg = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
position: relative;
padding-top: 2rem;

img {
  max-width: 100%;
  height: auto;

  @media (min-width: 1025px) {
    width: 40firem; // Adjusted width to make the image larger on desktop
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40rem;
  }

  @media (max-width: 768px) {
    width: 40rem;

    margin-top: 15px;
    padding-left: 0px;
    align-items: center;
    justify-content: center;
  }
}
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CTAButton = styled.a`
  display: inline-block;
  background-color: #FF5A5A;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  margin: 20px 0;
  justify-content: center;
  align-items: center; /* Corrected typo here */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000;
  }

  @media (max-width: 768px) {
    padding: 8px 25px;
  }
`;




const BusinessPageContainer = styled.div`
  font-family: 'Arial, sans-serif';
  padding: 1% 5%;
  color: #333;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

`;

const Logo = styled.img`
  width: 30px;
`;

const BrandName = styled.span`
  font-size: 1.6rem;
  margin-left: 10px;
  font-weight: bold;
`;

const HighlightBubble = styled.div`
  background: linear-gradient(145deg, #FF5A5A, #E54A4A);
  border-radius: 30px;
  padding: 15px 40px;
  text-align: center;
  margin: 20px auto;
  color: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  font-weight: bold;
  font-size: 1.5rem;
`;

const MainHeader = styled.h1`
  font-size: 2.5rem;
  margin: 40px 0 20px;
  font-weight: 700;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 4px;
    background-color: #FF5A5A;
  }
`;
export const SocialLogo = styled(Link)`
    color: #fff;
    justify-content: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;
const SubHeader = styled.p`
  font-size: 1.4rem;
  margin: 10px 0 40px;
  padding-top: 1.5rem;
`;

const Section = styled.section`
  flex: 1;
  margin: 40px 0;
  padding: 0 10px;  // Add some padding to prevent the content from sticking to the edges

  &:not(:last-child) {  // Add a right margin to all sections except the last
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    padding: 0;  // Reset padding for mobile
    &:not(:last-child) {
      margin-right: 0;  // Reset margin for mobile
    }
  }
`;

const Card = styled.div`
  background-color: #F5F7FA;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.05);
`;

const StyledSvg = styled(ReactSVG)`
  width: 50rem;  // Increase the width for desktop
  height: auto;  // Use auto height to maintain the aspect ratio

  @media (max-width: 1024px) {  // Adjust the size for tablet
    width: 40rem;
  }

  @media (max-width: 768px) {  // Adjust the size for mobile
    width: 100%;
  }
`;


const toggleHome = () => {
  scroll.scrollToTop();
};

const BusinessPage = () => {
  return (
    <BusinessPageContainer>
      <TopBar>
        <SocialLogo to='/' onClick={toggleHome}>
          <Logo src={parkingkarmalogo} alt="ParkingKarma Logo" />
          <BrandName style={{ color: "black" }}>ParkingKarma</BrandName>

        </SocialLogo>

      </TopBar>

      <HighlightBubble>
        It's free to become a partner
      </HighlightBubble>

      <HeaderSection>
        <HeaderLeft>
          <MainHeader>A purchase is always one parked car away.</MainHeader>
          <SubHeader>Turn parking <u>in front of your store</u> to purchasing <u>in your store</u>. We make it easy for drivers to find parking. You can make it easy for drivers to find you through location-targeted ads <strong>at no cost.</strong></SubHeader>
        </HeaderLeft>
        <HeaderRight>

          <img src={screenshotAdImage} alt="screenshot example" />

        </HeaderRight>
      </HeaderSection>

      <CenteredButtonContainer>
        <CTAButton href="https://forms.gle/ndpZTSrsP2e8wZSW6" target='_blank'>Become a partner now</CTAButton>
      </CenteredButtonContainer>


      <SectionContainer>
        <Section>
          <h2>How It Works</h2>
          <Card>
            <h3>Start Their Trip 🚗 </h3>
            <p>Drivers open the ParkingKarma app as they start their trip.</p>
          </Card>
          <Card>
            <h3>Find a Spot 🎯</h3>
            <p>We guide them to available street parking right in front of your store.</p>
          </Card>
          <Card>
            <h3>View Your Ad 👀 </h3>
            <p>As they are arriving to the spot, drivers instantly view an advertisement for your business.</p>
          </Card>
        </Section>

        <Section>
          <h2>Benefits</h2>
          <Card>
            <h3>Precision Targeting 📍</h3>
            <p>Unlike other apps, we know exactly where drivers are parking - right outside your store. Every parked car is a potential customer.</p>
          </Card>
          <Card>
            <h3>Real-Time Connection 📲</h3>
            <p>Connect in real-time with local shoppers.</p>
          </Card>
        </Section>

        <Section>
          <h2>Become a Partner</h2>
          <Card>
            <h3>Special Invitation 💌</h3>
            <p>For a limited time, we're inviting businesses to partner with us at no cost.</p>
          </Card>
          <Card>
            <h3>Boosted Traffic 🚶‍♂️🚶‍♀️</h3>
            <p>Experience increased foot traffic from parked customers.</p>
          </Card>
        </Section>
      </SectionContainer>

      <CenteredButtonContainer>
        <CTAButton href="https://forms.gle/ndpZTSrsP2e8wZSW6" target='_blank'>Become a partner now</CTAButton>
      </CenteredButtonContainer>
      {/* Rest of the component remains the same */}

      <FreeAdsImg>
        <img src={FreeAds} alt="screenshot example" />

      </FreeAdsImg>

      <Footer style={{ width: "100%" }} />


    </BusinessPageContainer>

  );
}

export default BusinessPage;