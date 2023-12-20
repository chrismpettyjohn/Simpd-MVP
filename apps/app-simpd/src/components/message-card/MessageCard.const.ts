import DayJS from 'dayjs';
import { MessageFragment } from "@simpd/lib-web";

export function normalizeMessageDate(message: MessageFragment): string {
  const messageTimestamp: DayJS.Dayjs = DayJS(message.updatedAt);
  return messageTimestamp.fromNow();
}