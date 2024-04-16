import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled component for the main container
const Container = styled.div`
  text-align: center;
  // margin-top: 50px;
  background-color: #000; // Black background
  padding: 20px 0;
  min-height:20vh; // Ensures the container fills the viewport height
  color: #fff; // White text color for all text within Container
`;

// Styled component for the heading
const Heading = styled.h1`
  font-size: 42px; // Increased font size
  margin-bottom: 20px; // Spacing below the heading
`;

// Styled component for the additional message
const AdditionalMessage = styled.h1`
  font-size: 28px; // Increased font size for better readability
  margin-top: 20px;
`;

function App() {
  const options = [
    'dinner reservation',
    "home after work",
    'catfish Tinder date',
    'BBL appointment',
    'tattoo removal appointment',
    'terrible tanning appointment',
    'gym you barely go to',
    'job that you hate',
    'job that you love',
    'second set of wife and kids',
    'in laws that you hate',
    "therapist that doesn't listen",
    'breakup lunch',
    "hair salon appoinment",
    'sneaky link',
    'lunch reservation',
    'divorce settlement',
    'church you only go to once a quarter',
    "kid's boring practice",
    'custody hearing',
    'VC meeting',
    "first hinge date",
    "doctor's appoinment",
    "cult meeting",
    'botox injection',
    "overpriced grocery store",
    "anniversary date",
    "friend's birthday party",
    "movie date",
    "apartment showing",
    "loveless toxic relationship"
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 3500); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, [options.length]);

  useEffect(() => {
    setSelectedOption(options[index]);
  }, [index, options]);

  return (
    <Container>
      <Heading></Heading>
      <Heading><div></div></Heading>

      <Heading>Stop wasting time looking for parking.</Heading>
      <AdditionalMessage>
        Get to your <span style={{ color: '#FF5A5A', fontWeight: 'bold' }}>{selectedOption}</span> faster.
      </AdditionalMessage>
    </Container>
  );
}

export default App;
