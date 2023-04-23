import {PostWire} from './Post';
import {MediaWire, PostType} from '@simpd/types';

export interface SingleVideoPostWire extends PostWire {
  type: PostType.SingleVideo;
  content: string;
  video: MediaWire;
}
