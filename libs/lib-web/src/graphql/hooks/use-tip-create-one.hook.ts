import { useMutation } from "@apollo/client";
import { TipFragment } from "../fragments/tip.fragment";
import { TIP_CREATE_MUTATION, TipCreateMutationResponse, TipCreateMutationVariables } from "../mutation/tip-create-one.mutation";

export interface UseTipCreateResponse {
  execute(input: TipCreateMutationVariables): Promise<TipFragment>;
  error?: Error;
  loading: boolean;
  data?: TipFragment;
}

export function useTipCreate(): UseTipCreateResponse {
  const [createTip, { loading, error, data }] = useMutation<TipCreateMutationResponse, TipCreateMutationVariables>(TIP_CREATE_MUTATION);

  const onCreateTip = async (input: TipCreateMutationVariables) => {
    const matchingSession = await createTip({
      variables: input
    })
    return matchingSession.data!.tipCreate;
  }

  return {
    execute: onCreateTip,
    error,
    loading,
    data: data?.tipCreate,
  }
}