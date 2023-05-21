import React from 'react';
import { PostStatElement } from '../PostCard.styled';
import { PostSharesProps } from './PostShares.types';

export function PostShares({ post }: PostSharesProps) {
  return (
    <PostStatElement>
      <h3>20</h3>
      <p>
        <i className="fa fa-share" />
      </p>
    </PostStatElement>
  )
}