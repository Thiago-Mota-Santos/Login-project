import styled,  { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   }


   body{
    max-width: 100%;
    width: 100vw;
    height: 100vw;
    background: #D9D9D9;
   }

`;


export default GlobalStyle;

