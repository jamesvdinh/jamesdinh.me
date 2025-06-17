import React, { useState } from "react"
import styled from "styled-components"
import * as palette from "./styles/GlobalStyles"
import { experienceData } from "../data/data"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { LiaQuoteLeftSolid, LiaQuoteRightSolid } from "react-icons/lia";


const Experience = () => {
  const [isActive, setIsActive] = useState(0)
  const [showQuote, setShowQuote] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "images" } }
        sort: { name: ASC }
      ) {
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
      <Heading id="experience">Experience</Heading>
      <ExperienceContainer>
        <ButtonContainer>
          {experienceData.map((item, index) => (
            <ButtonFlex
              key={index}
              className={isActive === index ? "active" : ""}
            >
              <Button
                onClick={() => setIsActive(index)}
                className={isActive === index ? "active" : ""}
              >
                {item.title}
              </Button>
            </ButtonFlex>
          ))}
        </ButtonContainer>
        <ContentContainer>
          <HeadContainer>
            {data.allFile.edges.map(({ node }) => {
              if (node.relativePath === experienceData[isActive].img) {
                return (
                  <Image key={node.id} className="active">
                    <GatsbyImage
                      style={Thumbnail}
                      image={node.childImageSharp.gatsbyImageData}
                      loading="lazy"
                      alt={experienceData[isActive].img}
                    />
                  </Image>
                )
              }
              return null // failsafe for null values
            })}
            <TitleContainer>
              <Title>{experienceData[isActive].title}</Title>
              <Subtitle>{experienceData[isActive].subtitle}</Subtitle>
              <Date>{experienceData[isActive].date}</Date>
            </TitleContainer>
          </HeadContainer>
          <Description>
            {experienceData[isActive].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Description>
          {experienceData[isActive].quote && (
            <QuoteContainer>
              <LiaQuoteLeftSolid size={20} />
              <QuoteText className={showQuote ? 'shown': ''}>
                {experienceData[isActive].quote.text.map((item, index) => (
                  <QtPara key={index}>{item}</QtPara>
                ))}
              </QuoteText>
              <QuoteTextBtn
                onClick={() => setShowQuote(!showQuote)}
              >
                {showQuote ? 'Show Less' : 'Show more'}
              </QuoteTextBtn>
              <LiaQuoteRightSolid style={rightQuote} size={20} />
              <QuoteAuthor>- {experienceData[isActive].quote.author}, {experienceData[isActive].quote.title}</QuoteAuthor>
              <QuoteAttr>{experienceData[isActive].quote.attr}</QuoteAttr>
            </QuoteContainer>
          )}
          <LinkContainer>
            {experienceData[isActive].link.map((item, index) => (
              <LinkButton href={item.url} key={index} target="_blank">
                {item.name}
              </LinkButton>
            ))}
          </LinkContainer>
        </ContentContainer>
      </ExperienceContainer>
    </>
  )
}

export default Experience

const ExperienceContainer = styled.section`
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
  font-weight: normal;
`

const ButtonContainer = styled.div`
  border-right: 2px solid #5c527f;
  display: flex;
  flex-flow: column wrap;
  max-width: 200px;
  min-width: 150px;

  @media (max-width: 500px) {
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 2px solid #5c527f;
    margin-bottom: 1rem;
    border-right: unset;
    padding-right: unset;
    max-width: unset;
    min-width: unset;
  }
`

const ButtonFlex = styled.div`
  line-height: 22px;
  justify-content: right;
  display: flex;
  margin: 4px 0;
  position: relative;
  padding-right: 1rem;
  transition: all 0.05s ease;
  right: -1.5px;

  &.active {
    border-right: 2px solid ${palette.accent};
  }

  @media (max-width: 500px) {
    justify-content: center;
    min-width: fit-content;
    margin: 3px 5px;
    padding-right: unset;
    right: unset;

    &.active {
      border-right: none;
      bottom: -1.5px;
      border-bottom: 2px solid ${palette.accent};
    }
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
  min-width: fit-content;
  min-height: 35px;

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
    min-width: unset;
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
  font-weight: normal;
`

const Subtitle = styled.h3`
  line-height: 20px;
  font-size: 16px;
  color: lightgray;
  font-weight: normal;
`

const Date = styled.h4`
  line-height: 25px;
  font-size: 16px;
  color: gray;
  font-weight: normal;
`

const Description = styled.ul`
  margin: 10px 0 15px 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 3px;
`

const QuoteContainer = styled.div`
  margin: 9px;
  padding: 5px 20px;
  display: flex;
  flex-flow: column nowrap;
  border-left: 2px solid gray;
  border-radius: 4px;
  background-color:rgba(93, 83, 130, 0.13);
`

const QuoteAuthor = styled.h2`
  font-size: 14px;
  font-weight: normal;
`

const QuoteText = styled.div`
  flex-flow: column nowrap;
  gap: 10px;
  color: ${palette.subtitleColor};
  max-height: 60px;
  overflow-y: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &.shown {
    max-height: unset;
    overflow-y: auto;
    -webkit-line-clamp: unset;
  }
`

const QtPara = styled.p`
  font-size: 14px;
`

const QuoteTextBtn = styled.button`
  padding: 5px 10px;
  margin: auto;
  width: fit-content;
  border-radius: 5px;
  border: unset;
  background-color: transparent;
  color: ${palette.titleColor};
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #cbbff5;
  }
`

const rightQuote = {
  marginLeft: "auto",
}

const QuoteAttr = styled.p`
  margin: 5px 0;
  font-size: 10px;
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

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const LinkButton = styled.a`
  text-decoration: none;
  text-align: right;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  padding: 7px 10px;
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
