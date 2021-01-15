import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    color: ${props => props.theme.colors.primaryText};
    background-color: ${props => props.theme.colors.background.primary};
    overflow: hidden;
  }
  
  #root {
    height: 100vh;
  }
`;

