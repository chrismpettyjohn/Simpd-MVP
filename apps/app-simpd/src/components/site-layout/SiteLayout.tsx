import React from 'react';
import { SiteLayoutContainer } from './SiteLayout.sty';
import { SiteLayoutProps } from './SiteLayout.types';

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SiteLayoutContainer>
      {children}
    </SiteLayoutContainer>
  )
}