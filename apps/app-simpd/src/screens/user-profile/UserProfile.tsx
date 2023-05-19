import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect } from 'react'
import { PostCard } from 'components/post-card/PostCard';
import { PageTitle } from 'components/page-title/PageTitle';
import { usePostFetchMany, useProfileFetchOne } from '@simpd/lib-web';
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';

export function UserProfileScreen() {
  const fetchPosts = usePostFetchMany();
  const fetchProfile = useProfileFetchOne()
  const [, params] = useRoute<{ username: string }>('/profiles/:username');

  const loadUserProfile = async () => {
    const profile = await fetchProfile.fetch({ username: params!.username });
    await fetchPosts.fetch({ profileIDs: [profile.id] });
  }

  useEffect(() => {
    if (!params?.username) {
      return;
    }
    loadUserProfile();
  }, [params?.username]);

  return (
    <>
      <Helmet>
        <title>User-Profile - Simpd</title>
        <meta property="og:title" content="User-Profile - Simpd" />
      </Helmet>
      <PageTitle title="User Profile" />
      {
        fetchProfile.data && (
          <UserProfileCard profile={fetchProfile.data} />
        )
      }
      {
        fetchPosts.data?.map(_ => <PostCard key={`profile_post_${_.id}`} post={_} />)
      }
    </>
  )
}