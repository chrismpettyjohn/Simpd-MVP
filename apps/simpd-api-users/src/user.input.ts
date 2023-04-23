import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;
}