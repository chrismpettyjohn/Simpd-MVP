import React from 'react';
import { Router } from 'screens/Router';
import { simpdWebTheme } from './SimpdWeb.styled';
import { Footer } from 'components/footer/Footer';
import { ThemeProvider, styled } from 'styled-components';
import { SiteHeader } from 'components/site-header/SiteHeader';

export const SimpdWebContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  background: ${({ theme }) => theme.color.black};
`

export const SimpdWebContentContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

export function SimpdWeb() {
  return (
    <ThemeProvider theme={simpdWebTheme}>
      <SimpdWebContainer>
        <SimpdWebContentContainer>
          <SiteHeader />
          <Router />
          <Footer />
        </SimpdWebContentContainer>
      </SimpdWebContainer>
    </ThemeProvider>
  )
}
