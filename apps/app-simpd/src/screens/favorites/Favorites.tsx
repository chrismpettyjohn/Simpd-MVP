import React from 'react'
import './Favorites.css';
import { Helmet } from 'react-helmet'
import { PageTitle } from 'components/page-title/PageTitle';

export function FavoritesScreen() {
  return (
    <>
      <Helmet>
        <title>Favorites - Simpd</title>
        <meta property="og:title" content="Favorites - Simpd" />
      </Helmet>
      <PageTitle title="Favorites">
        <button className="favorites-button button">Add Collection +</button>

      </PageTitle>
      <header data-role="Header" className="favorites-header1">
        <span className="favorites-text1">Yes Papi</span>
        <span className="favorites-text2">Oh Yeah</span>
        <span className="favorites-text3">Plz More</span>
      </header>
    </>
  )
}
