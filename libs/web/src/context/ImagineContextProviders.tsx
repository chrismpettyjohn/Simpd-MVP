import React from 'react';
import { ThemeContextProvider } from './theme/ThemeProvider';
import { ConfigContextProvider } from './config/ConfigContextProvider';
import { GraphQLContextProvider } from './graphql/GraphQLContextProvider';
import { SessionContextProvider } from './session/SessionContextProvider';
import { SimpdContextProvidersProps } from './SimpdContextProviders.types';

export function SimpdContextProviders({ children }: SimpdContextProvidersProps) {
  return (
    <GraphQLContextProvider>
      <ConfigContextProvider>
        <SessionContextProvider>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </GraphQLContextProvider>
  )
}
