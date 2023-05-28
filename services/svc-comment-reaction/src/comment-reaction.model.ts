import {ReactionType} from '@simpd/lib-client';
import {Field, ObjectType, registerEnumType} from '@nestjs/graphql';

@ObjectType()
export class CommentReactionModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  commentID!: number;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => ReactionType, {nullable: true})
  reaction!: ReactionType;
}

registerEnumType(ReactionType, {
  name: 'ReactionType',
});
