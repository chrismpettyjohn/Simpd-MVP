export interface PrivacyPolicy {
  allowedSubscriptionGroupIDs: number[];
}

export interface PrivacyWire {
  id: number;
  resourceID: number;
  name: string;
  description: string;
  policy: PrivacyPolicy;
}

export interface PrivacyFindOneInput {
  resourceID: number;
}

export interface PrivacyCreateOneInput {
  resourceID: number;
  name: string;
  description: string;
  policy: PrivacyPolicy;
}

export type PrivacyUpdateOneInput = Omit<
  Partial<PrivacyCreateOneInput>,
  'resourceID'
>;
