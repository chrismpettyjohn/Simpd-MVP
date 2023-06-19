import { SessionWire } from '@simpd/lib-client';
import { GetSession, HasSession } from '@simpd/lib-api';
import { PostPrivacyModel } from './post-privacy.model';
import { PostPrivacyService } from './post-privacy.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { postPrivacyWireToPostPrivacyWire } from './post-privacy.wire';
import {
  PostPrivacyFilterManyInput,
  PostPrivacyFilterOneInput,
  PostPrivacyCreateInput,
} from './post-privacy.input';

@Resolver(() => PostPrivacyModel)
export class PostPrivacyResolver {
  constructor(private readonly postPrivacyService: PostPrivacyService) { }

  @Query(() => PostPrivacyModel)
  @HasSession()
  async postPrivacy(
    @Args('filter', { type: () => PostPrivacyFilterOneInput })
    filter: PostPrivacyFilterOneInput
  ): Promise<PostPrivacyModel> {
    const matchingPrivacy = await this.postPrivacyService.findOne({
      resourceID: filter.postID,
      profileID: filter.profileID,
    });
    return postPrivacyWireToPostPrivacyWire(matchingPrivacy);
  }

  @Query(() => [PostPrivacyModel])
  @HasSession()
  async postPrivacys(
    @Args('filter', { type: () => PostPrivacyFilterManyInput })
    filter: PostPrivacyFilterManyInput
  ): Promise<PostPrivacyModel[]> {
    const matchingPrivacys = await this.postPrivacyService.findMany({
      resourceIDs: filter.postIDs,
      profileIDs: filter.profileIDs,
    });
    return matchingPrivacys.map(postPrivacyWireToPostPrivacyWire);
  }

  @Mutation(() => PostPrivacyModel)
  @HasSession()
  async postPrivacyCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostPrivacyCreateInput
  ): Promise<PostPrivacyModel> {
    const newPrivacy = await this.postPrivacyService.createOne({
      profileID: session.profileID,
      resourceID: input.postID,
      privacy: input.privacy,
    });
    return postPrivacyWireToPostPrivacyWire(newPrivacy);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async postPrivacyDelete(
    @GetSession() session: SessionWire,
    @Args('filter', { type: () => PostPrivacyFilterOneInput })
    filter: PostPrivacyFilterOneInput
  ) {
    await this.postPrivacyService.deleteOne({
      resourceID: filter.postID,
      profileID: session.profileID,
    });
    return true;
  }
}
