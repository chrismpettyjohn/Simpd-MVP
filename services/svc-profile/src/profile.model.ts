import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ProfileModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: string; // TODO: Add Privacy Guard

  @Field(() => String, {nullable: true})
  username?: string;
}
