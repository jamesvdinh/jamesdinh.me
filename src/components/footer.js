import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterText>Built from scratch by James Dinh</FooterText>
                <FooterText>Tools used: React, Gatsby</FooterText>
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