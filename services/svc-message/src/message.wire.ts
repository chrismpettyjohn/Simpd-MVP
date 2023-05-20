import {MessageWire} from '@simpd/lib-client';
import {MessageEntity} from './message.entity';

export function messageEntityToMessageWire(
  messageEntity: MessageEntity
): MessageWire {
  return {
    id: messageEntity.id!,
    sendingProfileID: messageEntity.sendingProfileID,
    receivingProfileID: messageEntity.receivingProfileID,
    content: messageEntity.content,
    readAt: messageEntity.readAt?.toDateString(),
    createdAt: messageEntity.createdAt!.toDateString(),
    updatedAt: messageEntity.updatedAt?.toDateString(),
  };
}
