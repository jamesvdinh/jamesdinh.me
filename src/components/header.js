import React from "react";
import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <ParentContainer>
                <Greeting>Hi, tôi tên là</Greeting>
                <Name>James Dinh.</Name>
                <Title>I'm a Computer Science Student.</Title>
                <Description>My current focus is on academics, but on the side, I love to build websites, practice piano, and play chess!</Description>
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

const Greeting = styled.div`
    display: flex;
    font-size: 20px;
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