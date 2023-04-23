import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class RoleModel {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  description?: string;
}
