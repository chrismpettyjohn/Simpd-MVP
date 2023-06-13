export interface TipWire {
  id: number;
  name: string;
  description: string;
}

export interface TipFindOneInput {
  id?: number;
  names?: string;
}

export interface TipFindManyInput {
  names?: string[];
}

export interface TipCreateOneInput {
  name: string;
  description: string;
}
