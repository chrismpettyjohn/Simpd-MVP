import React from 'react'
import './SiteLayout.css';
import { Helmet } from 'react-helmet'

export function SiteLayout() {
  return (
    <div className="site-layout-container">
      <Helmet>
        <title>Site-Layout - Simpd</title>
        <meta property="og:title" content="Site-Layout - Simpd" />
      </Helmet>
      <div className="site-layout-container1">
        <h1 className="site-layout-text">Page Title</h1>
      </div>
    </div>
  )
}