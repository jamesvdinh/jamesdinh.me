import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    * {
        font-weight: normal;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif;
        background-color: #261C2C;
        scroll-behavior: smooth;
        color: #8892b0;
    }

    section {
        padding: 30px 20px 100px;
        max-width: 1500px;
        min-width: 200px;
    }
`

export const bgColor = '#261C2C';
export const headingColor = '#6E85B2';
export const titleColor = '#b399dc';