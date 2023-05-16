import React from 'react';
import { Helmet } from 'react-helmet'
import { PostCard } from 'components/post-card/PostCard';
import { PageTitle } from 'components/page-title/PageTitle';
import { Button } from 'components/button/Button';
import { Link } from 'wouter';
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
      <PostCard />
      <PostCard />
    </>
  )
}
