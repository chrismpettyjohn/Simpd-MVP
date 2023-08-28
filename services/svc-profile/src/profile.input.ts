import {Field, InputType} from '@nestjs/graphql';

export enum ProfileSortBy {
  NEWEST_PROFILE = 'NEWEST_PROFILE',
}

@InputType()
export class ProfileFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [String], {nullable: true})
  usernames?: string[];

  @Field(() => [ProfileSortBy], {nullable: true})
  sortBy?: ProfileSortBy[];
}

@InputType()
export class ProfileFilterByOneInput {
  @Field(() => Number, {nullable: true})
  id?: number;

  @Field(() => String, {nullable: true})
  username?: string;
}

@InputType()
export class ProfileCreateInput {
  @Field(() => String)
  username!: string;

  @Field(() => String)
  displayName!: string;

  @Field(() => String)
  biography!: string;

  @Field(() => Number, {nullable: true})
  profilePictureMediaID?: number;

  @Field(() => Number, {nullable: true})
  coverPhotoMediaID?: number;
}

@InputType()
export class ProfileUpdateInput {
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
