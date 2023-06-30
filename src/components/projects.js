import React from "react";
import styled from "styled-components";
import * as palette from './styles/GlobalStyles';
import { projectData } from "../data/MenuData";

const Projects = () => {
    return (
        <>
            <Heading id="experience">Projects</Heading>
            <ProjectContainer>
                <ProjectEntry>
                    <Title>ASL Hand Recognition App</Title>
                    <Date>Jan - May 2023</Date>
                    <TagContainer>{projectData[0].tags.map((item, index) => 
                        <Tag key={index}>{item}</Tag>
                    )}</TagContainer>
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
    max-width: 400px;
`

const ProjectEntry = styled.div`
    background-color: #322634;
    padding: 10px;
    border-radius: 3px;
`

const Title = styled.h2`
    color: ${palette.titleColor};
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
    margin: 5px auto;
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