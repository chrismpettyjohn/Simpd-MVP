import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {AlbumRepository} from './album.repository';
import {albumEntityToAlbumWire} from './album.wire';
import {
  AlbumFindOneInput,
  AlbumWire,
  SVC_ALBUM_INTERNAL_EVENT_FIND_MANY,
  SVC_ALBUM_INTERNAL_EVENT_FIND_ONE,
} from '@simpd/lib-client';
import {AlbumFindManyInput} from './album.input';
import {In} from 'typeorm';

@Controller()
export class AlbumController {
  constructor(private readonly albumRepo: AlbumRepository) {}

  @MessagePattern(SVC_ALBUM_INTERNAL_EVENT_FIND_ONE)
  async albumFindOne(data: AlbumFindOneInput): Promise<AlbumWire> {
    const matchingAlbum = await this.albumRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return albumEntityToAlbumWire(matchingAlbum);
  }

  @MessagePattern(SVC_ALBUM_INTERNAL_EVENT_FIND_MANY)
  async albumFindMany(filter: AlbumFindManyInput): Promise<AlbumWire[]> {
    const matchingAlbums = await this.albumRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        profileID: filter.profileIDs && In(filter.profileIDs),
      },
    });
    return matchingAlbums.map(albumEntityToAlbumWire);
  }
}
