import {TipEntity} from './tip.entity';
import {Injectable} from '@nestjs/common';
import {TipCreateInput} from './tip.input';
import {TipRepository} from './tip.repository';
import {
  PaymentInvoiceClientService,
  ProfileClientService,
} from '@simpd/lib-client';

@Injectable()
export class TipService {
  constructor(
    private readonly tipRepo: TipRepository,
    private readonly profileClientService: ProfileClientService,
    private readonly paymentInvoiceClientService: PaymentInvoiceClientService
  ) {}

  async createOne(
    input: TipCreateInput,
    sendingProfileID: number
  ): Promise<TipEntity> {
    const [sendingProfile, receivingProfile] = await Promise.all([
      this.profileClientService.findOne({id: sendingProfileID}),
      this.profileClientService.findOne({id: input.receivingProfileID}),
    ]);

    const newPaymentInvoice = await this.paymentInvoiceClientService.createOne({
      userID: sendingProfile.userID,
      profileID: sendingProfile.id,
      amount: input.amount,
      description: `Tip to profile ${receivingProfile.id} for ${input.message}`,
    });

    return this.tipRepo.create({
      userID: sendingProfile.userID,
      profileID: sendingProfile.id,
      receivingUserID: receivingProfile.userID,
      receivingProfileID: receivingProfile.id,
      paymentInvoiceID: newPaymentInvoice.id,
      amount: input.amount,
      message: input.message,
    });
  }
}
