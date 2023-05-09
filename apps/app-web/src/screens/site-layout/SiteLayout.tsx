import React from 'react'
import './SiteLayout.css';
import { Helmet } from 'react-helmet'
import { Footer } from 'components/footer/Footer';
import { SiteHeader } from 'components/site-header/SiteHeader';

export function SiteLayout() {
  return (
    <div className="site-layout-container">
      <Helmet>
        <title>Site-Layout - Simpd</title>
        <meta property="og:title" content="Site-Layout - Simpd" />
      </Helmet>
      <SiteHeader />
      <div className="site-layout-container1">
        <h1 className="site-layout-text">Page Title</h1>
      </div>
      <Footer />
    </div>
  )
}