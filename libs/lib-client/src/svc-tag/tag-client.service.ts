import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  TagCreateOneInput,
  TagFindManyInput,
  TagFindOneInput,
  TagWire,
} from './tag-client.types';
import {
  SVC_TAG_INTERNAL_EVENT_CREATE_ONE,
  SVC_TAG_INTERNAL_EVENT_FIND_MANY,
  SVC_TAG_INTERNAL_EVENT_FIND_ONE,
  SVC_TAG_NAME,
} from './tag.const';

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

  async findMany(input: TagFindManyInput): Promise<TagWire[]> {
    const matchingTags = this.client.send(
      SVC_TAG_INTERNAL_EVENT_FIND_MANY,
      input
    );
    return await lastValueFrom(matchingTags);
  }
  async createOne(input: TagCreateOneInput): Promise<TagWire> {
    const createdTag = this.client.send(
      SVC_TAG_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(createdTag);
  }
}
