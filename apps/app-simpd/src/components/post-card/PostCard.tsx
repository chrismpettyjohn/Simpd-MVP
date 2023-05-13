import React from 'react';
import { AuthorBlockLarge } from 'components/author-block-large/AuthorBlockLarge';
import { PostCardContent, PostCardElement, PostCardImage, PostCardText } from './PostCard.styled';

export function PostCard() {
  return (
    <PostCardElement>
      <PostCardContent>
        <PostCardImage src="https://i.imgur.com/CesvKGF.png" />
        <PostCardText>
          🌸 This is my first post (I recently started living on my own🎉💃) and
          I am especially pleased that you have subscribed to me right now. I am
          sure that there are many interesting adventures ahead of us, and later
          we will remember with a smile how it all began. And don&apos;t be
          confused by the whims of a naughty girl.🤷🏻‍♀️🌺🌸
          <br /><br />
          🛸 I really love traveling and that&apos;s why today I went to a
          neighboring town and bought a set of underwear. 🛸🌼⛷️
        </PostCardText>
        <AuthorBlockLarge />
      </PostCardContent>
    </PostCardElement>
  )
}