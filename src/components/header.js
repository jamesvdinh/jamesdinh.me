import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const Header = () => {
    const [greeting, setGreeting] = useState("Hi, my name is");
    // const greetingList = ["Hi, my name is", "Chào, tôi tên là", "Konichiwa, watashi no namae wa"];

    // useEffect(() => {
    //     for (let i = 0; i < greetingList.length; i++) {
    //         setDelay(i);
    //     }
    //     function setDelay(i) {
    //         setTimeout(() => {
    //             setGreeting(greetingList[i]);
    //         }, 500); // animation timing offset
    //         // if (i === greetingList.length) { i = 0; }
    //     }
    // })

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

const Greeting = styled.h3`
    font-size: 22px;
    color: #9375ff;
`
const Name = styled.h1`
    display: flex;
    font-size: 70px;
    color: #c1a5ef;
    font-family: Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
    line-height: 1.5;
    font-weight: bold;

    @media (max-width: 495px) {
        font-size: 50px;
    }
`

const Title = styled.h2`
    display: flex;
    font-family: Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
    font-size: 50px;
    font-weight: bold;
    
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