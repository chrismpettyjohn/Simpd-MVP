import {
  Directive,
  Field,
  GraphQLISODateTime,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class MessageModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  sendingProfileID?: number;

  @Field(() => Number, {nullable: true})
  receivingProfileID?: number;

  @Field(() => String, {nullable: true})
  content?: string;

  @Field(() => GraphQLISODateTime, {nullable: true})
  readAt?: string;

  @Field(() => GraphQLISODateTime, {nullable: true})
  createdAt?: string;

  @Field(() => GraphQLISODateTime, {nullable: true})
  updatedAt?: string;
}

@ObjectType()
export class MessageContactModel {
  @Field(() => Number, {nullable: true})
  profileID?: number;
}
