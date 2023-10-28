import React from "react";
import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import * as palette from './styles/GlobalStyles';
import LinkIcon from "./linkicon";
import { headerLinks } from "../data/MenuData";
import Resume from "../../static/Resume.pdf";

const Header = () => {
    const greeting = "Hi, my name is";

    return (
        <>
            <ParentContainer>
                <Greeting>{greeting}</Greeting>
                <Name>James Dinh.</Name>
                <Title><Typewriter
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(50)
                        .changeDeleteSpeed(25)
                        .typeString("I'm a Computer Science Student.")
                        .pauseFor(1000)
                        .deleteChars(25)
                        .pauseFor(500)
                        .typeString("Web Developer.")
                        .pauseFor(1000)
                        .deleteChars(14)
                        .pauseFor(500)
                        .typeString("Hackathon Director.")
                        .pauseFor(1000)
                        .start();
                }}></Typewriter></Title>
                <Description>When I'm not focused on schoolwork, you can find me building websites, practicing piano, or playing chess!</Description>
                <HeaderLinks>
                    <LinkButton href={Resume} target="_blank" rel="noopener noreferrer">Résumé</LinkButton>
                    {headerLinks.map ((item, index) => 
                        <IconAnchor href={item.url} target="_blank" key={index}>
                            <LinkIcon item={item.name} size={item.size}></LinkIcon>
                        </IconAnchor>
                    )}
                </HeaderLinks>
            </ParentContainer>
        </>
    )
}

export default Header

const ParentContainer = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    position: relative;
    margin: auto;
    padding: 0 30px;
    max-width: 1200px;
`

const Greeting = styled.p`
    font-size: 22px;
    color: #9375ff;
`
const Name = styled.h1`
    display: flex;
    font-size: 70px;
    color: #c1a5ef;
    font-family: Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
    line-height: 1.5;

    @media (max-width: 495px) {
        font-size: 50px;
    }
`

const Title = styled.h2`
    display: flex;
    font-family: Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
    font-size: 50px;
    min-height: 60.8px;
    
    @media (max-width: 495px) {
        font-size: 30px;
    }
`

const Description = styled.p`
    margin: 30px 0 10px;
    font-size: 20px;
    max-width: 500px;
    line-height: 1.3;
`

const HeaderLinks = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 10px 0;
    align-items: center;
`

const LinkButton = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    border-radius: 20px;
    transition: all 0.3s ease-out;
    padding: 7px 10px;
    margin-right: 10px;
    background-color: #ae9ee908;
    color: ${palette.titleColor};
    border: 1px solid ${palette.titleColor};
    cursor: pointer;

    &:hover {
        border: 1px dashed #cbbff5;
        color: #cbbff5;
        background-color: #ae9ee91a;
    }
`

const IconAnchor = styled.a`
    margin: 3px 10px;
    color: ${palette.titleColor};
    transition: all 0.3s;
    display: flex;
    align-items: center;

    &:hover {
        filter: brightness(1.3);
    }
`