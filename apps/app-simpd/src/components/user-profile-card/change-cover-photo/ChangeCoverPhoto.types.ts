import { ProfileFragment } from "@simpd/lib-web";

export interface ChangeCoverPhotoProps {
  profile: ProfileFragment;
  onChange(newProfile: ProfileFragment): void;
}