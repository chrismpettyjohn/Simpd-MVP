import React from 'react';
import { simpdWebTheme } from './Theme.sty';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProviderProps } from './ThemeContext';

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeProvider theme={simpdWebTheme}>
      {children}
    </ThemeProvider>
  )
}
