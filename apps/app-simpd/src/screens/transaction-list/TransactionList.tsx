import React from 'react';
import { PageTitle } from 'components/page-title/PageTitle';
import { UserContainer } from 'layout/user-container/UserContainer';

export function TransactionList() {
  return (
    <UserContainer>
      <PageTitle title="Transactions" />
      <h1>Transactions</h1>
    </UserContainer>
  )
}