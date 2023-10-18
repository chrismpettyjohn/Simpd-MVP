import React from 'react';
import { Helmet } from 'react-helmet';
import { PageTitleProps } from './PageTitle.types';

export function PageTitle({ title }: PageTitleProps) {
  const pageTitle = `Simpd ${title ? `- ${title}` : ''}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
    </Helmet>
  )
}