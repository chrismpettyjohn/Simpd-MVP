import {MediaModel} from '@simpd/lib-client';
import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class ProfileModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: number;

  @Field(() => String, {nullable: true})
  username?: string;

  @Field(() => String, {nullable: true})
  displayName?: string;

  @Field(() => String, {nullable: true})
  biography?: string;

  @Field(() => String, {nullable: true})
  location?: string;

  @Field(() => String, {nullable: true})
  websiteURL?: string;

  @Field(() => String, {nullable: true})
  wishlistURL?: string;

  @Field(() => Number, {nullable: true})
  profilePictureMediaID?: number;

  @Field(() => MediaModel, {nullable: true})
  profilePicture?: MediaModel;

  @Field(() => Number, {nullable: true})
  coverPhotoMediaID?: number;

  @Field(() => MediaModel, {nullable: true})
  coverPhoto?: MediaModel;
}
