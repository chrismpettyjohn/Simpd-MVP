import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { FullPageLoadingScreen, usePostFetchOne } from '@simpd/lib-web';
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';
import { PostCard } from 'components/post-card/PostCard';

export function ViewPostScreen() {
  const fetchPost = usePostFetchOne();
  const [, params] = useRoute<{ id: string }>('/posts/:id');

  const postID = Number(params!.id);

  useEffect(() => {
    if (!postID) {
      return;
    }
    fetchPost.fetch({ id: postID });
  }, [postID]);

  if (fetchPost.loading || !fetchPost.data) {
    return <FullPageLoadingScreen />
  }

  console.log(fetchPost.data)

  return (
    <>
      <Helmet>
        <title>View Post - Simpd</title>
        <meta property="og:title" content="View Post - Simpd" />
      </Helmet>
      <PageTitle title="View Post" />
      <UserProfileCard profile={fetchPost.data!.profile} />
      <PostCard post={fetchPost.data} hideAuthor />
      <CardAccordion header="Comments">
        Coming soon
      </CardAccordion>
    </>
  )
}
