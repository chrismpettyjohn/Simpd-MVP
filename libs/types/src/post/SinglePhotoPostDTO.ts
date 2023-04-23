import {PostType} from './PostType';

export interface CreateSinglePhotoPostDTOWire {
  type: PostType.SinglePhoto;
  content: string;
  mediaID: number;
}

export type UpdateSinglePhotoPostDTOWire =
  Partial<CreateSinglePhotoPostDTOWire>;
