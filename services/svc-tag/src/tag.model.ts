import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class TagModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  key?: string;

  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  description?: string;
}
