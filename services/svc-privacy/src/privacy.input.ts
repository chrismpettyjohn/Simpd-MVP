import {Field, InputType} from '@nestjs/graphql';
import {PrivacyPolicy} from '@simpd/lib-client';

@InputType()
export class PrivacyFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  resourceIDs?: number[];
}

@InputType()
export class PrivacyFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  resourceID?: number;
}

@InputType()
export class PrivacyPolicyInput implements PrivacyPolicy {
  @Field(() => [Number])
  allowedSubscriptionGroupIDs!: number[];
}

@InputType()
export class PrivacyCreateInput {
  @Field(() => String)
  serviceKey!: string;

  @Field(() => Number)
  resourceID!: number;

  @Field(() => PrivacyPolicyInput)
  policy!: PrivacyPolicyInput;
}
