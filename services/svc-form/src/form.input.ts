import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class FormFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class FormFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class FormCreateInput {
  @Field(() => String)
  name!: string;
}
