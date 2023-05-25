import React from 'react';
import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { PostStatElement } from '../PostCard.styled';
import { PostSharesProps } from './PostShares.types';
import { usePostWithSharedContentCreate } from '@simpd/lib-web';

export function PostShares({ post }: PostSharesProps) {
  const [, setLocation] = useLocation();
  const createPostWithSharedContent = usePostWithSharedContentCreate();

  const onSharePost = async () => {
    if (createPostWithSharedContent.loading) {
      return;
    }
    const newPost = await createPostWithSharedContent.execute({ postID: post.id, content: '' });
    toast.success('🥳 Your post was created!');

    setLocation(`/posts/${newPost.id}`)
  }

  return (
    <PostStatElement onClick={onSharePost}>
      <h3>20</h3>
      <p>
        <i className={createPostWithSharedContent.loading ? 'fa fa-spinner fa-spin' : 'fa fa-share'} />
      </p>
    </PostStatElement>
  )
}