import React from 'react'
import { MessageCardProps } from './MessageCard.types';
import { MessageReactions } from './message-reactions/MessageReactions';
import { AuthorBlockSmall } from '../author-block-small/AuthorBlockSmall';
import { MessageContent, MessageElement, MessageText, MessageTime } from './MessageCard.sty';

export function MessageCard({ message, profile, direction = 'left' }: MessageCardProps) {

  if (direction === 'left') {
    return (
      <MessageElement>
        <MessageContent>
          <AuthorBlockSmall profile={profile} />
          <MessageText>
            {message.content}
          </MessageText>
        </MessageContent>
        <MessageTime>
          10:00am
        </MessageTime>
      </MessageElement>
    )
  }

  return (
    <MessageElement>
      <MessageContent>
        <AuthorBlockSmall profile={profile} />
        <MessageText>
          {message.content}
        </MessageText>
      </MessageContent>
      <MessageTime>
        10:00am
      </MessageTime>
    </MessageElement>
  )
}


// <MessageReactions message={message} />