import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@InputType()
export class PostReactionCreateInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class PostReactionFilterOneInput {
  @Field(() => Number, {nullable: true})
  postID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class PostReactionFilterManyInput {
  @Field(() => [Number], {nullable: true})
  postIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}
