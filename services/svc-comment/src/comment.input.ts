import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class CommentFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => String, {nullable: true})
  serviceKey?: string;

  @Field(() => [Number])
  resourceIDs!: number[];
}

@InputType()
export class CommentFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class CommentCreateInput {
  @Field(() => Number)
  profileID!: number;

  @Field(() => String)
  serviceKey!: string;

  @Field(() => Number)
  resourceID!: number;

  @Field(() => String)
  comment!: string;
}
