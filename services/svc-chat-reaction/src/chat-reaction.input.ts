import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@InputType()
export class ChatReactionCreateInput {
  @Field(() => Number)
  chatID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class ChatReactionFilterOneInput {
  @Field(() => Number, {nullable: true})
  chatID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class ChatReactionFilterManyInput {
  @Field(() => [Number], {nullable: true})
  chatIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}
