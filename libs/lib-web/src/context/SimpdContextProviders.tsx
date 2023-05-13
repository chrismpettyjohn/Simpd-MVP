import React from 'react';
import { graphqlClient } from 'app/graphql.client';
import { ApolloProvider } from "@apollo/react-hooks";
import { SessionContextProvider } from './session/SessionContextProvider';
import { SimpdContextProvidersProps } from './SimpdContextProviders.types';
import { ThemeContextProvider } from './theme/ThemeContextProvider';

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