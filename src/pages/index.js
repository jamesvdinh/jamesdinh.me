import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { HeroUIProvider } from "@heroui/react"

const IndexPage = () => (
  <HeroUIProvider>
    <Layout />
  </HeroUIProvider>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <>
    <Seo title="Full Stack Data Engineer" />
    <script
      defer=""
      data-domain="jamesdinh.me"
      src="https://plausible.jamesdinh.me/js/script.outbound-links.js"
    ></script>
  </>
)

export default IndexPage
