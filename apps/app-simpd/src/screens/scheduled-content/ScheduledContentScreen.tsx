import { PageTitle } from 'components/page-title/PageTitle';
import { UserContainer } from 'layout/user-container/UserContainer';
import React from 'react';

export function ScheduledContentScreen() {
  return (
    <UserContainer>
      <PageTitle title="Scheduled Content" />
      <h1>Scheduled</h1>
    </UserContainer>
  )
}