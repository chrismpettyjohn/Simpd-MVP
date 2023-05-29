import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@InputType()
export class MessageReactionCreateInput {
  @Field(() => Number)
  messageID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class MessageReactionFilterOneInput {
  @Field(() => Number, {nullable: true})
  messageID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class MessageReactionFilterManyInput {
  @Field(() => [Number], {nullable: true})
  messageIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}
