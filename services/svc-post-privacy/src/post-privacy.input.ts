import { PrivacyPolicy } from '@simpd/lib-client';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostPrivacyPolicyInput implements PrivacyPolicy {
  @Field(() => [Number])
  allowedSubscriptionGroupIDs!: number[];
}

@InputType()
export class PostPrivacyCreateInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => PostPrivacyPolicyInput)
  policy!: PostPrivacyPolicyInput;
}

@InputType()
export class PostPrivacyFilterOneInput {
  @Field(() => Number, { nullable: true })
  postID?: number;

  @Field(() => Number, { nullable: true })
  profileID?: number;

  @Field(() => Number, { nullable: true })
  privacyID?: number;
}

@InputType()
export class PostPrivacyFilterManyInput {
  @Field(() => [Number], { nullable: true })
  postIDs?: number[];

  @Field(() => [Number], { nullable: true })
  profileIDs?: number[];

  @Field(() => [Number], { nullable: true })
  privacyIDs?: number[];
}
