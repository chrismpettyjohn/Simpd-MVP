
export interface PostPrivacyWire {
  id: number;
  subscriptionGroupID: number;
}

export interface PostPrivacyFindManyInput {
  ids?: number[];
  postIDs: number[];
  profileIDs?: number[];
}
