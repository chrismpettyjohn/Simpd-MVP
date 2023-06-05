import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {PaymentMethodWire} from './payment-method.types';
import {
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_CREATE_ONE,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_DELETE_ONE,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_FIND_ONE,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_UPDATE_ONE,
  SVC_PAYMENT_METHOD_NAME,
} from './payment-method.const';
import {
  PaymentMethodCreateOneInput,
  PaymentMethodDeleteOneInput,
  PaymentMethodDeleteOneResponse,
  PaymentMethodFindOneInput,
  PaymentMethodUpdateOneInput,
  PaymentMethodUpdateOneResponse,
} from './payment-method-client.types';

@Injectable()
export class PaymentMethodClientService {
  constructor(@Inject(SVC_PAYMENT_METHOD_NAME) private client: ClientProxy) {}

  async findOne(filter: PaymentMethodFindOneInput): Promise<PaymentMethodWire> {
    const matchingPaymentMethod$ = this.client.send(
      SVC_PAYMENT_METHOD_INTERNAL_EVENT_FIND_ONE,
      filter
    );
    return await lastValueFrom(matchingPaymentMethod$);
  }

  async createOne(
    input: PaymentMethodCreateOneInput
  ): Promise<PaymentMethodWire> {
    const newPaymentMethod = this.client.send(
      SVC_PAYMENT_METHOD_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(newPaymentMethod);
  }

  async updateOne(
    filter: PaymentMethodFindOneInput,
    input: PaymentMethodUpdateOneInput
  ): Promise<PaymentMethodUpdateOneResponse> {
    const paymentMethodUpdated = this.client.send(
      SVC_PAYMENT_METHOD_INTERNAL_EVENT_UPDATE_ONE,
      {filter, input}
    );
    return await lastValueFrom(paymentMethodUpdated);
  }

  async deleteOne(
    filter: PaymentMethodDeleteOneInput
  ): Promise<PaymentMethodDeleteOneResponse> {
    const paymentMethodDeleted = this.client.send(
      SVC_PAYMENT_METHOD_INTERNAL_EVENT_DELETE_ONE,
      filter
    );
    return await lastValueFrom(paymentMethodDeleted);
  }
}
