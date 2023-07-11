import React, { useState } from "react";
import styled from "styled-components";
import * as palette from './styles/GlobalStyles';
import { projectData } from "../data/MenuData";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GatsbyImage } from "gatsby-plugin-image";
import './styles/styles.scss'
import { graphql, useStaticQuery } from "gatsby";
import LinkIcon from "./linkicon";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {sourceInstanceName: {eq: "images"}}, sort: {name: ASC}) {
                edges {
                    node {
                        id
                        relativePath
                        childImageSharp {
                            gatsbyImageData(height: 200)
                        }
                    }
                }
            }
        }
    `)

    const showMenu = () => {
        if (isOpen) { setIsOpen(false) }
        else { setIsOpen(true); }
    }
    
    return (
        <>
            <Heading id="projects">Projects</Heading>
            <ProjectContainer>
                {projectData.map((item, index) => 
                    <ProjectEntry key={index} className={[(index > 5) && 'excess', (index > 5 && isOpen) && 'open'].filter(e => !!e).join(' ')}>
                        <Title><TitleAnchor href={item.url} target="_blank">{item.title}</TitleAnchor></Title>
                        <Subtitle>{item.subtitle}</Subtitle>
                        <TagContainer>{item.tags.map((item, index) => 
                            <Tag key={index}>{item}</Tag>
                        )}</TagContainer>
                        <SlideShow aria-label="Slideshow Images"
                            options={{
                                rewind: true,
                                height: 200,
                                lazyLoad: true,
                                arrows: false,
                            }}
                        >
                            {data.allFile.edges.map(({node}) => {
                                for (const path of item.img) {
                                    if (node.relativePath === path) {
                                        return <SplideSlide key={node.id}><GatsbyImage style={SlideImg} image={node.childImageSharp.gatsbyImageData} alt={path} /></SplideSlide>
                                    }
                                }
                                return null; // failsafe for null values
                            })}
                        </SlideShow>
                        <Description>{item.description}</Description>
                        <LinkList>{item.link.map((item, index) =>
                            <IconAnchor href={item.url} target="_blank" key={index}>
                                <LinkIcon item={item.name}></LinkIcon>
                            </IconAnchor>
                        )}
                        </LinkList>
                    </ProjectEntry>
                )}
            </ProjectContainer>
            <MoreButton onClick={showMenu}>Show {isOpen ? "Less" : "More"}</MoreButton>
        </>
    )
}

export default Projects;

const Heading = styled.h1`
    color: ${palette.headingColor};
    padding-top: 70px;
    font-weight: normal;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 30px auto;
    padding: 0 15px;
    max-width: 1230px;
`

const ProjectEntry = styled.div`
    background-color: #322634;
    padding: 20px 10px;
    min-width: 360px;
    max-width: 380px;
    border-radius: 3px;
    margin: 10px;

    &.excess {
        display: none;

        /* $var: 5;

        @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
            top: -#{$var}px;
            $var: $var * 0.5s;
            }
        } */
    }

    &.open {
        display: block;
        animation: fade-in 0.3s ease;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 100;
            transform: translateY(0px);
        }
    }
`

const TitleAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;
    background: linear-gradient(to right, rgba(144, 83, 162, 1), rgba(144, 83, 162, 1)), linear-gradient(to right, rgba(255, 95, 250, 1), rgba(255, 95, 250, 1));
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
    color: ${palette.titleColor};

    &:hover {
        background-size: 0 0.1em, 100% 0.1em;
    }
`

const Title = styled.h2`
    font-size: 24px;
    line-height: 35px;
    padding: 0 5px;
    font-weight: normal;
`

const Subtitle = styled.h3`
    font-size: 16px;
    line-height: 25px;
    font-weight: normal;
`

const TagContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 5px 10px 10px;
`

const Tag = styled.div`
    font-size: 14px;
    padding: 3px 7px;
    border-radius: 25px;
    margin: 3px 5px;
    width: max-content;
    background-color: #5c527f4f;
    transition: all 0.5s ease-out;

    &:hover {
        background-color: #5c527f81;
    }
`

const SlideShow = styled(Splide)`
    cursor: grab;
    
    &:active {
        cursor: grabbing;
    }
`

const SlideImg = {
    minHeight: "200px",
}

const Description = styled.div`
    padding: 10px;
`

const LinkList = styled.div`
    display: flex;
    justify-content: center;
    margin: 3px auto;
`

const IconAnchor = styled.a`
    margin: 3px 15px;
    color: ${palette.titleColor};
    transition: all 0.3s;

    &:hover {
        filter: brightness(1.2);
    }
`

const MoreButton = styled.button`
    border: none;
    background-color: unset;
    text-align: right;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    padding: 10px 14px;
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