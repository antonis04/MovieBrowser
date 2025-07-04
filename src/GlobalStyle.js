import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
        margin: 0;
        padding: 0;
        line-height: 1.5;
        overflow-x: hidden;
    }

    #root {
        min-height: 100vh;
        overflow-x: hidden;
    }

    * {
        margin: 0;
        padding: 0;
    }

    button {
        font-family: inherit;
    }

    input {
        font-family: inherit;
    }
`;
