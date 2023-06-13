import {TipEntity} from './tip.entity';
import {Injectable} from '@nestjs/common';
import {TipCreateInput} from './tip.input';
import {TipRepository} from './tip.repository';
import {PaymentInvoiceClientService} from '@simpd/lib-client';

@Injectable()
export class TipService {
  constructor(
    private readonly tipRepo: TipRepository,
    private readonly paymentInvoiceClientService: PaymentInvoiceClientService
  ) {}

  async createOne(
    input: TipCreateInput,
    userID: number,
    profileID: number
  ): Promise<TipEntity> {
    const newPaymentInvoice = await this.paymentInvoiceClientService.createOne({
      userID,
      profileID,
      amount: input.amount,
      description: `Tip to ${input.receivingUserID} for ${input.message}`,
    });

    return this.tipRepo.create({
      userID,
      profileID,
      receivingUserID: input.receivingUserID,
      receivingProfileID: input.receivingProfileID,
      paymentInvoiceID: newPaymentInvoice.id,
      amount: input.amount,
      message: input.message,
    });
  }
}
