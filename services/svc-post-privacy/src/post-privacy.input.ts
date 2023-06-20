import {PrivacyPolicy} from '@simpd/lib-client';
import {Field, InputType} from '@nestjs/graphql';

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
  @Field(() => Number, {nullable: true})
  postID?: number;
}

@InputType()
export class PostPrivacyFilterManyInput {
  @Field(() => [Number], {nullable: true})
  postIDs?: number[];
}
