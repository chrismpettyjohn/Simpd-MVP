import 'dotenv/config';
import {AlbumModule} from './album.module';
import {dynamicServiceBootstrap} from '@simpd/lib-api';
import {
  SVC_ALBUM_NAME,
  SVC_ALBUM_WEB_PORT,
} from 'libs/lib-client/src/svc-album/album.const';

dynamicServiceBootstrap(
  SVC_ALBUM_NAME,
  AlbumModule,
  SVC_ALBUM_WEB_PORT,
  'album'
);
