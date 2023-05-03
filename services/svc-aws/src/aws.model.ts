import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class AWSModel {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => Number, { nullable: true })
  userID?: string; // TODO: Add Privacy Guard

  @Field(() => String, { nullable: true })
  username?: string;
}
