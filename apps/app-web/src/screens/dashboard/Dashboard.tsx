import './Dashboard.css'
import React from 'react';
import { Helmet } from 'react-helmet'
import { PostCard } from 'components/post-card/PostCard';

export function DashboardScreen() {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Simpd</title>
        <meta property="og:title" content="Dashboard - Simpd" />
      </Helmet>
      <div className="dashboard-container1">
        <div className="dashboard-container2">
          <h1 className="dashboard-text">Dashboard</h1>
          <input
            type="text"
            placeholder="Find your favorite content"
            className="dashboard-textinput input"
          />
        </div>
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}
