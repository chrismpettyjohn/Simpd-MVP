import { ProfileFragment } from "@simpd/lib-web";

export interface UserProfileCardProps {
  profile: ProfileFragment;
  onChanges?(newProfile: ProfileFragment): void;
}