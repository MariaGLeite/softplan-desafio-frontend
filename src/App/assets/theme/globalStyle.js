import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};

    &:visited {
      color: ${props => props.theme.colors.primary};
    }
  }

  body {
    color: ${props => props.theme.colors.black87};
    background-color: ${props => props.theme.colors.background.primary};
    overflow: hidden;
  }
  
  #root {
    height: 100vh;
  }
`;

