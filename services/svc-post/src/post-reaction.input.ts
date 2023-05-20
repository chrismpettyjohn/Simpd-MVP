import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@InputType()
export class PostReactionInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}
