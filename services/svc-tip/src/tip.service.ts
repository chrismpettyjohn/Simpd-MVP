import {TipEntity} from './tip.entity';
import {Injectable} from '@nestjs/common';
import {TipCreateInput} from './tip.input';
import {TipRepository} from './tip.repository';
import {
  PaymentInvoiceClientService,
  ProfileClientService,
  TipClientService,
} from '@simpd/lib-client';

@Injectable()
export class TipService {
  constructor(
    private readonly tipRepo: TipRepository,
    private readonly tipClientService: TipClientService,
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
      amountInDollarsAndCents: input.amountInDollarsAndCents,
      description: `Tip to profile ${receivingProfile.id} for ${input.message}`,
    });

    const newTip = await this.tipRepo.create({
      userID: sendingProfile.userID,
      profileID: sendingProfile.id,
      receivingUserID: receivingProfile.userID,
      receivingProfileID: receivingProfile.id,
      paymentInvoiceID: newPaymentInvoice.id,
      message: input.message,
    });

    await this.tipClientService._onCreated({tipID: newTip.id!});

    return newTip;
  }
}
