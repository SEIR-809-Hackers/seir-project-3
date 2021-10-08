import {createGlobalStyle} from 'styled-components';
import {normalize} from 'polished'; 



export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 16px;
        color: darkgreen;
    }
    body {
        margin: 0;
        font-family: 'Menlo', monospace;
        color: darkgreen;
        

        
        /* background-color: papayawhip; */
      
      
        /* border: 2px solid; */
  
        opacity: 1;
       

        

    }
    main {
        width: 90%;
    
    }

    

`

export default GlobalStyle;