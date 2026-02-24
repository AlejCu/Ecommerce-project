import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Libre Franklin", sans-serif;
        list-style: none;
        text-decoration: none;
        color: inherit;
        border: none;
        outline: none;
        font-size: 16px;
        scroll-behavior: smooth;
    }
`;
