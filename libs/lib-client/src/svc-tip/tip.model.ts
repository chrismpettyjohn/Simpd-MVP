import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class TipModel {
  @Field(() => Number)
  @Directive('@external')
  id!: number;
}
