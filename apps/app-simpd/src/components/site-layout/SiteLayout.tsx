import React from 'react';
import { SiteLayoutContainer } from './SiteLayout.sty';
import { SiteLayoutProps } from './SiteLayout.types';
import { SiteHeader } from '../site-header/SiteHeader';
import { SiteFooter } from '../site-footer/SiteFooter';

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SiteLayoutContainer>
      <SiteHeader />
      {children}
      <SiteFooter />
    </SiteLayoutContainer>
  )
}