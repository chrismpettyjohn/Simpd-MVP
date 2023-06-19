import { Injectable } from '@nestjs/common';
import { SVC_POST_NAME } from 'libs/lib-client/src/svc-post/post.const';
import {
  BasePrivacyClientService,
  PrivacyClientService,
} from '@simpd/lib-client';

@Injectable()
export class PostPrivacyService extends BasePrivacyClientService {
  constructor(privacyClientService: PrivacyClientService) {
    super(SVC_POST_NAME, privacyClientService);
  }
}
