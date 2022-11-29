import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`   
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        height: 100vh;
        width: 100vw;
    }
    body{
        color: #fff;
        font-family: 'Verdana', 'Montserrat',sans-serif;
        font-size: 1rem;
        margin:0 2rem;
    }
`;

export default memo(GlobalStyle);
