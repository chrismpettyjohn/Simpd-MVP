import {In} from 'typeorm';
import {ProfileModel} from './profile.model';
import {SessionWire} from '@simpd/lib-client';
import {ProfileEntity} from './profile.entity';
import {GetSession, HasSession} from '@simpd/lib-api';
import {ProfileRepository} from './profile.repository';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {
  ProfileCreateInput,
  ProfileFilterByManyInput,
  ProfileFilterByOneInput,
} from './profile.input';

@Resolver(() => ProfileModel)
export class ProfileResolver {
  constructor(private readonly profileRepo: ProfileRepository) {}

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
    });
    return newProfile;
  }

  @Mutation(() => Boolean)
  async profileDelete(@Args('filter') filter: ProfileFilterByOneInput) {
    await this.profileRepo.delete(filter);
    return true;
  }
}
