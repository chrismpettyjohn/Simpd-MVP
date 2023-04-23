import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SessionModel {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  userID?: string;
}
