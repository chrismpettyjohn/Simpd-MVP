import { PageTitle } from 'components/page-title/PageTitle';
import { UserContainer } from 'layout/user-container/UserContainer';
import React from 'react';

export function InsightsDashboardScreen() {
  return (
    <UserContainer>
      <PageTitle title="Insights" />
      <h1>Insights</h1>
    </UserContainer>
  )
}