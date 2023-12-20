import React, { useContext, useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { sessionContext, useBookmarkCollectionFetchMany } from '@simpd/lib-web';
import { BookmarksNavigation } from '../../components/bookmarks-navigation/BookmarksNavigation';

export function BookmarkCollectionListScreen() {
  const { session } = useContext(sessionContext);
  const bookmarkCollectionFetchMany = useBookmarkCollectionFetchMany();

  const onLoadBookmarkCollections = async () => {
    await bookmarkCollectionFetchMany.fetch({
      profileIDs: [session!.profileID],
    });
  }

  useEffect(() => {
    onLoadBookmarkCollections();
  }, []);

  return (
    <UserContainer>
      <PageTitle title="Bookmarks" />
      <BookmarksNavigation bookmarkCollections={bookmarkCollectionFetchMany.data ?? []} onCreation={onLoadBookmarkCollections} />
    </UserContainer>
  )
}
