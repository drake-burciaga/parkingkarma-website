import styled from 'styled-components';

export const BusinessPageContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 200px; /* adjust as needed */
`;

export const HighlightBubble = styled.div`
    background-color: #f0f0f0; /* pick a color */
    border-radius: 50px;
    padding: 10px 20px;
    margin: 20px 0;
    text-align: center;
`;

export const MainHeader = styled.h1`
    font-size: 2rem;
    margin-bottom: 10px;
`;

export const SubHeader = styled.p`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

export const CTAButton = styled.a`
    background-color: blue; /* pick a color */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    margin: 20px 0;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #000;
    }
`;

export const Section = styled.section`
    margin: 20px 0;
`;

export const SectionHeader = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 15px;
`;

export const ListItem = styled.li`
    margin: 5px 0;
`;

export const Footer = styled.footer`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BackedBy = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const LogoImage = styled.img`
    width: 100px; /* adjust as needed */
    margin: 0 10px;
`;

export const Contact = styled.div`
    margin-top: 20px;
`;
