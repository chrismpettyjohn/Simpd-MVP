import { SessionWire } from '@simpd/lib-client';
import { GetSession, HasSession } from '@simpd/lib-api';
import { PostCommentModel } from './post-comment.model';
import { PostCommentService } from './post-comment.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { commentWireToPostCommentWire } from './post-comment.wire';
import {
  PostCommentFilterManyInput,
  PostCommentFilterOneInput,
  PostCommentCreateInput,
} from './post-comment.input';

@Resolver(() => PostCommentModel)
export class PostCommentResolver {
  constructor(private readonly postCommentService: PostCommentService) { }

  @Query(() => PostCommentModel)
  @HasSession()
  async postComment(
    @Args('filter', { type: () => PostCommentFilterOneInput })
    filter: PostCommentFilterOneInput
  ): Promise<PostCommentModel> {
    const matchingComment = await this.postCommentService.findOne({
      resourceID: filter.postID,
      profileID: filter.profileID,
    });
    return commentWireToPostCommentWire(matchingComment);
  }

  @Query(() => [PostCommentModel])
  @HasSession()
  async postComments(
    @Args('filter', { type: () => PostCommentFilterManyInput })
    filter: PostCommentFilterManyInput
  ): Promise<PostCommentModel[]> {
    const matchingComments = await this.postCommentService.findMany({
      resourceIDs: filter.postIDs,
      profileIDs: filter.profileIDs,
    });
    return matchingComments.map(commentWireToPostCommentWire);
  }

  @Mutation(() => PostCommentModel)
  @HasSession()
  async postCommentCreate(
    @GetSession() session: SessionWire,
    @Args('input') input: PostCommentCreateInput
  ): Promise<PostCommentModel> {
    const newComment = await this.postCommentService.createOne({
      profileID: session.profileID,
      resourceID: input.postID,
      comment: input.comment,
    });
    return commentWireToPostCommentWire(newComment);
  }

  @Mutation(() => Boolean)
  @HasSession()
  async postCommentDelete(
    @GetSession() session: SessionWire,
    @Args('filter', { type: () => PostCommentFilterOneInput })
    filter: PostCommentFilterOneInput
  ) {
    await this.postCommentService.deleteOne({
      resourceID: filter.postID,
      profileID: session.profileID,
    });
    return true;
  }
}
