import React, { useContext, useEffect } from 'react';
import { CardAccordion } from '../../../components/card-accordion/CardAccordion';
import { sessionContext, useProfileSubscriptionGroupFetchMany } from '@simpd/lib-web';
import { AddSubscriptionGroupBlock } from './add-subscription-group-block/AddSubscriptionGroupBlock';
import { ViewSubscriptionGroupBlock } from './view-subscription-group-block/ViewSubscriptionGroupBlock';

export function SubscriptionGroupsCard() {
  const { session } = useContext(sessionContext);
  const profileSubscriptionGroupFetchMany = useProfileSubscriptionGroupFetchMany();

  const onFetchSubscriptionGroups = async () => {
    await profileSubscriptionGroupFetchMany.fetch({
      profileIDs: [session!.profileID,]
    })
  }

  useEffect(() => {
    onFetchSubscriptionGroups();
  }, []);

  return (
    <>
      <CardAccordion header="Subscription Groups">
        {
          profileSubscriptionGroupFetchMany.loading && (
            <i className="fa fa-spinner fa-spin" />
          )
        }
        {
          profileSubscriptionGroupFetchMany.data?.map(profileSubscriptionGroup => (
            <ViewSubscriptionGroupBlock key={`profile_subscription_group_${profileSubscriptionGroup.id}`} subscriptionGroup={profileSubscriptionGroup} />
          ))
        }
        <AddSubscriptionGroupBlock />
      </CardAccordion>
    </>
  )
}