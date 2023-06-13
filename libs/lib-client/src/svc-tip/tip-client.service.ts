import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {
  TipCreateOneInput,
  TipFindManyInput,
  TipFindOneInput,
  TipWire,
} from './tip-client.types';
import {
  SVC_TIP_INTERNAL_EVENT_CREATE_ONE,
  SVC_TIP_INTERNAL_EVENT_FIND_MANY,
  SVC_TIP_INTERNAL_EVENT_FIND_ONE,
  SVC_TIP_NAME,
} from './tip.const';

@Injectable()
export class TipClientService {
  constructor(@Inject(SVC_TIP_NAME) private client: ClientProxy) {}

  async findOne(input: TipFindOneInput): Promise<TipWire> {
    const matchingTip$ = this.client.send(
      SVC_TIP_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingTip$);
  }

  async findMany(input: TipFindManyInput): Promise<TipWire[]> {
    const matchingTips = this.client.send(
      SVC_TIP_INTERNAL_EVENT_FIND_MANY,
      input
    );
    return await lastValueFrom(matchingTips);
  }
  async createOne(input: TipCreateOneInput): Promise<TipWire> {
    const createdTip = this.client.send(
      SVC_TIP_INTERNAL_EVENT_CREATE_ONE,
      input
    );
    return await lastValueFrom(createdTip);
  }
}
