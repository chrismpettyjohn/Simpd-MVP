import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@InputType()
export class ReactionFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => String, {nullable: true})
  serviceKey?: string;

  @Field(() => [Number], {nullable: true})
  resourceIDs?: number[];
}

@InputType()
export class ReactionFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class ReactionCreateInput {
  @Field(() => String)
  serviceKey!: string;

  @Field(() => Number)
  profileID!: number;

  @Field(() => Number)
  resourceID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}
