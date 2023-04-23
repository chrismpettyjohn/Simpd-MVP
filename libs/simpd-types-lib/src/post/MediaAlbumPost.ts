import {PostWire} from './Post';
import {MediaWire, PostType} from '@simpd/types';

export interface MediaAlbumPostWire extends PostWire {
  type: PostType.MediaAlbum;
  content: string;
  media: MediaAlbumPostContent[];
}

export interface MediaAlbumPostContent extends MediaWire {
  order: number;
}
