import { Field, InputType } from '@nestjs/graphql';
import { CommentType } from '@simpd/lib-client';

@InputType()
export class PostCommentCreateInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => CommentType)
  comment!: CommentType;
}

@InputType()
export class PostCommentFilterOneInput {
  @Field(() => Number, { nullable: true })
  postID?: number;

  @Field(() => Number, { nullable: true })
  profileID?: number;
}

@InputType()
export class PostCommentFilterManyInput {
  @Field(() => [Number], { nullable: true })
  postIDs?: number[];

  @Field(() => [Number], { nullable: true })
  profileIDs?: number[];
}
