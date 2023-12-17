import React, { useContext, useEffect } from 'react';
import { PostStatElement } from '../PostCard.styled';
import { PostReactionsProps } from './PostReactions.types';
import { ReactionType, sessionContext, usePostReactionCreate, usePostReactionDelete, usePostReactionFetchMany } from '@simpd/lib-web';

export function PostReactions({ post }: PostReactionsProps) {
  const { session } = useContext(sessionContext);
  const postReactionCreate = usePostReactionCreate();
  const postReactionDelete = usePostReactionDelete();
  const postReactionFetchMany = usePostReactionFetchMany();

  const onFetchPostReactions = async () => {
    await postReactionFetchMany.fetch({ filter: { postIDs: [post.id] } });
  }

  const onReactToPost = async () => {
    if (!session) {
      return;
    }
    const userAlreadyLikedPost = postReactionFetchMany.data?.find(_ => _.profileID === session.profileID);

    if (!userAlreadyLikedPost) {
      await postReactionCreate.execute({ postID: post.id, reaction: ReactionType.Like });

    }

    if (userAlreadyLikedPost) {
      await postReactionDelete.execute({ postID: post.id })
    }

    await onFetchPostReactions();
  }


  useEffect(() => {
    onFetchPostReactions();
  }, [post.id]);

  const isLoading = postReactionFetchMany.loading ?? postReactionCreate.loading ?? postReactionDelete.loading;

  return (
    <PostStatElement onClick={onReactToPost}>
      <i className="fa fa-smile-wink fa-2x" />
      <h4>flirt</h4>
      <p>
        <small>
          {
            isLoading ? <i className="fa fa-spinner fa-spin" /> : <>{postReactionFetchMany.data?.length ?? 0}</>
          }
        </small>
      </p>
    </PostStatElement>
  )
}