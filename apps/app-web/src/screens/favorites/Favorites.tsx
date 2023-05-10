import React from 'react'
import './Favorites.css';
import { Helmet } from 'react-helmet'
import { PostCard } from 'components/post-card/PostCard';

export function FavoritesScreen() {
  return (
    <div className="favorites-container">
      <Helmet>
        <title>Favorites - Simpd</title>
        <meta property="og:title" content="Favorites - Simpd" />
      </Helmet>
      <div className="favorites-container1">
        <div className="favorites-container2">
          <h1 className="favorites-text">Favorites</h1>
          <button className="favorites-button button">Add Collection +</button>
        </div>
        <header data-role="Header" className="favorites-header1">
          <span className="favorites-text1">Yes Papi</span>
          <span className="favorites-text2">Oh Yeah</span>
          <span className="favorites-text3">Plz More</span>
        </header>
        <PostCard />
      </div>
    </div>
  )
}
