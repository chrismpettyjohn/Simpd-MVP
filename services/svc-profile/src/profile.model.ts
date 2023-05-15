import {Directive, Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class ProfileModel {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => Number, {nullable: true})
  userID?: string; // TODO: Add Privacy Guard

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

  @Field(() => Number, {nullable: true})
  coverPhotoMediaID?: number;
}
