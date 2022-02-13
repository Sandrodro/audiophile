import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;  
    }

    body {
        font-family: "Manrope", sans-serif;
        font-weight: bold;
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .overline {
        font-size: 14px;
        line-height: 25px;
        letter-spacing: 10px;
        opacity: 50%;
        font-weight: 400;
    }

    .productHeadline {
        font-size: 56px;
        letter-spacing: 2px;
        line-height: 58px;
    }

    .productHeadlineMedium {
        font-size: 28px;
        letter-spacing: 2px;
    }

    .body {
        font-size: 15px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0px;
        opacity: 75%;
        height
    }

    .productTitle {
        font-size: 18px;
        letter-spacing: 1.3px;
    }

    .shop {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;
export default GlobalStyle;
