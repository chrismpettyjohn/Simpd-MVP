export interface PrivacyWire {
  id: number;
  key: string;
  name: string;
  description: string;
}

export interface PrivacyFindOneInput {
  id?: number;
  key?: string;
}
