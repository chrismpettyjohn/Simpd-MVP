import { Field, InputType } from '@nestjs/graphql';
import { PrivacyType } from '@simpd/lib-client';

@InputType()
export class PostPrivacyCreateInput {
  @Field(() => Number)
  postID!: number;

  @Field(() => PrivacyType)
  privacy!: PrivacyType;
}

@InputType()
export class PostPrivacyFilterOneInput {
  @Field(() => Number, { nullable: true })
  postID?: number;

  @Field(() => Number, { nullable: true })
  profileID?: number;
}

@InputType()
export class PostPrivacyFilterManyInput {
  @Field(() => [Number], { nullable: true })
  postIDs?: number[];

  @Field(() => [Number], { nullable: true })
  profileIDs?: number[];
}
