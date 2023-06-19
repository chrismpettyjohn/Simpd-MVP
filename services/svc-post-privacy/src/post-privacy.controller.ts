import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostPrivacyService } from './post-privacy.service';
import {
  PostPrivacyFindManyInput,
  PostPrivacyWire,
  SVC_POST_PRIVACY_INTERNAL_EVENT_FIND_MANY,
} from '@simpd/lib-client';
import { postPrivacyWireToPostPrivacyWire } from './post-privacy.wire';

@Controller()
export class PostPrivacyController {
  constructor(private readonly postPrivacyService: PostPrivacyService) { }

  @MessagePattern(SVC_POST_PRIVACY_INTERNAL_EVENT_FIND_MANY)
  async postPrivacyFindMany(
    filter: PostPrivacyFindManyInput
  ): Promise<PostPrivacyWire[]> {
    const matchingPrivacys = await this.postPrivacyService.findMany(filter);
    return matchingPrivacys.map(postPrivacyWireToPostPrivacyWire);
  }
}
