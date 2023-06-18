import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {PaymentMethodRepository} from './payment-method.repository';
import {paymentMethodEntityToPaymentMethodWire} from './payment-method.wire';
import {PaymentMethodClientService} from 'libs/lib-client/src/svc-payment-method/payment-method-client.service';
import {
  PaymentMethodCreateOneInput,
  PaymentMethodDeleteOneResponse,
  PaymentMethodFindOneInput,
  PaymentMethodUpdateOneInput,
  PaymentMethodUpdateOneResponse,
} from 'libs/lib-client/src/svc-payment-method/payment-method-client.types';
import {
  PaymentMethodWire,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_CREATE_ONE,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_DELETE_ONE,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_FIND_ONE,
  SVC_PAYMENT_METHOD_INTERNAL_EVENT_UPDATE_ONE,
} from '@simpd/lib-client';

@Controller()
export class PaymentMethodController {
  constructor(
    private readonly paymentMethodRepo: PaymentMethodRepository,
    private readonly paymentMethodClientService: PaymentMethodClientService
  ) {}

  @MessagePattern(SVC_PAYMENT_METHOD_INTERNAL_EVENT_FIND_ONE)
  async paymentMethodFindOne(
    filter: PaymentMethodFindOneInput
  ): Promise<PaymentMethodWire> {
    const matchingPaymentMethod = await this.paymentMethodRepo.findOneOrFail({
      where: filter,
    });
    return paymentMethodEntityToPaymentMethodWire(matchingPaymentMethod);
  }

  @MessagePattern(SVC_PAYMENT_METHOD_INTERNAL_EVENT_CREATE_ONE)
  async paymentMethodCreateOne(
    input: PaymentMethodCreateOneInput
  ): Promise<PaymentMethodWire> {
    const newPaymentMethod = await this.paymentMethodRepo.create(input);
    const paymentMethodWire =
      paymentMethodEntityToPaymentMethodWire(newPaymentMethod);
    await this.paymentMethodClientService.created(paymentMethodWire);
    return paymentMethodWire;
  }

  @MessagePattern(SVC_PAYMENT_METHOD_INTERNAL_EVENT_UPDATE_ONE)
  async paymentMethodUpdateOne(
    filter: PaymentMethodFindOneInput,
    input: PaymentMethodUpdateOneInput
  ): Promise<PaymentMethodUpdateOneResponse> {
    const matchingPaymentMethod = await this.paymentMethodRepo.findOneOrFail({
      where: filter,
    });
    await this.paymentMethodRepo.update({id: matchingPaymentMethod.id!}, input);
    return {
      id: matchingPaymentMethod.id!,
      success: true,
    };
  }

  @MessagePattern(SVC_PAYMENT_METHOD_INTERNAL_EVENT_DELETE_ONE)
  async paymentMethodDeleteOne(
    filter: PaymentMethodFindOneInput
  ): Promise<PaymentMethodDeleteOneResponse> {
    const matchingPaymentMethod = await this.paymentMethodRepo.findOneOrFail({
      where: filter,
    });
    await this.paymentMethodRepo.softDelete({id: matchingPaymentMethod.id!});
    return {
      id: matchingPaymentMethod.id!,
      success: true,
    };
  }
}
