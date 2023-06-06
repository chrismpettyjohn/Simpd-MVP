import { useLazyQuery } from "@apollo/client";
import { PaymentMethodFragment } from "../fragments/payment-method.fragment";
import { PAYMENT_METHOD_FETCH_ONE_QUERY, PaymentMethodFetchOneFilterInput, PaymentMethodFetchOneQueryResponse, PaymentMethodFetchOneQueryVariables } from "../queries/payment-method-fetch-one.query";

export interface UsePaymentMethodFetchOneQueryResponse {
  fetch(filter: PaymentMethodFetchOneFilterInput): Promise<PaymentMethodFragment>;
  error?: Error;
  loading: boolean;
  data?: PaymentMethodFragment;
}

export function usePaymentMethodFetchOne(): UsePaymentMethodFetchOneQueryResponse {
  const [getPaymentMethod, { loading, error, data }] = useLazyQuery<PaymentMethodFetchOneQueryResponse, PaymentMethodFetchOneQueryVariables>(PAYMENT_METHOD_FETCH_ONE_QUERY);

  const onFetchPaymentMethod = async (filter: PaymentMethodFetchOneFilterInput) => {
    const matchingPaymentMethods = await getPaymentMethod({ variables: { filter } })
    return matchingPaymentMethods.data!.paymentMethod;
  }

  return {
    fetch: onFetchPaymentMethod,
    error,
    loading,
    data: data?.paymentMethod,
  }
}