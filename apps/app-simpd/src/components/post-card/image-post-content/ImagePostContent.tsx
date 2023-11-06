import React, { useEffect } from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostCardImage } from '../PostCard.styled';
import { PostContent } from '../post-content/PostContent';
import { PostWithImageFragment, useMediaFetchOne } from '@simpd/lib-web';

export function ImagePostContent({ post }: PostCardProps<PostWithImageFragment>) {
  const mediaFetchOne = useMediaFetchOne();

  const onLoadMedia = async () => {
    mediaFetchOne.fetch({ id: post.mediaID });
  }

  useEffect(() => {
    onLoadMedia();
  }, [post]);

  return (
    <>
      <PostContent post={post} />
      {
        mediaFetchOne.loading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      {
        mediaFetchOne.data && (
          <PostCardImage src={mediaFetchOne.data.url} />
        )
      }
    </>
  )
}