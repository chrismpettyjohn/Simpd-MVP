import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  AlbumFindManyInput,
  AlbumFindOneInput,
  AlbumWire,
} from './album-client.types';
import {
  SVC_ALBUM_INTERNAL_EVENT_FIND_MANY,
  SVC_ALBUM_INTERNAL_EVENT_FIND_ONE,
  SVC_ALBUM_NAME,
} from './album.const';

@Injectable()
export class AlbumClientService {
  constructor(@Inject(SVC_ALBUM_NAME) private client: ClientProxy) {}

  async findOne(input: AlbumFindOneInput): Promise<AlbumWire> {
    const matchingAlbum$ = this.client.send(
      SVC_ALBUM_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingAlbum$);
  }

  async findMany(input: AlbumFindManyInput): Promise<AlbumWire[]> {
    const matchingAlbums$ = this.client.send(
      SVC_ALBUM_INTERNAL_EVENT_FIND_MANY,
      input
    );
    return await lastValueFrom(matchingAlbums$);
  }
}
