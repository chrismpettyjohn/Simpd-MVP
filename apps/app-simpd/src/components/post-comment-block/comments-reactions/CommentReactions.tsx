import React from 'react';
import { CommentReactionsProps } from './CommentReactions.types';
import { CommentReactionsElement } from './CommentReactions.sty';

export function CommentReactions({ postComment }: CommentReactionsProps) {
  return (
    <CommentReactionsElement>
      <h4>155</h4>
      <i className="fa fa-thumbs-up" />
    </CommentReactionsElement>
  )
}