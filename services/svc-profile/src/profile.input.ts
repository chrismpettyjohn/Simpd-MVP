import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class ProfileFilterByManyInput {
  @Field(() => [Number], {nullable: true})
  ids?: number[];

  @Field(() => [Number], {nullable: true})
  userIDs?: number[];

  @Field(() => [String], {nullable: true})
  usernames?: string[];
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
}
