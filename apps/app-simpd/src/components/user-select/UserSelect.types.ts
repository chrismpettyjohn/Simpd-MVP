import { UserFragment } from "@simpd/lib-web";

export interface UserSelectProps {
  userID?: number;
  isClearable?: boolean;
  onChange(user?: UserFragment): void;
}