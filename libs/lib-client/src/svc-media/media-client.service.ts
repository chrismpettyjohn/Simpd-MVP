import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MediaFindOneInput, MediaWire } from './media-client.types';
import {
  SVC_MEDIA_INTERNAL_EVENT_FIND_ONE,
  SVC_MEDIA_NAME,
} from './media.const';

@Injectable()
export class MediaClientService {
  constructor(@Inject(SVC_MEDIA_NAME) private client: ClientProxy) { }

  async findOne({ id }: MediaFindOneInput): Promise<MediaWire> {
    const matchingMedia$ = this.client.send(
      SVC_MEDIA_INTERNAL_EVENT_FIND_ONE,
      { id }
    );
    return await lastValueFrom(matchingMedia$);
  }
}
