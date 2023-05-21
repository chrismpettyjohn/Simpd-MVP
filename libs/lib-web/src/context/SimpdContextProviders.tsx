import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { graphqlClient } from '../app/graphql.client';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import { SessionContextProvider } from './session/SessionContextProvider';
import { SimpdContextProvidersProps } from './SimpdContextProviders.types';

export function SimpdContextProviders({ children }: SimpdContextProvidersProps) {
  return (
    <ThemeContextProvider>
      <ApolloProvider client={graphqlClient as any}>
        <SessionContextProvider>
          {children}
        </SessionContextProvider>
      </ApolloProvider>
    </ThemeContextProvider>
  )
}