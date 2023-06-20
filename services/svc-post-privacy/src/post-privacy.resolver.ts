import {GetSession, HasSession} from '@simpd/lib-api';
import {PostPrivacyModel} from './post-privacy.model';
import {PostPrivacyService} from './post-privacy.service';
import {PrivacyModel, SessionWire} from '@simpd/lib-client';
import {privacyWireToPostPrivacyWire} from './post-privacy.wire';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  PostPrivacyFilterManyInput,
  PostPrivacyFilterOneInput,
  PostPrivacyCreateInput,
} from './post-privacy.input';

// TODO: User owns post guard
@Resolver(() => PostPrivacyModel)
export class PostPrivacyResolver {
  constructor(private readonly postPrivacyService: PostPrivacyService) {}

  @ResolveField()
  privacy(@Parent() postPrivacy: PostPrivacyModel): PrivacyModel {
    return {
      id: postPrivacy.id,
    };
  }

  @Query(() => PostPrivacyModel)
  @HasSession()
  async postPrivacy(
    @Args('filter', {type: () => PostPrivacyFilterOneInput})
    filter: PostPrivacyFilterOneInput
  ): Promise<PostPrivacyModel> {
    const matchingPrivacy = await this.postPrivacyService.findOne({
      resourceID: filter.postID ?? -1,
    });

    return privacyWireToPostPrivacyWire(matchingPrivacy);
  }

  @Query(() => [PostPrivacyModel])
  @HasSession()
  async postPrivacys(
    @Args('filter', {type: () => PostPrivacyFilterManyInput})
    filter: PostPrivacyFilterManyInput
  ): Promise<PostPrivacyModel[]> {
    const matchingPrivacies = await this.postPrivacyService.findMany({
      resourceIDs: filter.postIDs ?? [-1],
    });

    return matchingPrivacies.map(privacyWireToPostPrivacyWire);
  }

  @Mutation(() => PostPrivacyModel)
  @HasSession()
  async postPrivacyCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostPrivacyCreateInput
  ): Promise<PostPrivacyModel> {
    const newPrivacy = await this.postPrivacyService.createOne({
      resourceID: input.postID,
      policy: {
        allowedSubscriptionGroupIDs: input.policy.allowedSubscriptionGroupIDs,
      },
    });
    return privacyWireToPostPrivacyWire(newPrivacy);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async postPrivacyDelete(
    @GetSession() session: SessionWire,
    @Args('filter', {type: () => PostPrivacyFilterOneInput})
    filter: PostPrivacyFilterOneInput
  ) {
    await this.postPrivacyService.deleteOne({
      resourceID: filter.postID ?? -1,
    });
    return true;
  }
}
