import {PostWire} from './Post';
import {PostType} from './PostType';

export interface TextPostWire extends PostWire {
  type: PostType.Text;
  content: string;
}
