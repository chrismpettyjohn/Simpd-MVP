import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class SessionModel {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  userID?: string;
}
