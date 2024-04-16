import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import FuckingParking from "./../components/FuckParking"
import StopWasting from "./../components/StopWastingTime"
import SecondPage from '../components/AboutUs';
// import InfoSection from '../components/InfoSection';
// import { homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
// import JoinSection from '../components/Join';
// import AISection from '../components/AISection';
// import { homeObjOne } from '../components/AISection/Data';
import Screenshots from "./../components/Screenshots/screenshots"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <Navbar toggle={toggle} />
            <HeroSection />
            <StopWasting />
            <SecondPage />

            <Services />
            <Screenshots />
            {/* <InfoSection {...homeObjTwo} /> */}
            {/* <AISection {...homeObjOne} /> */}
            {/* <JoinSection {...homeObjThree} /> */}
            <FuckingParking />
            <Footer />
        </>
    );
};

export default Home;
