import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class MessageModel {
  @Field(() => Number, {nullable: true})
  id?: number;
}
