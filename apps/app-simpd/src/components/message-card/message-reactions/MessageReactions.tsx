import React, { useContext, useEffect } from 'react';
import { MessageReactionsProps } from './MessageReactions.types';
import { ReactionType, sessionContext, useMessageReactionCreate, useMessageReactionDelete, useMessageReactionFetchMany } from '@simpd/lib-web';
import { PostStatElement } from 'components/post-card/PostCard.styled';

export function MessageReactions({ message }: MessageReactionsProps) {
  const { session } = useContext(sessionContext);
  const messageReactionCreate = useMessageReactionCreate();
  const messageReactionDelete = useMessageReactionDelete();
  const messageReactionFetchMany = useMessageReactionFetchMany();

  const onFetchMessageReactions = async () => {
    await messageReactionFetchMany.fetch({ filter: { messageIDs: [message.id] } });
  }

  const onReactToMessage = async () => {
    if (!session) {
      return;
    }
    const userAlreadyLikedMessage = messageReactionFetchMany.data?.find(_ => _.profileID === session.profileID);

    if (!userAlreadyLikedMessage) {
      await messageReactionCreate.execute({ messageID: message.id, reaction: ReactionType.Like });

    }

    if (userAlreadyLikedMessage) {
      await messageReactionDelete.execute({ messageID: message.id })
    }

    await onFetchMessageReactions();
  }


  useEffect(() => {
    onFetchMessageReactions();
  }, [message.id]);

  const isLoading = messageReactionFetchMany.loading ?? messageReactionCreate.loading ?? messageReactionDelete.loading;


  return (
    <PostStatElement onClick={onReactToMessage}>
      <h3>
        {
          isLoading ? <i className="fa fa-spinner fa-spin" /> : <>{messageReactionFetchMany.data?.length ?? 0}</>
        }
      </h3>
      <p>
        <i className="fa fa-thumbs-up" />
      </p>
    </PostStatElement>
  )
}