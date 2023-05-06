import {Directive, Field, ObjectType} from '@nestjs/graphql';
import {PrivacyPolicy} from '@simpd/lib-client';

@ObjectType()
export class PrivacyPolicyInput implements PrivacyPolicy {
  @Field(() => [Number], {nullable: true})
  allowedSubscriptionGroupIDs!: number[];
}

@ObjectType()
@Directive('@key(fields: "id")')
export class PrivacyModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  serviceKey?: string;

  @Field(() => Number, {nullable: true})
  resourceID?: number;

  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  description?: string;

  @Field(() => PrivacyPolicyInput, {nullable: true})
  policy?: PrivacyPolicyInput;
}
