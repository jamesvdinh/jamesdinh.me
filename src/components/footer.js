import React, {useEffect} from "react";
import styled from "styled-components";
import Resume from "../../static/Resume.pdf";

const Footer = () => {
    useEffect(() => {
        fetch("https://plausible.io/api/v1/stats/realtime/visitors?site_id=jamesdinh.me", {
            method: "GET",
            headers: {
                "mode": "cors"
            }
        })
        .then((res) => {
            res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });
    });

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