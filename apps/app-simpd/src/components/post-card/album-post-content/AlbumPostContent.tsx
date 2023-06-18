import React, { useEffect } from 'react';
import { PostCardProps } from '../PostCard.types';
import { PostCardImage } from '../PostCard.styled';
import { PostContent } from '../post-content/PostContent';
import { PostWithAlbumFragment, useMediaFetchMany } from '@simpd/lib-web';

export function AlbumPostContent({ post }: PostCardProps<PostWithAlbumFragment>) {
  const mediaFetchMany = useMediaFetchMany();

  const onLoadMedia = async () => {
    mediaFetchMany.fetch({
      ids: post.mediaIDs,
    });
  }

  useEffect(() => {
    onLoadMedia();
  }, [post]);

  return (
    <>
      {
        mediaFetchMany.loading && (
          <i className="fa fa-spinner fa-spin" />
        )
      }
      <div style={{ display: 'flex', width: '100%', gap: '2%' }}>
        {
          mediaFetchMany.data?.map((media) => (<PostCardImage src={media.url} />))
        }
      </div>
      <PostContent post={post} />
    </>
  )
}