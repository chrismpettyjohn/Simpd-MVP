import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class PrivacyFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class PrivacyFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class PrivacyCreateInput {
  @Field(() => String)
  key!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}
