import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as YinYangSign } from "../images/yin-yang-solid.svg"
// import { ReactComponent as LocationMarker } from "../images/location.svg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`;

const YinYangContainer = styled.div`
  width: 400px; /* Adjust the size as needed */
  height: 400px; /* Adjust the size as needed */
  animation: spin 5s linear infinite; /* Add the spinning animation */
  
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ParkingKarmaText = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 2rem; /* Adjust the margin as needed */
`;

// const StyledLocationMarker = styled(LocationMarker)`
//   width: 1.5em; /* Adjust the size as needed */
//   height: 1.5em; /* Adjust the size as needed */
//   vertical-align: middle;
// `;

const SubText = styled.p`
  font-size: 24px;
  font-weight: 400; 
  margin-top: 10px;
  line-height: 1.5;
`;

const FuckParking = () => {
  const container = useRef(null);

  useEffect(() => {
    const spinContainer = container.current.querySelector(".spin-container");
    gsap.to(spinContainer, {
      rotation: "360",
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <Section ref={container}>
      <YinYangContainer className="spin-container" style={{ zIndex: 10 }}>
        <YinYangSign className="svg-class" />
      </YinYangContainer>
      <TextContainer>
        <ParkingKarmaText>ParkingKarma</ParkingKarmaText>
        <SubText>
          [ par-king ] [ kahr-muh ] | noun
          <br />
          The uncanny ability to find an open parking space in a desirable location{" "}
          <i>quickly</i>
          <br />
          - urban dictionary
        </SubText>
      </TextContainer>
    </Section>
  );
};

export default FuckParking;
