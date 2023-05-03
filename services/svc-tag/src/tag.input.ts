import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class TagFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class TagFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class TagCreateInput {
  @Field(() => String)
  key!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}
