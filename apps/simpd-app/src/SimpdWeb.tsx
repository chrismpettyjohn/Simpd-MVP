import React from 'react';
import { Router } from './screens/Router';
import { ToastContainer } from 'react-toastify';
import { SiteFooter } from './components/site-footer/SiteFooter';
import { SiteHeader } from './components/site-header/SiteHeader';
import { GameClient, SimpdContextProviders } from '@simpd/web';

export function SimpdWeb() {
  return (
    <SimpdContextProviders>
      <GameClient />
      <div style={{ minHeight: 'calc(100% - 200px)' }}>
        <ToastContainer />
        <SiteHeader />
        <main className="container-fluid no-padding-container">
          <Router />
        </main>
      </div>
      <SiteFooter />
    </SimpdContextProviders>
  )
}
