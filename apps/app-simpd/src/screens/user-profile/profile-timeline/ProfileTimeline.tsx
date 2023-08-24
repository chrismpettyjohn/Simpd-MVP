import React from 'react';
import { ProfileTimelineProps } from './ProfileTimeline.types';
import { PostCard } from '../../../components/post-card/PostCard';

export function ProfileTimeline({ posts }: ProfileTimelineProps) {
  return (
    <>

      {
        posts.map(_ => <PostCard key={`profile_post_${_.id}`} post={_} hideAuthor />)
      }
    </>
  )
}