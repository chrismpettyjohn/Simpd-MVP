import {Field, InputType} from '@nestjs/graphql';
import {PrivacyPolicy} from './privacy-client.types';

@InputType()
export class PrivacyPolicyInput implements PrivacyPolicy {
  @Field(() => [Number])
  allowedSubscriptionGroupIDs!: number[];
}
