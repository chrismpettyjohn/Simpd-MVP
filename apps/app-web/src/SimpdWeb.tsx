import React from 'react';
import { Router } from 'screens/Router';
import { ThemeProvider, styled } from 'styled-components';
import { simpdWebTheme } from './SimpdWeb.styled';

export const SimpdWebContainer = styled.div`
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.color.black};
`

export const SimpdWebContentContainer = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

export function SimpdWeb() {
  return (
    <ThemeProvider theme={simpdWebTheme}>
      <SimpdWebContainer>
        <SimpdWebContentContainer>
          <Router />
        </SimpdWebContentContainer>
      </SimpdWebContainer>
    </ThemeProvider>
  )
}
