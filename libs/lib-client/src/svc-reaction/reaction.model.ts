import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class ReactionModel {
  @Field(() => Number)
  @Directive('@external')
  id!: number;
}
