import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {MessageRepository} from './message.repository';
import {messageEntityToMessageWire} from './message.wire';
import {
  MessageFindOneInput,
  MessageWire,
  SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class MessageController {
  constructor(private readonly messageRepo: MessageRepository) {}

  @MessagePattern(SVC_MESSAGE_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async messageFindOneByID(data: MessageFindOneInput): Promise<MessageWire> {
    const matchingRole = await this.messageRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return messageEntityToMessageWire(matchingRole);
  }
}
