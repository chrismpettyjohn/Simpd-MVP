import React from 'react';
import { ProfileSubscriptionGroupCreateInput } from '@simpd/lib-web';
import { CardAccordion } from '../../../../components/card-accordion/CardAccordion';
import { ViewSubscriptionGroupBlockProps } from './ViewSubscriptionGroupBlock.types';
import { ProfileSubscriptionGroupEditor } from '../../../../components/profile-subscription-group-editor/ProfileSubscriptionGroupEditor';

export function ViewSubscriptionGroupBlock({ subscriptionGroup }: ViewSubscriptionGroupBlockProps) {

  const onUpdateSubscriptionGroup = async (changes: ProfileSubscriptionGroupCreateInput) => {

  }

  return (
    <CardAccordion header={subscriptionGroup.subscriptionGroup.name}>
      <ProfileSubscriptionGroupEditor defaultProfileSubscriptionGroup={subscriptionGroup} onSave={onUpdateSubscriptionGroup} />
    </CardAccordion>
  )
}