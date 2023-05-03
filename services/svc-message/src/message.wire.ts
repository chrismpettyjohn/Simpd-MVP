import {MessageWire} from '@simpd/lib-client';
import {MessageEntity} from './message.entity';

export function messageEntityToMessageWire(
  messageEntity: MessageEntity
): MessageWire {
  return {
    id: messageEntity.id!,
  };
}
