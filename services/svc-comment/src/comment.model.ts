import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class CommentModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  serviceKey?: string;

  @Field(() => Number, {nullable: true})
  resourceID?: number;

  @Field(() => String, {nullable: true})
  comment?: string;

  @Field(() => Number, {nullable: true})
  profileID?: number;
}
