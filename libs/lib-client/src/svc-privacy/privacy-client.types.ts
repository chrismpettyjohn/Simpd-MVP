export interface PrivacyPolicy {
  allowedSubscriptionGroupIDs: number[];
}

export interface PrivacyWire {
  id: number;
  serviceKey: string;
  resourceID: number;
  name: string;
  description: string;
  policy: PrivacyPolicy;
}

export interface PrivacyFindOneInput {
  serviceKey: string;
  resourceID: number;
}

export interface PrivacyCreateOneInput {
  serviceKey: string;
  resourceID: number;
  name: string;
  description: string;
  policy: PrivacyPolicy;
}

export type PrivacyUpdateOneInput = Omit<
  Partial<PrivacyCreateOneInput>,
  'resourceID'
>;
