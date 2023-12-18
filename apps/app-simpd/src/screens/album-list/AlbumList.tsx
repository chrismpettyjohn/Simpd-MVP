import React, { useContext } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { sessionContext } from '@simpd/lib-web';

export function AlbumListScreen() {
  const { session } = useContext(sessionContext);

  return (
    <UserContainer>
      <PageTitle title="Albums" />
      <h1>Albums</h1>
    </UserContainer>
  )
}
