import { ProfileFragment } from "@simpd/lib-web";

export interface ChangeProfilePictureProps {
  profile: ProfileFragment;
  onChange(newProfile: ProfileFragment): void;
}