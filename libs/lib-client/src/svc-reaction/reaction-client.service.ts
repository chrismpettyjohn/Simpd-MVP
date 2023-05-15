import {lastValueFrom} from 'rxjs';
import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {ReactionFindOneInput, ReactionWire} from './reaction-client.types';
import {
  SVC_REACTION_INTERNAL_EVENT_FIND_ONE,
  SVC_REACTION_NAME,
} from './reaction.const';

@Injectable()
export class ReactionClientService {
  constructor(@Inject(SVC_REACTION_NAME) private client: ClientProxy) {}

  async findOne(input: ReactionFindOneInput): Promise<ReactionWire> {
    const matchingReaction$ = this.client.send(
      SVC_REACTION_INTERNAL_EVENT_FIND_ONE,
      input
    );
    return await lastValueFrom(matchingReaction$);
  }
}
