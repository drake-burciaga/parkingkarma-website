import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="discover" onClick={toggle}>
                    The Problem
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                    Our Solution
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                    Our Customers
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                    Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to={{ pathname: "https://forms.gle/UUTEHRzAmLPiVcgh7" }} target="_blank" >Join Us</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
