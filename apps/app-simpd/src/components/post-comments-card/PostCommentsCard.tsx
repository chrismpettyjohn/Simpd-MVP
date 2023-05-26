import React, { useEffect } from 'react';
import { usePostCommentFetchMany } from '@simpd/lib-web';
import { PostCommentsCardProps } from './PostCommentsCard.types';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { PostCommentBlock } from 'components/post-comment-block/PostCommentBlock';
import { CreatePostCommentBlock } from 'components/create-post-comment-block/CreatePostCommentBlock';

export function PostCommentsCard({ post }: PostCommentsCardProps) {
  const postCommentsFetchMany = usePostCommentFetchMany();

  const onFetchPostComments = async () => {
    await postCommentsFetchMany.fetch({ postIDs: [post.id] });
  }

  useEffect(() => {
    onFetchPostComments();
  }, [post.id]);

  const isLoading = postCommentsFetchMany.loading;

  return (
    <CardAccordion defaultIsOpen header="Comments">
      {
        isLoading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      {
        postCommentsFetchMany.data?.map(_ => (
          <PostCommentBlock key={`post_comment_${_.id}`} postComment={_} />
        ))
      }
      {
        postCommentsFetchMany.data?.length === 0 && <p>There aren't any comments yet.</p>
      }
      <CreatePostCommentBlock postID={post.id} onNewComment={onFetchPostComments} />
    </CardAccordion>
  )
}