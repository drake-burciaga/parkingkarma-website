import React from 'react';
import styled from 'styled-components';
import { Button } from '../ButtonElements';
import { ReactComponent as NavigationIcon } from '../../images/svg-1.svg';
import { ReactComponent as RealTimeIcon } from '../../images/svg-1.svg';
import { ReactComponent as DirectionsIcon } from '../../images/svg-1.svg';

// Styled components
const PageContainer = styled.div`
  padding: 40px 20px;
  background: linear-gradient(to top, #f7f7f7, #ffffff);
  font-family: 'Arial', sans-serif;
`;

const FeatureBlock = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 3rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #34495e;
  font-size: 2.3rem;
  margin-bottom: 20px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const IconWrapper = styled.div`
  height: 100px;
  margin: 20px auto;
`;

const NavigationAppPage = () => {
    return (
        <PageContainer>
            <FeatureBlock>
                <IconWrapper>
                    {/* <RealTimeIcon style={{ width: '80px', height: '80px' }} /> */}

                </IconWrapper>
                <Title>What is this app?</Title>
                <Description>ParkingKarma is a navigation app that's like Google Maps but for street parking.</Description>
            </FeatureBlock>

            <FeatureBlock>
                <IconWrapper>
                    {/* <DirectionsIcon style={{ width: '80px', height: '80px' }} /> */}
                </IconWrapper>
                <Title>What does it do?</Title>
                <Description>We detect available street parking spaces in real-time and provide turn-by-turn directions to drivers.</Description>
            </FeatureBlock>

            <FeatureBlock>
                <IconWrapper>
                    {/* <NavigationIcon style={{ width: '80px', height: '80px' }} /> */}
                </IconWrapper>
                <Title>Who is it meant for?</Title>
                <Description>
                    Do you drive in SF? If yes, you need this app. We currently cover 12 streets in North Beach.</Description>

            </FeatureBlock>


            <Button href="https://forms.gle/NUTsZhjJ8BoSaZzy7" target="_blank" primary='true' dark='true'>
                Download the App
            </Button>
        </PageContainer >
    );
};

export default NavigationAppPage;
