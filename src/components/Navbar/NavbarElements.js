import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
        justify-content: space-around; // Distribute the space a bit more evenly
        padding: 0 10px;  // Reduce the padding to allow more space
    }
`;



export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        margin-right: 20px;  
        font-size: 1.2rem;  // Reduced the font-size for mobile devices
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #fff;
    }
`;
export const Spacer = styled.div`
    flex: 1;

    @media screen and (min-width: 769px) {
        // display: none;
    }
`;
export const NavBtnMobile = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FF5A5A;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px; 
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        background-color: #fff;
        color: #000;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;  // Reduced the font-size for mobile devices
        padding: 8px 20px;  // Slightly reduced the padding for mobile devices
    }
`;