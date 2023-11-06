import React from 'react';
import { UserContainer } from '../../components/user-container/UserContainer';
import { CreateNewPostCard } from '../../components/create-new-post-card/CreateNewPostCard';

export function PostCreateScreen() {
  return (
    <UserContainer>
      <h1>Posts - Create</h1>
      <CreateNewPostCard onCreate={console.log} />
    </UserContainer>
  )
}