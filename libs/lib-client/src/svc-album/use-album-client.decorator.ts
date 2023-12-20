import {Inject} from '@nestjs/common';
import {SVC_BOOKMARK_NAME} from './album.const';
import {ClientProxy} from '@nestjs/microservices';

export const UseAlbumClient: () => ClientProxy = () =>
  Inject(SVC_BOOKMARK_NAME) as any;
