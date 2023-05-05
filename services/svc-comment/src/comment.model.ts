import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class CommentModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  serviceKey?: string;

  @Field(() => String, {nullable: true})
  resourceID?: string;

  @Field(() => String, {nullable: true})
  comment?: string;
}
