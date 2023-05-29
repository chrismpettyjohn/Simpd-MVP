import React from 'react';
import { Link } from 'wouter';
import { PostCardText } from '../PostCard.styled';
import { PostContentProps } from './PostContent.types';

export function PostContent({ post }: PostContentProps) {
  return (
    <PostCardText>
      {
        post.content.split(' ').map(word => {
          const isTag = word.startsWith('#');

          if (isTag) {
            return <><Link to={`/tags/${word.replace('#', '')}`}>{word}</Link> &nbsp;</>
          }

          return <>{word}&nbsp;</>
        })
      }
    </PostCardText>
  )
}