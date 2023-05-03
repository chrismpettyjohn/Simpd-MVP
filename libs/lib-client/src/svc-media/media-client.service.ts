import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {MediaFindOneInput, MediaWire} from './media-client.types';
import {
  SVC_MEDIA_INTERNAL_EVENT_FIND_ONE_BY_ID,
  SVC_MEDIA_NAME,
} from './media.const';

@Injectable()
export class MediaClientService {
  constructor(@Inject(SVC_MEDIA_NAME) private client: ClientProxy) {}

  async findOneByID({id}: MediaFindOneInput): Promise<MediaWire> {
    const matchingMedia$ = this.client.send(
      SVC_MEDIA_INTERNAL_EVENT_FIND_ONE_BY_ID,
      {id}
    );
    return await lastValueFrom(matchingMedia$);
  }
}
