import {createGlobalStyle} from 'styled-components';
import {normalize} from 'polished'; 

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 16px;
    }
    body {
        font-family: 'Menlo', monospace;

    }
    main {
        width: 90%;
        margin: 0 auto;
    }

    

`

// export default GlobalStyle;