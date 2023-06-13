import {In} from 'typeorm';
import {Controller} from '@nestjs/common';
import {tipEntityToTipWire} from './tip.wire';
import {TipRepository} from './tip.repository';
import {MessagePattern} from '@nestjs/microservices';
import {
  TipFindOneInput,
  TipWire,
  SVC_TIP_INTERNAL_EVENT_FIND_ONE,
  SVC_TIP_INTERNAL_EVENT_FIND_MANY,
  SVC_TIP_INTERNAL_EVENT_CREATE_ONE,
  TipFindManyInput,
  TipCreateInput,
} from '@simpd/lib-client';

@Controller()
export class TipController {
  constructor(private readonly tipRepo: TipRepository) {}

  @MessagePattern(SVC_TIP_INTERNAL_EVENT_FIND_ONE)
  async tipFindOne(filter: TipFindOneInput): Promise<TipWire> {
    const matchingTip = await this.tipRepo.findOneOrFail({
      where: {
        id: filter.id,
        userID: filter.userID,
        profileID: filter.profileID,
        receivingUserID: filter.receivingUserID,
        receivingProfileID: filter.receivingProfileID,
        paymentInvoiceID: filter.paymentInvoiceID,
      },
    });
    return tipEntityToTipWire(matchingTip);
  }

  @MessagePattern(SVC_TIP_INTERNAL_EVENT_FIND_MANY)
  async tipfindMany(filter: TipFindManyInput): Promise<TipWire[]> {
    const matchingTips = await this.tipRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
        profileID: filter.profileIDs && In(filter.profileIDs),
        receivingUserID: filter.receivingUserIDs && In(filter.receivingUserIDs),
        receivingProfileID:
          filter.receivingProfileIDs && In(filter.receivingProfileIDs),
        paymentInvoiceID:
          filter.paymentInvoiceIDs && In(filter.paymentInvoiceIDs),
      },
    });
    return matchingTips.map(tipEntityToTipWire);
  }

  @MessagePattern(SVC_TIP_INTERNAL_EVENT_CREATE_ONE)
  async tipCreateOne(input: TipCreateInput): Promise<TipWire> {
    const matchingTip = await this.tipRepo.create(input);
    return tipEntityToTipWire(matchingTip);
  }
}
