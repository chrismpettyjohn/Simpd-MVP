import React from 'react';
import { SiteLayoutContainer } from './SiteLayout.sty';
import { SiteLayoutProps } from './SiteLayout.types';
import { SiteHeader } from 'components/site-header/SiteHeader';
import { SiteFooter } from 'components/site-footer/SiteFooter';

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SiteLayoutContainer>
      <SiteHeader />
      {children}
      <SiteFooter />
    </SiteLayoutContainer>
  )
}