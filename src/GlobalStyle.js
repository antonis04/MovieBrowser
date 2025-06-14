import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
            box-sizing: border-box;
        }

        *, ::after, ::before {
            box-sizing: inherit;
        }

        body {
            background-color: ${({ theme }) => theme.color.lightgrey};
            color: ${({ theme }) => theme.color.black};
            font-family: 'Poppins', sans-serif;
            font-optical-sizing: auto;     
        } 
`;