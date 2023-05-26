import {ReactionType} from '@simpd/lib-client';
import {Field, ObjectType, registerEnumType} from '@nestjs/graphql';

@ObjectType()
export class PostReactionModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  postID!: number;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => ReactionType, {nullable: true})
  reaction!: ReactionType;
}

registerEnumType(ReactionType, {
  name: 'ReactionType',
});
