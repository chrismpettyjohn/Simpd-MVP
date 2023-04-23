import React from 'react';
import DayJS from 'dayjs';
import { SimpdWeb } from './SimpdWeb';
import "react-multi-carousel/lib/styles.css";
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import RelativeTime from 'dayjs/plugin/relativeTime';

DayJS.extend(RelativeTime);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SimpdWeb />
  </React.StrictMode>
);
