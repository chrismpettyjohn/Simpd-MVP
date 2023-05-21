export enum BookmarkType {
  Post = 'post',
}

export interface BookmarkWire {
  id: number;
  type: BookmarkType;
  profileID: number;
  resourceID: number;
  bookmarkCollectionID: number;
}

export interface BookmarkFindOneInput {
  id?: number;
  type?: BookmarkType;
  profileID?: number;
  resourceID?: number;
  bookmarkCollectionID?: number;
}

export interface BookmarkFindManyInput {
  ids?: number[];
  types?: BookmarkType[];
  profileIDs?: number[];
  resourceIDs?: number[];
  bookmarkCollectionIDs?: number[];
}

export interface BookmarkCreateInput {
  type: BookmarkType;
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
