import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import React, { useContext, useEffect } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { BookmarksNavigation } from 'components/bookmarks-navigation/BookmarksNavigation';
import { BookmarkCollectionFragment, FullPageLoadingScreen, sessionContext, useBookmarkCollectionFetchMany } from '@simpd/lib-web';
import { Card } from 'components/card/Card';

export function ViewBookmarksScreen() {
  const [, params] = useRoute<{ bookmarkCollectionID: string }>('/bookmarks/:bookmarkCollectionID');
  const bookmarkCollectionID = Number(params!.bookmarkCollectionID);
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

  const bookmarkCollection: BookmarkCollectionFragment | undefined = bookmarkCollectionFetchMany.data?.find(_ => _.id === bookmarkCollectionID);

  return (
    <>
      <Helmet>
        <title>Bookmarks - Simpd</title>
        <meta property="og:title" content="Bookmarks - Simpd" />
      </Helmet>
      <PageTitle title="Bookmarks" />
      <BookmarksNavigation bookmarkCollections={bookmarkCollectionFetchMany.data ?? []} onCreation={onLoadBookmarkCollections} />
      {
        !bookmarkCollection && <FullPageLoadingScreen />
      }
      {
        bookmarkCollection && (
          <Card header={bookmarkCollection.name}>
            tt
          </Card>
        )
      }
    </>
  )
}
