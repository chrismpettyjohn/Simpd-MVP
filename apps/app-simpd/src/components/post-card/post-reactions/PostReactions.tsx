import React, { useContext, useEffect } from 'react';
import { PostStatElement } from '../PostCard.styled';
import { PostReactionsProps } from './PostReactions.types';
import { ReactionType, sessionContext, usePostReactionCreate, usePostReactionFetchMany } from '@simpd/lib-web';

export function PostReactions({ post }: PostReactionsProps) {
  const { session } = useContext(sessionContext);
  const postReactionCreate = usePostReactionCreate();
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
      // Delete reaction
    }

    await onFetchPostReactions();
  }


  useEffect(() => {
    onFetchPostReactions();
  }, [post.id]);

  return (
    <PostStatElement onClick={onReactToPost}>
      <h3>
        {
          postReactionFetchMany.loading ? <i className="fa fa-spinner fa-spin" /> : postReactionFetchMany.data?.length ?? 0
        }
      </h3>
      <p>
        <i className="fa fa-thumbs-up" />
      </p>
    </PostStatElement>
  )
}