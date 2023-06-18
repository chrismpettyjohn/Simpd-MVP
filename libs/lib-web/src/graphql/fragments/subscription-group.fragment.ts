import gql from "graphql-tag";

export interface SubscriptionGroupFragment {
  id: number;
  name: string;
  description: string;
  monthlyCostInCents: number;
  monthlyCostInDollarsAndCents: string;
}

export const SUBSCRIPTION_GROUP_FRAGMENT = gql`
  fragment SubscriptionGroupFragment on SubscriptionGroupModel {
    id
    name
    description
    monthlyCostInCents
    monthlyCostInDollarsAndCents
  }
`