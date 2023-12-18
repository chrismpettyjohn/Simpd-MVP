import { PageTitle } from 'components/page-title/PageTitle';
import { UserContainer } from 'layout/user-container/UserContainer';
import React from 'react';

export function DraftsListScreen() {
  return (
    <UserContainer>
      <PageTitle title="Drafts" />
      <h1>Drafts</h1>
    </UserContainer>
  )
}