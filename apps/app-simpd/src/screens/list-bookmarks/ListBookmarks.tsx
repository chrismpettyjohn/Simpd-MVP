import './ListBookmarks.css';
import { Helmet } from 'react-helmet'
import React, { useContext, useEffect } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { sessionContext, useBookmarkCollectionFetchMany } from '@simpd/lib-web';
import { BookmarksNavigation } from 'components/bookmarks-navigation/BookmarksNavigation';

export function ListBookmarksScreen() {
  const { session: { profile } } = useContext(sessionContext);
  const bookmarkCollectionFetchMany = useBookmarkCollectionFetchMany();

  const onLoadBookmarkCollections = async () => {
    await bookmarkCollectionFetchMany.fetch({
      profileIDs: [profile.id],
    });
  }

  useEffect(() => {
    onLoadBookmarkCollections();
  }, []);

  return (
    <>
      <Helmet>
        <title>Bookmarks - Simpd</title>
        <meta property="og:title" content="Bookmarks - Simpd" />
      </Helmet>
      <PageTitle title="Bookmarks" />
      <BookmarksNavigation bookmarkCollections={bookmarkCollectionFetchMany.data ?? []} onCreation={onLoadBookmarkCollections} />
    </>
  )
}
