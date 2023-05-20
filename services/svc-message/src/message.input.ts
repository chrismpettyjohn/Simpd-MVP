import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class MessageFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [String], {nullable: true})
  usernames?: string[];
}

@InputType()
export class MessageFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class MessageCreateInput {
  @Field(() => Number)
  receivingProfileID!: number;

  @Field(() => String)
  content!: string;
}
