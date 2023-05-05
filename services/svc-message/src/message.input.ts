import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class MessageFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class MessageFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => [String], {nullable: true})
  keys?: string[];
}

@InputType()
export class MessageCreateInput {
  @Field(() => Number)
  recipientID!: number;
}
