import React from 'react';
import { simpdWebTheme } from './Theme.sty';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProviderProps } from './ThemeContextProvider.types';

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeProvider theme={simpdWebTheme}>
      {children}
    </ThemeProvider>
  )
}
