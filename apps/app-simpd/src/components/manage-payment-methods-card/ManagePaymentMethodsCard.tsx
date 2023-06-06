import React, { useEffect } from 'react';
import { usePaymentMethodFetchMany } from '@simpd/lib-web';
import { CardAccordion } from '../card-accordion/CardAccordion';

export function ManagePaymentMethodsCard() {
  const paymentMethodFetchMany = usePaymentMethodFetchMany();

  const onFetchPaymentMethods = async () => {
    await paymentMethodFetchMany.fetch({});
  }

  useEffect(() => {
    onFetchPaymentMethods();
  }, []);

  return (
    <CardAccordion header="Manage Payment Method">
      {
        paymentMethodFetchMany.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        paymentMethodFetchMany.data?.map(_ => (
          <>
            {_.cardDetails.last4}
          </>
        ))
      }
    </CardAccordion>
  )
}