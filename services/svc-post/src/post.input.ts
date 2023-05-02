import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PostFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];
}

@InputType()
export class PostFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class PostWithTextCreateInput {
  @Field(() => String)
  content!: string;
}
