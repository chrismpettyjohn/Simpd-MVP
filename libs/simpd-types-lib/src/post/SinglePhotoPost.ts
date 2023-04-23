import {PostWire} from './Post';
import {MediaWire, PostType} from '@simpd/types';

export interface SinglePhotoPostWire extends PostWire {
  type: PostType.SinglePhoto;
  content: string;
  photo: MediaWire;
}
