export interface BookmarkWire {
  id: number;
  profileID: number;
  resourceID: number;
  bookmarkCollectionID: number;
}

export interface BookmarkFindOneInput {
  id?: number;
  profileID?: number;
  resourceID?: number;
  bookmarkCollectionID?: number;
}

export interface BookmarkFindManyInput {
  ids?: number[];
  profileIDs?: number[];
  resourceIDs?: number[];
  bookmarkCollectionIDs?: number[];
}

export interface BookmarkCreateInput {
  profileID: number;
  bookmarkCollectionID: number;
}

export interface BookmarkCollectionWire {
  id: number;
  profileID: number;
  name: string;
}

export interface BookmarkCollectionFindOneInput {
  id?: number;
  profileID?: number;
}

export interface BookmarkCollectionFindManyInput {
  ids?: number[];
  profileIDs?: number[];
}

export interface BookmarkCollectionCreateInput {
  profileID: number;
  name: string;
}
