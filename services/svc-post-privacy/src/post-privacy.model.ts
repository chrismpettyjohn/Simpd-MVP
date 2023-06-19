import { PrivacyType } from '@simpd/lib-client';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class PostPrivacyModel {
  @Field(() => Number, { nullable: true })
  id!: number;

  @Field(() => Number, { nullable: true })
  postID!: number;

  @Field(() => Number, { nullable: true })
  profileID!: number;

  @Field(() => PrivacyType, { nullable: true })
  privacy!: PrivacyType;
}

registerEnumType(PrivacyType, {
  name: 'PrivacyType',
});
