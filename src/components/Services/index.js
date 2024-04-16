import React from 'react'
import styled from 'styled-components';
import directionsImage from "../../images/directions.svg";
import destinationImage from "../../images/destination.svg";
import parkingImage from "../../images/parking.svg";
// import Icon3 from '../../images/svg-3.svg'
// import Icon4 from '../../images/svg-4.svg'
// import Icon5 from '../../images/svg-5.svg'
// import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
// import logo from "../../images/tschijpm.svg"


const BoxContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 40px;
flex-direction: column;
`;

const Box = styled.div`
flex: 1;
margin: 10px;
padding: 20px;
background-color: #f9f9f9;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
border-radius: 5px;
text-align: center;
width: 100%;
height: 200px;

@media (min-width: 768px) {
  width: calc(33.33% - 20px);
height: 150px;
}
`;

const BoxTitle = styled.h3`
font-size: 24px;
margin-bottom: 10px;
`;

const BoxText = styled.p`
font-size: 16px;
`;

// const Image = styled.img`
// max-width: 100%;
// max-height: 100%;
// width: auto;
// height: auto;
// margin-top: 10px;
// margin-bottom: 10px;
// `;
const Image = styled.img`
  width: 90%;  // Changed from 'auto'
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
// height: 10%;
`;




const Services = () => {
  return (
    <>

      <BoxContainer>
        <h1>Here's how it works</h1>
        <br></br>
        <Box>
          <BoxTitle>🔎🗺️</BoxTitle>
          <BoxTitle>Step 1: Search destination</BoxTitle>
          <BoxText>Input your destination on the app</BoxText>
          <ImageContainer>
            <Image src={destinationImage} alt="Search Destination" />
          </ImageContainer>
        </Box>
        <Box>
          <BoxTitle>📍</BoxTitle>
          <BoxTitle>Step 2: Click on a parking space</BoxTitle>
          <BoxText>Choose which parking space is best for you</BoxText>
          <ImageContainer>
            <Image src={parkingImage} alt="Click on a Parking Space" />
          </ImageContainer>
        </Box>
        <Box>
          <BoxTitle>🚙💨</BoxTitle>
          <BoxTitle>Step 3: Get Directions</BoxTitle>
          <BoxText>Click "Go" and drive to the parking spot</BoxText>
          <ImageContainer>
            <Image src={directionsImage} alt="Get Directions" />
          </ImageContainer>
        </Box>
        <Box>
          <BoxTitle>👍 or 👎</BoxTitle>
          <BoxTitle>Step 4: Leave feedback</BoxTitle>
          <BoxText>Let us know, did you find a space?</BoxText>
        </Box>
      </BoxContainer>
      <div style={{ paddingBottom: "5rem" }}>

      </div >
    </>
  );
};

export default Services;
