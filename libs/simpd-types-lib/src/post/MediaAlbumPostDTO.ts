import {PostType} from './PostType';

export interface MediaAlbumPostContentDTOWire {
  mediaID: number;
  order: number;
}

export interface CreateMediaAlbumPostDTOWire {
  type: PostType.MediaAlbum;
  content: string;
  media: MediaAlbumPostContentDTOWire[];
}

export type UpdateMediaAlbumPostDTOWire = Partial<CreateMediaAlbumPostDTOWire>;
