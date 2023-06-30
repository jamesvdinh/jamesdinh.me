/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar"
import { GlobalStyle } from "./styles/GlobalStyles"
import Header from "./header"
import Education from "./education"
import styled from "styled-components"
import Experience from "./experience"
import Projects from "./projects"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle />
      <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Header />
      <MainContainer>
        <Education />
        <Experience />
        <Projects />
      </MainContainer>
    </>
  )
}

export default Layout

const MainContainer = styled.main`
  width: 100%;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: auto;
  padding-bottom: 70px;
`
