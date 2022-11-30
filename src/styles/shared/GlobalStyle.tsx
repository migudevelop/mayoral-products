import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import { styleHelpers } from 'utils';

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
        ${styleHelpers.MEDIAQUERIES.mobile}{
            margin:0 10rem;            
        }
        ${styleHelpers.MEDIAQUERIES.desktop}{
            margin:0 20rem;            
        }
    }
`;

export default memo(GlobalStyle);
