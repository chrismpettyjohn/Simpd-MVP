import { useLazyQuery } from "@apollo/client";
import { PAYMENT_METHOD_FETCH_MANY_QUERY, PaymentMethodFetchManyFilterInput, PaymentMethodFetchManyQueryResponse, PaymentMethodFetchManyQueryVariables } from "../queries/payment-method-fetch-many.query";
import { PaymentMethodFragment } from "../fragments/payment-method.fragment";

export interface UsePaymentMethodFetchManyQueryResponse {
  fetch(filter: PaymentMethodFetchManyFilterInput): Promise<PaymentMethodFragment[]>;
  error?: Error;
  loading: boolean;
  data?: PaymentMethodFragment[];
}

export function usePaymentMethodFetchMany(): UsePaymentMethodFetchManyQueryResponse {
  const [getPaymentMethod, { loading, error, data }] = useLazyQuery<PaymentMethodFetchManyQueryResponse, PaymentMethodFetchManyQueryVariables>(PAYMENT_METHOD_FETCH_MANY_QUERY);

  const onFetchPaymentMethod = async (filter: PaymentMethodFetchManyFilterInput) => {
    const matchingPaymentMethods = await getPaymentMethod({ variables: { filter } })
    return matchingPaymentMethods.data!.paymentMethods;
  }

  return {
    fetch: onFetchPaymentMethod,
    error,
    loading,
    data: data?.paymentMethods,
  }
}