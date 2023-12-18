import { ProfileFragment } from "@simpd/lib-web";
import { ReactNode } from "react";

export interface ProfileOpt {
  label: ReactNode;
  value: ProfileFragment;
}

export interface ProfileSelectProps {
  profileID?: number;
  isClearable?: boolean;
  onChange(profile?: ProfileFragment): void;
}