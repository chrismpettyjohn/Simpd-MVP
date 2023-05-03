export interface TagWire {
  id: number;
  key: string;
  name: string;
  description: string;
}

export interface TagFindOneInput {
  id?: number;
  key?: string;
}
