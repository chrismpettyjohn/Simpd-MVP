import React from 'react'
import { Helmet } from 'react-helmet'
import { PageTitle } from 'components/page-title/PageTitle';

export function PageNotFoundScreen() {
  return (
    <div className="page-not-found-container">
      <Helmet>
        <title>Page-Not-Found - Simpd</title>
        <meta property="og:title" content="Page-Not-Found - Simpd" />
      </Helmet>
      <PageTitle title="Page Not Found" />
    </div>
  )
}
