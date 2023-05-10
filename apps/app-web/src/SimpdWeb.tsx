import React from 'react';
import { Router } from 'screens/Router';
import { simpdWebTheme } from './SimpdWeb.styled';
import { ThemeProvider } from 'styled-components';
import { SiteLayout } from 'components/site-layout/SiteLayout';



export function SimpdWeb() {
  return (
    <ThemeProvider theme={simpdWebTheme}>
      <SiteLayout>
        <Router />
      </SiteLayout>
    </ThemeProvider>
  )
}
