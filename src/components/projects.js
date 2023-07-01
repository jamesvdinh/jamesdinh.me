import React from "react";
import styled from "styled-components";
import * as palette from './styles/GlobalStyles';
import { projectData } from "../data/MenuData";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GatsbyImage } from "gatsby-plugin-image";
import './styles/styles.scss'
import { graphql, useStaticQuery } from "gatsby";

const Projects = () => {
    const project1_data = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: {eq: "project1"}}, sort: {name: ASC}) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                            )
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <>
            <Heading id="experience">Projects</Heading>
            <ProjectContainer>
                <ProjectEntry>
                    <Title><TitleAnchor href={projectData[0].url} target="_blank">{projectData[0].title}</TitleAnchor></Title>
                    <Date>{projectData[0].date}</Date>
                    <TagContainer>{projectData[0].tags.map((item, index) => 
                        <Tag key={index}>{item}</Tag>
                    )}</TagContainer>
                    <SlideShow aria-label="Slideshow Images"
                        options={{
                            rewind: true,
                            height: 200,
                            lazyLoad: true,
                        }}
                    >
                    {project1_data.allFile.edges.map(({node}) => {
                        return <SplideSlide key={node.index}><GatsbyImage style={SlideImg} image={node.childImageSharp.gatsbyImageData} alt="" /></SplideSlide>
                    })}
                    </SlideShow>
                    <Description>{projectData[0].description}</Description>
                    <LinkList>{projectData[0].link.map((item, index) =>
                        <LinkIcon href={item.url} key={index}>{item.name}</LinkIcon>
                    )}
                    </LinkList>
                </ProjectEntry>
            </ProjectContainer>
        </>
    )
}

export default Projects;

const Heading = styled.h1`
    color: ${palette.headingColor};
`

const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    max-width: 430px;
    padding: 0 15px;
`

const ProjectEntry = styled.div`
    background-color: #322634;
    padding: 20px 10px;
    border-radius: 3px;
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
`

const Date = styled.h3`
    font-size: 16px;
    line-height: 25px;
`

const TagContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 5px auto 10px;
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
`

const LinkIcon = styled.a`
    margin: 3px 5px;
`