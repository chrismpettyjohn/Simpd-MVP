import { ProfileSubscriptionGroupCreateInput, ProfileSubscriptionGroupFragment } from "@simpd/lib-web";

export interface ProfileSubscriptionGroupEditorProps {
  defaultProfileSubscriptionGroup?: ProfileSubscriptionGroupFragment;
  onSave(profileSubscriptionGroupDTO: ProfileSubscriptionGroupCreateInput): void | Promise<void>;
}