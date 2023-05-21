import {Inject} from '@nestjs/common';
import {SVC_BOOKMARK_NAME} from './bookmark.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseBookmarkClient: () => ClientProxy = () =>
  Inject(SVC_BOOKMARK_NAME) as any;
