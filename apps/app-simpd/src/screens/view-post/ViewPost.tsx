import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import { PostCard } from '../../components/post-card/PostCard';
import { PageTitle } from '../../components/page-title/PageTitle';
import { FullPageLoadingScreen, usePostFetchOne } from '@simpd/lib-web';
import { PostCommentsCard } from 'components/post-comments-card/PostCommentsCard';
import { UserProfileCard } from '../../components/user-profile-card/UserProfileCard';

export function ViewPostScreen() {
  const fetchPost = usePostFetchOne();
  const [, params] = useRoute<{ id: string }>('/posts/:id');

  const postID = Number(params!.id);

  const onFetchPosts = async () => {
    await fetchPost.fetch({ id: postID });
  }

  useEffect(() => {
    if (!postID) {
      return;
    }
    onFetchPosts();
  }, [postID]);

  if (fetchPost.loading || !fetchPost.data) {
    return <FullPageLoadingScreen />
  }

  return (
    <>
      <Helmet>
        <title>View Post - Simpd</title>
        <meta property="og:title" content="View Post - Simpd" />
      </Helmet>
      <PageTitle title="View Post" />
      <UserProfileCard allowChanges={false} profile={fetchPost.data!.profile} />
      <PostCard post={fetchPost.data} hideAuthor />
      <PostCommentsCard post={fetchPost.data} />
    </>
  )
}