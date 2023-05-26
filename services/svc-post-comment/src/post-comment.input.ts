import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PostCommentCreateOneInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => String)
  content!: string;
}

@InputType()
export class PostCommentFilterOneInput {
  @Field(() => Number, {nullable: true})
  postID?: number;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}

@InputType()
export class PostCommentFilterManyInput {
  @Field(() => [Number], {nullable: true})
  postIDs?: number[];

  @Field(() => [Number], {nullable: true})
  profileIDs?: number[];
}
