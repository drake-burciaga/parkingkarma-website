import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements';

import { ReactComponent as LocationMarker } from "../../images/location.svg";
import styled from "styled-components";


const LocationMarkerIcon = styled(LocationMarker)`
  display: inline-block;
  vertical-align: middle;
  transform: translateY(-15%);
  margin-right: -29px;
  margin-left: -20px;
  width: 120px; /* Adjust the size as needed */
  height: 120px; /* Adjust the size as needed */
`;


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    // const videoRef = useRef(null);

    // useEffect(() => {
    //     const promise = videoRef.current.play();

    //     if (promise !== undefined) {
    //         promise.then(_ => {
    //             // Autoplay started!
    //         }).catch(error => {
    //             // Autoplay was prevented.
    //             // Show a "Play" button so that user can start playback.
    //         });
    //     }
    // }, []);

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg
                    autoPlay={true}
                    loop={true}
                    controls={false}
                    playsInline
                    muted
                    src={"https://storage.googleapis.com/background-video-parkingkarma-website/FindParking_no_sound.mp4"} type='video/mp4' />
                {/* <VideoBg
                    autoPlay={true}
                    loop={true}
                    controls={false}
                    playsInline
                    muted src={BackgroundVideo} type='video/mp4' /> */}
                {/* <VideoBg loop muted playsInline ref={videoRef} src={BackgroundVideo} type='video/mp4' /> */}

            </HeroBg>
            <HeroContent>
                <HeroH1>
                    I <br></br>F<LocationMarkerIcon />CKING<br></br> HATE PARKING
                </HeroH1>
                <HeroP>
                    Find parking instantly in SF
                </HeroP>
                <HeroP>
                    🌉
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        href="https://forms.gle/NUTsZhjJ8BoSaZzy7"
                        target="_blank"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={hover ? undefined : 'true'}
                        dark={hover ? undefined : 'true'}
                    >
                        Download the app
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer >
    );
};

export default HeroSection;
