import { MessageFragment } from "@simpd/lib-web";

export interface SendMessageCardProps {
  receivingProfileID: number;
  onMessageSent(newMessage: MessageFragment): void;
}