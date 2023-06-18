import {In} from 'typeorm';
import RandomWords from 'random-words';
import {ProfileModel} from './profile.model';
import {ProfileEntity} from './profile.entity';
import {UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession} from '@simpd/lib-api';
import {ProfileRepository} from './profile.repository';
import {MediaModel, SessionWire} from '@simpd/lib-client';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import {
  ProfileCreateInput,
  ProfileFilterByManyInput,
  ProfileFilterByOneInput,
  ProfileUpdateInput,
} from './profile.input';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileRepo: ProfileRepository) {}

  // TODO: Add Privacy Guard
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<ProfileModel> {
    return this.profile({id: reference.id});
  }

  @ResolveField(() => MediaModel, {nullable: true})
  profilePicture(@Parent() profile: ProfileEntity): MediaModel | null {
    if (!profile.profilePictureMediaID) {
      return null;
    }

    return {id: profile.profilePictureMediaID};
  }

  @ResolveField(() => MediaModel, {nullable: true})
  coverPhoto(@Parent() profile: ProfileEntity): MediaModel | null {
    if (!profile.coverPhotoMediaID) {
      return null;
    }

    return {id: profile.coverPhotoMediaID};
  }

  @Query(() => ProfileModel)
  async profile(
    @Args('filter') filter: ProfileFilterByOneInput
  ): Promise<ProfileEntity> {
    return this.profileRepo.findOneOrFail({
      where: filter,
    });
  }

  @Query(() => [ProfileModel])
  profiles(
    @Args('filter', {type: () => ProfileFilterByManyInput, nullable: true})
    filter?: ProfileFilterByManyInput
  ): Promise<ProfileEntity[]> {
    return this.profileRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        userID: filter?.userIDs && In(filter.userIDs),
        username: filter?.usernames && In(filter.usernames),
      },
    });
  }

  @Mutation(() => ProfileModel)
  @HasSession()
  async profileCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: ProfileCreateInput
  ): Promise<ProfileModel> {
    const newProfile = await this.profileRepo.create({
      userID: session.userID,
      username: input.username,
      displayName: input.displayName,
      biography: input.biography,
      location: '',
      websiteURL: '',
      wishlistURL: '',
      subscriptionGroupIDs: [],
    });
    return newProfile;
  }

  @Mutation(() => ProfileModel)
  @HasSession()
  async profileCreateRandomized(
    @GetSession() session: SessionWire
  ): Promise<ProfileModel> {
    const words = RandomWords(3);

    const username = words.join('-');
    const displayName = username.toUpperCase();

    const newProfile = await this.profileRepo.create({
      userID: session.userID,
      username,
      displayName,
      biography: '',
      location: '',
      websiteURL: '',
      wishlistURL: '',
      subscriptionGroupIDs: [],
    });
    return newProfile;
  }

  @Mutation(() => ProfileModel)
  @HasSession()
  async profileUpdate(
    @GetSession() session: SessionWire,
    @Args('filter') filter: ProfileFilterByOneInput,
    @Args('input') input: ProfileUpdateInput
  ): Promise<ProfileModel> {
    console.log(filter, input);
    const matchingProfile = await this.profileRepo.findOneOrFail({
      where: filter,
    });

    if (matchingProfile.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    await this.profileRepo.update(filter, input);
    return this.profile(filter);
  }

  @Mutation(() => Boolean)
  async profileDelete(
    @GetSession() session: SessionWire,
    @Args('filter') filter: ProfileFilterByOneInput
  ) {
    const matchingProfile = await this.profileRepo.findOneOrFail({
      where: filter,
    });

    if (matchingProfile.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    await this.profileRepo.softDelete(filter);
    return true;
  }
}
