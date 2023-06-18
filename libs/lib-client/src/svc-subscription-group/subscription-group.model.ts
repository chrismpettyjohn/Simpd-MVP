import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class SubscriptionGroupModel {
  @Field(() => Number)
  @Directive('@external')
  id!: number;
}
