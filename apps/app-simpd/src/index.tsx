import React from 'react';
import DayJS from 'dayjs';
import DayJSRelativeTime from 'dayjs/plugin/relativeTime';
import { SimpdWeb } from './SimpdWeb';
import { createRoot } from 'react-dom/client';


DayJS.extend(DayJSRelativeTime);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SimpdWeb />
  </React.StrictMode>
);
