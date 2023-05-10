import React from 'react'
import './PageNotFound.css';
import { Helmet } from 'react-helmet'

export function PageNotFoundScreen() {
  return (
    <div className="page-not-found-container">
      <Helmet>
        <title>Page-Not-Found - Simpd</title>
        <meta property="og:title" content="Page-Not-Found - Simpd" />
      </Helmet>
      <div className="page-not-found-container1">
        <h1 className="page-not-found-text">Not Found</h1>
      </div>
    </div>
  )
}
