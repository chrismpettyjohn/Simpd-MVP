import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useEffect, useState } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserProfileCard } from '../../components/user-profile-card/UserProfileCard';
import { ProfileFragment, usePostFetchMany, useProfileFetchOne, useProfileSubscriptionGroupFetchMany } from '@simpd/lib-web';
import { CardAccordion } from '../../components/card-accordion/CardAccordion';

export function UserProfileSubscriptionsScreen() {
  const fetchProfile = useProfileFetchOne()
  const [userProfile, setUserProfile] = useState<ProfileFragment>();
  const fetchProfileSubscriptionGroups = useProfileSubscriptionGroupFetchMany();
  const [, params] = useRoute<{ username: string }>('/profiles/:username/subscriptions');

  const onFetchProfile = async () => {
    const profile = await fetchProfile.fetch({ username: params!.username });
    setUserProfile(profile);
    await fetchProfileSubscriptionGroups.fetch({ profileIDs: [profile.id] });
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
          <>
            <UserProfileCard profile={userProfile} onChanges={onUpdateProfile} />
            <CardAccordion defaultIsOpen header="Subscriptions">
              {
                fetchProfileSubscriptionGroups.loading && <i className="fa fa-spinner fa-spin " />
              }
              {
                fetchProfileSubscriptionGroups.data?.map(_ => (
                  <div key={`profile_subscription_group_${_.id}`}>
                    {_.subscriptionGroup.name}
                  </div>
                ))
              }
            </CardAccordion>
          </>
        )
      }
    </>
  )
}