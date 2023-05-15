import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {TagFindOneInput, TagWire} from './tag-client.types';
import {SVC_TAG_INTERNAL_EVENT_FIND_ONE, SVC_TAG_NAME} from './tag.const';

@Injectable()
export class TagClientService {
  constructor(@Inject(SVC_TAG_NAME) private client: ClientProxy) {}

  async findOne(input: TagFindOneInput): Promise<TagWire> {
    const matchingTag$ = this.client.send(
      SVC_TAG_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingTag$);
  }
}
