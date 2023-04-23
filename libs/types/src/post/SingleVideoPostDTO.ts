import {PostType} from './PostType';

export interface CreateSingleVideoPostDTOWire {
  type: PostType.SingleVideo;
  content: string;
  mediaID: number;
}

export type UpdateSingleVideoPostDTOWire =
  Partial<CreateSingleVideoPostDTOWire>;
