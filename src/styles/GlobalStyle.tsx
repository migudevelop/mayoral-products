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

    header, main{
        margin: 0 3rem;
    }
`;

export default memo(GlobalStyle);
