import gql from "graphql-tag";
import { TIP_FRAGMENT, TipFragment } from "../fragments/tip.fragment";

export interface TipCreateInput {
  receivingProfileID: number;
  amountInDollarsAndCents: string;
  message: string;
}

export interface TipCreateMutationVariables {
  input: TipCreateInput;
}

export interface TipCreateMutationResponse {
  tipCreate: TipFragment;
}

export const TIP_CREATE_MUTATION = gql`
  ${TIP_FRAGMENT}
  mutation($input: TipCreateInput!) {
    tipCreate(
      input: $input
    ) {
      ...TipFragment
    }
  }
`