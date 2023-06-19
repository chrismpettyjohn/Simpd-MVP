import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  PostPrivacyFindManyInput,
  PostPrivacyWire,
} from './post-privacy-client.types';
import {
  SVC_POST_PRIVACY_INTERNAL_EVENT_FIND_MANY,
  SVC_POST_PRIVACY_NAME,
} from './post-privacy.const';

@Injectable()
export class PostPrivacyClientService {
  constructor(@Inject(SVC_POST_PRIVACY_NAME) private client: ClientProxy) { }

  async findMany(
    filter: PostPrivacyFindManyInput
  ): Promise<PostPrivacyWire[]> {
    const matchingPostPrivacys$ = this.client.send(
      SVC_POST_PRIVACY_INTERNAL_EVENT_FIND_MANY,
      filter
    );
    return await lastValueFrom(matchingPostPrivacys$);
  }
}
