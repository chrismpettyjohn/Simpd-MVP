import gql from "graphql-tag";

export const PRIVACY_FRAGMENT = gql`
  fragment PrivacyFragment on PrivacyModel {
    id
    serviceKey
    resourceID
    name
    description
    policy {
      allowedSubscriptionGroupIDs
    }
  }
`
export interface PrivacyPolicy {
  allowedSubscriptionGroupIDs: number[];
}

export interface PrivacyFragment {
  id: number;
  serviceKey: string;
  resourceID: number;
  name: string;
  description: string;
  policy: PrivacyPolicy
}
