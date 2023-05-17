import React from 'react';
import { Helmet } from 'react-helmet'
import { PageTitle } from 'components/page-title/PageTitle';
import { UserTimelineGrid } from './user-timeline-grid/UserTimelineGrid';
import { CreateNewPostCard } from 'components/create-new-post-card/CreateNewPostCard';

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
      <CreateNewPostCard />
      <UserTimelineGrid />
    </>
  )
}
