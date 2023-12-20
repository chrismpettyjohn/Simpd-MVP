import { MessageFragment, ProfileFragment } from "@simpd/lib-web";

export interface MessageCardProps {
  message: MessageFragment;
  profile: ProfileFragment;
  direction: 'left' | 'right';
}