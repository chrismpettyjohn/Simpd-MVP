import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AWSFilterByManyInput {
  @Field(() => [Number], { nullable: true })
  ids?: number[];

  @Field(() => [Number], { nullable: true })
  userIDs?: number[];

  @Field(() => [String], { nullable: true })
  usernames?: string[];
}

@InputType()
export class AWSFilterByOneInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => [Number], { nullable: true })
  userIDs?: number[];

  @Field(() => [String], { nullable: true })
  usernames?: string[];
}

@InputType()
export class AWSCreateInput {
  @Field(() => String)
  username!: string;
}
