import React from 'react';
import { PageTitle } from 'components/page-title/PageTitle';
import { UserContainer } from 'layout/user-container/UserContainer';

export function TransactionListScreen() {
  return (
    <UserContainer>
      <PageTitle title="Contributions" />
      <h1>Contributions</h1>
    </UserContainer>
  )
}