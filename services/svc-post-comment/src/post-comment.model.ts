import { CommentType } from '@simpd/lib-client';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class PostCommentModel {
  @Field(() => Number, { nullable: true })
  id!: number;

  @Field(() => Number, { nullable: true })
  postID!: number;

  @Field(() => Number, { nullable: true })
  profileID!: number;

  @Field(() => CommentType, { nullable: true })
  comment!: CommentType;
}

registerEnumType(CommentType, {
  name: 'CommentType',
});
