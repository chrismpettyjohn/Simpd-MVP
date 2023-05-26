import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class PostCommentModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => Number, {nullable: true})
  postID!: number;

  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => String, {nullable: true})
  content!: string;
}
