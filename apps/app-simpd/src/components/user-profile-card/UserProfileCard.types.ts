import { ProfileFragment } from "@simpd/lib-web";

export interface UserProfileCardProps {
  profile: ProfileFragment;
  allowChanges?: boolean;
  onChanges?(newProfile: ProfileFragment): void;
}