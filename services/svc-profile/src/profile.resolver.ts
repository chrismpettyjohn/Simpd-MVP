import {In} from 'typeorm';
import {ProfileModel} from './profile.model';
import {SessionWire} from '@simpd/lib-client';
import {ProfileEntity} from './profile.entity';
import {UnauthorizedException} from '@nestjs/common';
import {GetSession, HasSession} from '@simpd/lib-api';
import {ProfileRepository} from './profile.repository';
import {
  Args,
  Mutation,
  Query,
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
  }): Promise<ProfileEntity> {
    return this.profile({id: reference.id});
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
  ): Promise<ProfileEntity> {
    const newProfile = await this.profileRepo.create({
      userID: session.userID,
      username: input.username,
      displayName: input.displayName,
      biography: input.biography,
      location: input.location,
      websiteURL: input.websiteURL,
      wishlistURL: input.wishlistURL,
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
  ): Promise<ProfileEntity> {
    const matchingProfile = await this.profileRepo.findOneOrFail({
      where: filter,
    });

    if (matchingProfile.userID !== session.userID) {
      throw new UnauthorizedException();
    }

    await this.profileRepo.update(
      {
        id: filter.id,
        username: filter.username,
      },
      input
    );
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

    await this.profileRepo.delete(filter);
    return true;
  }
}
