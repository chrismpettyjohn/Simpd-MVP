export enum MediaType {
  Text = 'text',
}

export interface BaseMedia {
  id: number;
  profileID: number;
  type: MediaType;
}

export interface BaseMediaWithText {
  type: MediaType.Text;
  content: string;
}

export type MediaWithTextWire = BaseMedia & BaseMediaWithText;

export type MediaSubset = MediaWithTextWire;

export type MediaWire = BaseMedia & MediaSubset;

export interface MediaFindOneInput {
  id: number;
}
