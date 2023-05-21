import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class BookmarkFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class BookmarkFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class BookmarkCreateInput {
  @Field(() => String)
  name!: string;
}
