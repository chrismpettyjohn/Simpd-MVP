export interface PrivacyPolicy {
  allowedSubscriptionGroupIDs: number[];
}

export interface PrivacyWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  policy: PrivacyPolicy;
}

export interface PrivacyFindOneInput {
  serviceKey: string;
  resourceID: number;
}

export interface PrivacyFindManyInput {
  serviceKey: string;
  resourceIDs: number[];
}

export interface PrivacyCreateOneInput {
  serviceKey: string;
  resourceID: number;
  policy: PrivacyPolicy;
}

export type PrivacyUpdateOneInput = Omit<
  Partial<PrivacyCreateOneInput>,
  'resourceID'
>;
