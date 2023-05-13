import React from 'react';
import { PageTitleProps } from './PageTitle.types';
import { PageTitleContainer } from './PageTitle.sty';

export function PageTitle({ children, title }: PageTitleProps) {
  return (
    <PageTitleContainer>
      <h1>{title}</h1>
      {children}
    </PageTitleContainer>
  )
}