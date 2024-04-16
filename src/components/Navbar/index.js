import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink, NavMiddle, NavBtnMobile, Spacer } from './NavbarElements';
import parkingkarmalogo from "../../images/yin-yang-solid.svg"
import styled from 'styled-components';


const Logo = styled.img`
  width: 30px;
`;

const buttonStyles = {
    borderRadius: '50px',
    background: '#FF5A5A',
    whiteSpace: 'nowrap',
    padding: '10px 22px',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none'
};

const buttonHoverStyles = {
    ...buttonStyles,
    background: '#fff',
    color: '#000'
};

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const [isButtonHovered, setIsButtonHovered] = useState(false);


    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>


                        <NavLogo to='/' onClick={toggleHome}>
                            <Logo src={parkingkarmalogo} alt="ParkingKarma Logo" />
                            ParkingKarma
                        </NavLogo>

                        {/* <NavBtn>
                            <NavBtnLink to='/business'>For Businesses</NavBtnLink>
                        </NavBtn> */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
