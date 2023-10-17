import React from 'react';
import { SiteBodyProps } from './SiteBody.types';
import { SiteBodyElement } from './SiteBody.styled';

export function SiteBody({ children }: SiteBodyProps) {
  return (
    <>
      <SiteBodyElement />
      <>{children}</>
    </>
  )
}