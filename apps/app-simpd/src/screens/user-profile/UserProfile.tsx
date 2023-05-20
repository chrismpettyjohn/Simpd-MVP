import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { PostCard } from 'components/post-card/PostCard';
import { PageTitle } from 'components/page-title/PageTitle';
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';
import { ProfileFragment, usePostFetchMany, useProfileFetchOne } from '@simpd/lib-web';

export function UserProfileScreen() {
  const fetchPosts = usePostFetchMany();
  const fetchProfile = useProfileFetchOne()
  const [userProfile, setUserProfile] = useState<ProfileFragment>();
  const [, params] = useRoute<{ username: string }>('/profiles/:username');

  const onFetchProfile = async () => {
    const profile = await fetchProfile.fetch({ username: params!.username });
    setUserProfile(profile);
    await fetchPosts.fetch({ profileIDs: [profile.id] });
  }

  const onUpdateProfile = (profileChanges: Partial<ProfileFragment>) => {
    setUserProfile(_ => ({
      ..._!,
      ...profileChanges
    }))
  }

  useEffect(() => {
    if (!params?.username) {
      return;
    }
    onFetchProfile();
  }, [params?.username]);

  return (
    <>
      <Helmet>
        <title>User-Profile - Simpd</title>
        <meta property="og:title" content="User-Profile - Simpd" />
      </Helmet>
      <PageTitle title="User Profile" />
      {
        userProfile && (
          <UserProfileCard profile={userProfile} onChanges={onUpdateProfile} />
        )
      }
      {
        fetchPosts.data?.map(_ => <PostCard key={`profile_post_${_.id}`} post={_} />)
      }
    </>
  )
}