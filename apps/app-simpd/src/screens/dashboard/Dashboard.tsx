import React from 'react';
import { Helmet } from 'react-helmet'
import { PostCard } from 'components/post-card/PostCard';
import { PageTitle } from 'components/page-title/PageTitle';

export function DashboardScreen() {
  return (
    <>
      <Helmet>
        <title>Dashboard - Simpd</title>
        <meta property="og:title" content="Dashboard - Simpd" />
      </Helmet>
      <PageTitle title="Dashboard">
        <input
          type="text"
          placeholder="Find your favorite content"
          className="dashboard-textinput input"
        />
      </PageTitle>
      <PostCard />
      <PostCard />
    </>
  )
}
