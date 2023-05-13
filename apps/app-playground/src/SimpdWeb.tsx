import './SimpdWeb.css';
import React from 'react';
import 'graphiql/graphiql.css';
import { GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit';

const fetcher = createGraphiQLFetcher({ url: 'http://localhost:3000' });


export function SimpdWeb() {
  return <GraphiQL fetcher={fetcher} />;
}
