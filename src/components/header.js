import React from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import * as palette from "./styles/GlobalStyles"
import LinkIcon from "./linkicon"
import { headerLinks } from "../data/data"

const Header = () => {
  const greeting = "Hi, my name is"
  const titles = [
    "I'm a Software Engineer.",
    "I'm an AI Engineer.",
    "I build intelligent systems.",
  ]

  return (
    <>
      <ParentContainer>
        <Greeting>{greeting}</Greeting>
        <Name>James Dinh.</Name>
        <Title>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={typewriter => {
              typewriter
                .changeDelay(50)
                .changeDeleteSpeed(25)
                .typeString(titles[0])
                .pauseFor(1000)
                .deleteChars(titles[0].length)
                .pauseFor(500)
                .typeString(titles[1])
                .pauseFor(1000)
                .deleteChars(titles[1].length)
                .pauseFor(500)
                .typeString(titles[2])
                .pauseFor(1000)
                .start()
            }}
          ></Typewriter>
        </Title>
        <Description>
          Software Engineer building AI-powered systems. I turn complex
          ideas into reliable, production-ready software from LLM agents
          and MCP integrations to full-stack web applications.
        </Description>
        <HeaderLinks>
          <LinkButton href="/resume" target="_blank" rel="noopener noreferrer">
            Résumé
          </LinkButton>
          {headerLinks.map((item, index) => (
            <IconAnchor href={item.url} target="_blank" key={index}>
              <LinkIcon item={item.name} size={item.size}></LinkIcon>
            </IconAnchor>
          ))}
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
  color: ${palette.accent};
`
const Name = styled.h1`
  display: flex;
  font-size: 70px;
  color: #c1a5ef;
  font-family: Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  line-height: 1.5;
  font-weight: 600;

  @media (max-width: 495px) {
    font-size: 50px;
  }
`

const Title = styled.h2`
  display: flex;
  font-family: Calibre, Inter, "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  font-size: 50px;
  min-height: 60.8px;
  font-weight: 600;

  @media (max-width: 495px) {
    font-size: 30px;
  }
`

const Description = styled.p`
  margin: 30px 0 10px;
  font-size: 20px;
  max-width: 610px;
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
  border-radius: 5px;
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
