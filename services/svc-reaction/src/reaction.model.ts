import {Directive, Field, ObjectType} from '@nestjs/graphql';
import {ReactionType} from '@simpd/lib-client';

@ObjectType()
@Directive('@key(fields: "id")')
export class ReactionModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  serviceKey!: string;
  @Field(() => Number, {nullable: true})
  profileID!: number;

  @Field(() => Number, {nullable: true})
  resourceID!: number;

  @Field(() => ReactionType, {nullable: true})
  reaction!: ReactionType;
}
