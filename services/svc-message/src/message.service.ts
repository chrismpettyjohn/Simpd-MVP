import {Injectable} from '@nestjs/common';
import {MessageEntity} from './message.entity';
import {MessageRepository} from './message.repository';
import {MessageClientService} from '@simpd/lib-client';

@Injectable()
export class MessageService {
  constructor(
    private readonly messageRepo: MessageRepository,
    private readonly messageClientService: MessageClientService
  ) {}

  async create(input: MessageEntity): Promise<MessageEntity> {
    const newMessage = await this.messageRepo.create(input);
    await this.messageClientService._onCreated({messageID: newMessage.id!});
    return newMessage;
  }
}
