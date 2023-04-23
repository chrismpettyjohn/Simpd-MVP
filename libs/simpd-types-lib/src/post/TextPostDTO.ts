import {PostType} from './PostType';

export interface CreateTextPostDTOWire {
  type: PostType.Text;
  content: string;
}

export type UpdateTextPostDTOWire = Partial<CreateTextPostDTOWire>;
