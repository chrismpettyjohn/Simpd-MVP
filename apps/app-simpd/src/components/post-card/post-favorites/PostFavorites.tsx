import React from 'react';
import { PostStatElement } from '../PostCard.styled';
import { PostFavoritesProps } from './PostFavorites.types';

export function PostFavorites({ post }: PostFavoritesProps) {
  return (
    <PostStatElement>
      <h3>20</h3>
      <p>
        <i className="fa fa-heart" />
      </p>
    </PostStatElement>
  )
}