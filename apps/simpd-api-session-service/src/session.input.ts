import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class SessionFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];
}

@InputType()
export class SessionFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;
}

@InputType()
export class SessionCreateInput {
  @Field(() => Number)
  userID!: number;
}
