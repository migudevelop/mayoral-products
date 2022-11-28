import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        color: #fff;
        font-family: 'Verdana', 'Montserrat', sans-serif !important;
        margin: 0;
    }
`;

export default memo(GlobalStyle);
