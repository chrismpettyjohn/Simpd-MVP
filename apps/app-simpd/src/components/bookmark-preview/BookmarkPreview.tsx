import React, { useEffect } from 'react';
import { usePostFetchOne } from '@simpd/lib-web';
import { BookmarkPreviewProps } from './BookmarkPreview.types';
import { PostCard } from 'components/post-card/PostCard';

export function BookmarkPreview({ bookmark }: BookmarkPreviewProps) {
  const postFetchOne = usePostFetchOne();

  useEffect(() => {
    postFetchOne.fetch({ id: bookmark.resourceID })
  }, [bookmark.resourceID]);

  if (postFetchOne.loading || !postFetchOne.data) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return (
    <PostCard post={postFetchOne.data!} hideTools />
  )
}