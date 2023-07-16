import React from "react";
import styled from "styled-components";
import Resume from "../data/Resume.pdf";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterText>Built from scratch by <a className="proper" href={Resume} target="_blank" rel="noreferrer">James Dinh</a></FooterText>
                <FooterText>Tools used: React, Gatsby.js</FooterText>
            </FooterContainer>
        </>
    )
}

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto 20px;
    justify-content: center;
    text-align: center;
    padding: 20px 10px;
`

const FooterText = styled.p`
    font-size: 16px;
    line-height: 25px;
`