export interface TagWire {
  id: number;
  name: string;
  description: string;
}

export interface TagFindOneInput {
  id?: number;
  names?: string;
}

export interface TagFindManyInput {
  names?: string[];
}

export interface TagCreateOneInput {
  name: string;
  description: string;
}
