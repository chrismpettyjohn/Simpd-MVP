import React, { useContext, useEffect } from 'react';
import { CommentReactionsProps } from './CommentReactions.types';
import { CommentReactionsElement } from './CommentReactions.sty';
import { sessionContext, useCommentReactionCreate, useCommentReactionDelete, useCommentReactionFetchMany, ReactionType } from '@simpd/lib-web';

export function CommentReactions({ postComment }: CommentReactionsProps) {
  const { session } = useContext(sessionContext);
  const createCommentReaction = useCommentReactionCreate();
  const deleteCommentReaction = useCommentReactionDelete();
  const fetchCommentReactions = useCommentReactionFetchMany();

  const isLoading = createCommentReaction.loading || deleteCommentReaction.loading || fetchCommentReactions.loading;

  const onFetchReactions = async () => {
    await fetchCommentReactions.fetch({ commentIDs: [postComment.id] });
  }

  const onSubmitReaction = async () => {
    if (isLoading) {
      return;
    }
    const userHasReacted = fetchCommentReactions.data?.find(_ => _.profileID === session!.profileID)

    if (userHasReacted) {
      await deleteCommentReaction.execute({ commentID: postComment.id, profileID: session!.profileID });
    }

    if (!userHasReacted) {
      await createCommentReaction.execute({ commentID: postComment.id, reaction: ReactionType.Like })
    }

    await onFetchReactions();
  }

  useEffect(() => {
    onFetchReactions();
  }, [postComment.id]);

  return (
    <CommentReactionsElement onClick={onSubmitReaction}>
      <h4>{fetchCommentReactions.data?.length ?? 0}</h4>
      <i className={`fa ${isLoading ? 'fa-spinner fa-spin' : 'fa-thumbs-up'}`} />
    </CommentReactionsElement>
  )
}