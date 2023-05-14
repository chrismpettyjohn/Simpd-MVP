import { useMutation } from "@apollo/client";
import { UserFragment } from "graphql/fragments/user.fragment";
import { USER_CREATE_MUTATION, UserCreateInput, UserCreateMutationResponse, UserCreateMutationVariables } from "graphql/mutation/user-create.mutation";

export interface UseUserCreateHookResponse {
  execute(input: UserCreateInput): Promise<UserFragment>;
  error?: Error;
  loading: boolean;
  data?: UserFragment;
}

export function useUserCreate(): UseUserCreateHookResponse {
  const [createUser, { loading, error, data }] = useMutation<UserCreateMutationResponse, UserCreateMutationVariables>(USER_CREATE_MUTATION);

  const onCreateProfileRandomized = async (input: UserCreateInput) => {
    const matchingSession = await createUser({
      variables: {
        input
      }
    })
    return matchingSession.data!.userCreate;
  }

  return {
    execute: onCreateProfileRandomized,
    error,
    loading,
    data: data?.userCreate,
  }
}