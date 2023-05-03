import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ReportFilterByManyInput {
  @Field(() => [Number], { nullable: true })
  ids?: number[];

  @Field(() => [String], { nullable: true })
  keys?: string[];
}

@InputType()
export class ReportFilterByOneInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => [String], { nullable: true })
  keys?: string[];
}

@InputType()
export class ReportCreateInput {
  @Field(() => String)
  key!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;
}
