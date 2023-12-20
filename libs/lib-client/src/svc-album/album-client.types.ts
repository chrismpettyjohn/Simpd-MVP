export interface AlbumWire {
  id: number;
  profileID: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface AlbumFindOneInput {
  id: number;
}

export interface AlbumFindManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface AlbumCreateInput {
  name: string;
  description: string;
}
