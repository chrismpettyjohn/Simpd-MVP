import React, { useContext } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { sessionContext } from '@simpd/lib-web';
import { UserContainer } from 'layout/user-container/UserContainer';
import { GuestContainer } from 'components/guest-container/GuestContainer';

export function PageNotFoundScreen() {
  const { session } = useContext(sessionContext);
  const Container = session ? UserContainer : GuestContainer;
  return (
    <Container>
      <PageTitle title="Page Not Found" />
      <h1>page not found</h1>
    </Container>
  )
}
