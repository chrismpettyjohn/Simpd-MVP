import {Field, InputType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@InputType()
export class CommentReactionCreateInput {
  @Field(() => Number)
  commentID!: number;

  @Field(() => ReactionType)
  reaction!: ReactionType;
}

@InputType()
export class CommentReactionFilterOneInput {
  @Field(() => Number, {nullable: true})
  commentID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class CommentReactionFilterManyInput {
  @Field(() => [Number], {nullable: true})
  commentIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}
