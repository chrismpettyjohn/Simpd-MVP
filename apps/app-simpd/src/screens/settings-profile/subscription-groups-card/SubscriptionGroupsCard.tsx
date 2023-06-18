import React, { useContext } from 'react';
import { sessionContext } from '@simpd/lib-web';
import { CardAccordion } from '../../../components/card-accordion/CardAccordion';
import { UserProfileCard } from '../../../components/user-profile-card/UserProfileCard';

export function SubscriptionGroupsCard() {
  const { session } = useContext(sessionContext);
  return (
    <>
      <UserProfileCard profile={session!.profile!} />
      <CardAccordion header="Subscription Groups">
        cumming soon
      </CardAccordion>
    </>
  )
}