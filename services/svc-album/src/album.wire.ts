import {AlbumWire} from '@simpd/lib-client';
import {AlbumEntity} from './album.entity';

export function albumEntityToAlbumWire(albumEntity: AlbumEntity): AlbumWire {
  return {
    id: albumEntity.id!,
    profileID: albumEntity.profileID,
    name: albumEntity.name,
    description: albumEntity.description,
    createdAt: albumEntity.createdAt!.toISOString(),
    updatedAt: albumEntity.updatedAt!.toISOString(),
  };
}
