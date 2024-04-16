import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c; // This sets the background color of the whole container
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh; // Using full viewport height for responsiveness
    position: relative;
    z-index: 1; // Base level z-index
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1; // This ensures it is behind the content but part of the background grouping
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 100.1); // Dark overlay directly on the video background
        z-index: 2; // Above the video but below the content
    }
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34; // In case the video loads slowly
    z-index: 1; // Ensures video stays at the bottom of the stacking context
`;

export const HeroContent = styled.div`
    z-index: 3; // Above the overlay and video to ensure visibility and interaction
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff; // Ensures text is white
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 9.9); // Adds shadow to text for better visibility
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 100px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        font-size: 80px;
    }

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;


export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 50px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size:40px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 60px;
    text-align: center;
    max-width: 1000px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

