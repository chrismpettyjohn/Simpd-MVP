import './ListBookmarks.css';
import React, { useContext, useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { sessionContext, useBookmarkCollectionFetchMany } from '@simpd/lib-web';
import { BookmarksNavigation } from '../../components/bookmarks-navigation/BookmarksNavigation';

export function ListBookmarksScreen() {
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
    <>
      <PageTitle title="Bookmarks" />
      <BookmarksNavigation bookmarkCollections={bookmarkCollectionFetchMany.data ?? []} onCreation={onLoadBookmarkCollections} />
    </>
  )
}
