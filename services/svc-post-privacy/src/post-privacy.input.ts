import {Field, InputType} from '@nestjs/graphql';
import {PrivacyPolicyInput} from '@simpd/lib-client';

@InputType()
export class PostPrivacyCreateInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => PrivacyPolicyInput)
  policy!: PrivacyPolicyInput;
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
