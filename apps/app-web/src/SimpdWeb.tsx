import React from 'react';
import { Router } from 'screens/Router';
import { simpdWebTheme } from 'SimpdWeb.styled';
import { ThemeProvider } from 'styled-components';

export function SimpdWeb() {
  return (
    <ThemeProvider theme={simpdWebTheme}>
      <Router />
    </ThemeProvider>
  )
}
