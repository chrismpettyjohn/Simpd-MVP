import {ReactionClientService} from './reaction-client.service';
import {
  ReactionCreateOneInput,
  ReactionFindOneInput,
  ReactionFindManyInput,
  ReactionWire,
} from './reaction-client.types';

export class BaseReactionClientService {
  constructor(
    private readonly serviceKey: string,
    private readonly reactionClientService: ReactionClientService
  ) {}

  async createOne(
    input: Omit<ReactionCreateOneInput, 'serviceKey'>
  ): Promise<ReactionWire> {
    const newReaction = await this.reactionClientService.createOne({
      ...input,
      serviceKey: this.serviceKey,
    });

    if (!newReaction.success) {
      throw new Error('svc-reaction failed to createOne');
    }

    return newReaction.reaction!;
  }

  async findOne(
    filter: Omit<ReactionFindOneInput, 'serviceKey'>
  ): Promise<ReactionWire> {
    return await this.reactionClientService.findOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async findMany(
    filter: Omit<ReactionFindManyInput, 'serviceKey'>
  ): Promise<ReactionWire[]> {
    return await this.reactionClientService.findMany({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }
}
