import React from 'react'
import './PageNotFound.css';
import { Helmet } from 'react-helmet'
import { Footer } from 'components/footer/Footer';
import { SiteHeader } from 'components/site-header/SiteHeader';

export function PageNotFoundScreen() {
  return (
    <div className="page-not-found-container">
      <Helmet>
        <title>Page-Not-Found - Simpd</title>
        <meta property="og:title" content="Page-Not-Found - Simpd" />
      </Helmet>
      <SiteHeader />
      <div className="page-not-found-container1">
        <h1 className="page-not-found-text">Not Found</h1>
      </div>
      <Footer />
    </div>
  )
}
