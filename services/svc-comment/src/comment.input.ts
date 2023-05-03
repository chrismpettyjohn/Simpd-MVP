import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class CommentFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
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
  @Field(() => String)
  key!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}
