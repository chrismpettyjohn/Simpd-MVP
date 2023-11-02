import { useRoute } from 'wouter';
import React, { useEffect } from 'react'
import { PostCard } from '../../components/post-card/PostCard';
import { PageTitle } from '../../components/page-title/PageTitle';
import { FullPageLoadingScreen, usePostFetchOne } from '@simpd/lib-web';
import { PostCommentsCard } from 'components/post-comments-card/PostCommentsCard';
import { UserProfileCard } from '../../components/user-profile-card/UserProfileCard';
import { UserContainer } from '../../components/user-container/UserContainer';

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
    <UserContainer>
      <PageTitle title="View Post" />
      <UserProfileCard allowChanges={false} profile={fetchPost.data!.profile} />
      <PostCard post={fetchPost.data} hideAuthor />
      <PostCommentsCard post={fetchPost.data} />
    </UserContainer>
  )
}