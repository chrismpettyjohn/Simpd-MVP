import { RoleScopesWire } from '@simpd/lib-client';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RoleScopesModel implements RoleScopesWire {
  @Field(() => Boolean, {
    nullable: true,
    description: 'User can create profile',
  })
  profileCreate!: boolean;
}

@ObjectType()
export class RoleModel {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => RoleScopesModel, { nullable: true })
  scopes?: RoleScopesModel;
}
