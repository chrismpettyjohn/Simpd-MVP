import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { PostStatElement } from '../PostCard.styled';
import { PostSharesProps } from './PostShares.types';
import { usePostShares, usePostWithSharedContentCreate } from '@simpd/lib-web';

export function PostShares({ post }: PostSharesProps) {
  const [, setLocation] = useLocation();
  const fetchPostShares = usePostShares();
  const createPostWithSharedContent = usePostWithSharedContentCreate();

  const onSharePost = async () => {
    if (createPostWithSharedContent.loading) {
      return;
    }
    const newPost = await createPostWithSharedContent.execute({ postID: post.id, content: '' });
    toast.success('🥳 Your post was created!');

    setLocation(`/posts/${newPost.id}`)
  }

  useEffect(() => {
    fetchPostShares.fetch({ id: post.id });
  }, [post]);

  console.log(fetchPostShares)

  return (
    <PostStatElement onClick={onSharePost}>
      <i className="fa fa-share fa-2x" />
      <h4>share</h4>
      <p >
        <small>
          {
            fetchPostShares.loading ? <i className="fa fa-spinner fa-spin" /> : <>{fetchPostShares.data}</>
          }
        </small>
      </p>
    </PostStatElement>
  )
}