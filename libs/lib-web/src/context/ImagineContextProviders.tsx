import React from 'react';
import { GraphQLContextProvider } from './graphql/GraphQLContextProvider';
import { SessionContextProvider } from './session/SessionContextProvider';
import { ImagineContextProvidersProps } from './ImagineContextProviders.types';

export function ImagineContextProviders({ children }: ImagineContextProvidersProps) {
  return (
    <GraphQLContextProvider>
      <SessionContextProvider>
        {children}
      </SessionContextProvider>
    </GraphQLContextProvider>
  )
}
