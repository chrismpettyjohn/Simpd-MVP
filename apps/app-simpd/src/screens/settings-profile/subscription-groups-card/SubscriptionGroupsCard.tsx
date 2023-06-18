import { sessionContext } from '@simpd/lib-web';
import React, { useContext, useState } from 'react';
import { Button } from '../../../components/button/Button';
import { CardAccordion } from '../../../components/card-accordion/CardAccordion';
import { UserProfileCard } from '../../../components/user-profile-card/UserProfileCard';
import { ProfileSubscriptionGroupEditor } from '../../../components/profile-subscription-group-editor/ProfileSubscriptionGroupEditor';

export function SubscriptionGroupsCard() {
  const { session } = useContext(sessionContext);
  const [showAddSubscriptionGroup, setShowAddSubscriptionGroup] = useState(true);

  const onToggleAddSubscriptionGroup = () => {
    setShowAddSubscriptionGroup(_ => !_);
  }

  return (
    <>
      <UserProfileCard profile={session!.profile!} />
      <CardAccordion header="Subscription Groups">
        cumming soon
        <Button onClick={onToggleAddSubscriptionGroup}>
          Add Subscription Group
        </Button>
        {
          showAddSubscriptionGroup && (
            <>
              <hr />
              <ProfileSubscriptionGroupEditor />
            </>
          )
        }
      </CardAccordion>
    </>
  )
}