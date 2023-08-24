import {Field, ObjectType} from '@nestjs/graphql';
import {PrivacyModel} from '@simpd/lib-client';

@ObjectType()
export class PostPrivacyModel {
  @Field(() => Number, {nullable: true})
  id!: number;

  @Field(() => PrivacyModel, {nullable: true})
  privacy?: PrivacyModel;

  @Field(() => Number, {nullable: true})
  postID!: number;
}
