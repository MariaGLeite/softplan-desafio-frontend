import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './assets/theme/globalStyle';
import { whiteTheme } from './assets/theme/themes';
import Routes from './assets/routes';

const App = () => {
  return (
    <ThemeProvider theme={whiteTheme} >
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;