import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
    box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.color.whisper};
        color: ${({ theme }) => theme.color.black};
        padding: 16px;
        font-family: 'Poppins', sans-serif;
    }
`;
