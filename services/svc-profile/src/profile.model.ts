import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class ProfileModel {
  @Field({nullable: true})
  id?: number;

  // TODO: Add Privacy Guard
  @Field({nullable: true})
  email?: string;
}
