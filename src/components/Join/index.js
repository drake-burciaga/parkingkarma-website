import React from 'react';
import { Button } from '../ButtonElements';
import { JoinContainer, JoinWrapper, JoinRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './JoinElements';


const JoinSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <JoinContainer lightBg={lightBg} id={id}>
                <JoinWrapper>
                    <JoinRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button
                                type="button"
                                onClick={(e) => {
                                e.preventDefault();
                                window.open('https://forms.gle/UUTEHRzAmLPiVcgh7');
                                }}
                            >Join Us</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </JoinRow>
                </JoinWrapper>
            </JoinContainer>  
        </>
    );
};

export default JoinSection;
