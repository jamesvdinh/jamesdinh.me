import React, {useState} from "react";
import styled from "styled-components";
import * as palette from './styles/GlobalStyles'
import { educationData } from "../data/MenuData";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Education = () => {
    const [isActive, setIsActive] = useState(0);
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "images"}}, sort: {name: ASC}) {
                edges {
                    node {
                        id
                        relativePath
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Heading id="education">Education</Heading>
            <EducationContainer>
                <ButtonContainer>
                    {educationData.map((item, index) => 
                        <ButtonFlex key={index}><Button onClick={() => setIsActive(index)} className={isActive === index ? "active" : ""}>{item.title}</Button></ButtonFlex>
                    )}
                </ButtonContainer>
                <ContentContainer>
                    <HeadContainer>
                        {data.allFile.edges.map(({node}) => {
                            if (node.relativePath === educationData[isActive].img) {
                                return <Image key={node.id} className="active"><GatsbyImage style={Thumbnail} image={node.childImageSharp.gatsbyImageData} loading="lazy" alt={educationData[isActive].img} /></Image>
                            }
                            return null; // failsafe for null values
                        })}
                        <TitleContainer>
                            <Title>{educationData[isActive].title}</Title>
                            <Subtitle>{educationData[isActive].subtitle.map((item, index) => 
                                <span key={index}>{item}<br /></span>
                            )}</Subtitle>
                            <Date>{educationData[isActive].date}</Date>
                        </TitleContainer>
                    </HeadContainer>
                    <Description>{educationData[isActive].description.map((item, index) => 
                        <li key={index}>{item}</li>
                    )}</Description>
                </ContentContainer>
            </EducationContainer>
        </>
    )
}

export default Education;

const EducationContainer = styled.section`
    display: flex;
    margin: auto;
    justify-content: center;

    @media (max-width: 500px) {
        flex-flow: row wrap;
    }
`

const Heading = styled.h1`
    color: ${palette.headingColor};
    padding-top: 70px;
`

const ButtonContainer = styled.div`
    border-right: 2px solid #5C527F;
    display: flex;
    flex-flow: column wrap;
    padding-right: 1rem;
    max-width: 200px;

    @media (max-width: 500px) {
        display: inline-flex;
        justify-content: center;
        flex-direction: row;
        border-right: unset;
        border-bottom: 2px solid #5C527F;
        margin-bottom: 1rem;
        padding-right: unset;
        max-width: unset;
    }
`

const ButtonFlex = styled.div`
    line-height: 22px;
    justify-content: right;
    display: flex;
    margin: 4px 0;

    @media (max-width: 500px) {
        justify-content: center;
        max-width: 200px;
        margin: 3px 5px;
    }
`

const Button = styled.button`
    border: none;
    background-color: unset;
    text-align: right;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    align-self: start;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    padding: 5px 7px;
    cursor: pointer;

    @keyframes easeHighlight {
        0% {
            filter: brightness(1.3);
        }
        100% {
            filter: brightness(1);
        }
    }

    &:hover {
        background-color: #786ca520;
    }

    &.active {
        background-color: #786ca540;
    }

    &.active:hover {
        filter: brightness(1.3);
    }

    @media (max-width: 500px) {
        text-align: center;
        background-color: #ae9ee908;
    }
`

const ContentContainer = styled.article`
    max-width: 550px;
    padding: 3px 10px;
    margin-left: 10px;
    text-align: left;
`

const HeadContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleContainer = styled.div`
    margin-left: 10px;
`

const Title = styled.h2`
    line-height: 30px;
    color: ${palette.titleColor};
`

const Subtitle = styled.h3`
    line-height: 20px;
    font-size: 16px;
    color: lightgray;
`

const Date = styled.h4`
    line-height: 25px;
    font-size: 16px;
    color: gray;
`

const Description = styled.ul`
    margin-top: 10px;
    margin-left: 30px;
`

const Image = styled.div`
    display: none;
    height: fit-content;
    width: fit-content;

    &.active {
        display: inline-flex;
    }
`

const Thumbnail = {
    maxWidth: "75px",
    maxHeight: "75px",
    minWidth: "60px",
    minHeight: "60px",
    borderRadius: "3px",
}