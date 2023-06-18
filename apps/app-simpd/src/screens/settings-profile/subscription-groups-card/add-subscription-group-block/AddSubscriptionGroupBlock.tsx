import React from 'react';
import { toast } from 'react-toastify';
import { ProfileSubscriptionGroupCreateInput, useProfileSubscriptionGroupCreate } from '@simpd/lib-web';
import { ProfileSubscriptionGroupEditor } from '../../../../components/profile-subscription-group-editor/ProfileSubscriptionGroupEditor';

export function AddSubscriptionGroupBlock() {
  const profileSubscriptionGroupCreate = useProfileSubscriptionGroupCreate();

  const onAddSubscriptionGroup = async (newSubscriptionGroup: ProfileSubscriptionGroupCreateInput) => {
    try {
      await profileSubscriptionGroupCreate.execute({ input: newSubscriptionGroup });
      toast.success(`Subscription group ${newSubscriptionGroup.name} created!}`)
    } catch (e: any) {
      toast.error(`Subscription group ${newSubscriptionGroup.name} could not be created!}`)
      console.error(e);
      throw e;
    }
  }

  return (
    <ProfileSubscriptionGroupEditor onSave={onAddSubscriptionGroup} />
  )
}