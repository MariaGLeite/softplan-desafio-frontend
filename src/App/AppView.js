import React from 'react';
import { ThemeProvider } from 'styled-components';

import InitialPage from './pages/InitialPage';

import { GlobalStyle } from "./theme/globalStyle";
import { whiteTheme } from "./theme/themes";

const AppView = () => {
  return (
    <ThemeProvider theme={whiteTheme} >
      <GlobalStyle />
      <InitialPage />
    </ThemeProvider>
  );
}

export default AppView;