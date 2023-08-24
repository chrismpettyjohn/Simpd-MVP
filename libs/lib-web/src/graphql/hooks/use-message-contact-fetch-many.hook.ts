import { useLazyQuery } from "@apollo/client";
import { MessageContactFragment } from "../../graphql/fragments/message-contact.fragment";
import { MESSAGE_CONTACT_FETCH_MANY_QUERY, MessageContactFetchManyQueryResponse } from "../../graphql/queries/message-contact-fetch-many.query";

export interface UseMessageContactFetchManyQueryResponse {
  fetch(): Promise<MessageContactFragment[]>;
  error?: Error;
  loading: boolean;
  data?: MessageContactFragment[];
}

export function useMessageContactFetchMany(): UseMessageContactFetchManyQueryResponse {
  const [getMessageContact, { loading, error, data }] = useLazyQuery<MessageContactFetchManyQueryResponse>(MESSAGE_CONTACT_FETCH_MANY_QUERY);

  const onFetchMessageContact = async () => {
    const matchingMessageContacts = await getMessageContact()
    return matchingMessageContacts.data!.messageContacts;
  }

  return {
    fetch: onFetchMessageContact,
    error,
    loading,
    data: data?.messageContacts,
  }
}