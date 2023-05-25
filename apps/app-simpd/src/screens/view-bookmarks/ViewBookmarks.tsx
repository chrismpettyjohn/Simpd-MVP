import { useRoute } from 'wouter';
import { Helmet } from 'react-helmet'
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { BookmarkCard } from 'components/bookmark-card/BookmarkCard';
import { BookmarksNavigation } from '../../components/bookmarks-navigation/BookmarksNavigation';
import { BookmarkCollectionFragment, sessionContext, useBookmarkCollectionFetchMany, useBookmarkFetchMany } from '@simpd/lib-web';

export function ViewBookmarksScreen() {
  const [, params] = useRoute<{ bookmarkCollectionID: string }>('/bookmarks/:bookmarkCollectionID');
  const bookmarkCollectionID = Number(params!.bookmarkCollectionID);
  const { session } = useContext(sessionContext);
  const bookmarkCollectionFetchMany = useBookmarkCollectionFetchMany();
  const bookmarkFetchMany = useBookmarkFetchMany();

  const isLoading = bookmarkCollectionFetchMany.loading || bookmarkFetchMany.loading;

  const onLoadBookmarkCollections = async () => {
    await bookmarkCollectionFetchMany.fetch({
      profileIDs: [session!.profileID],
    });
    await bookmarkFetchMany.fetch({ profileIDs: [session!.profileID] });
  }

  useEffect(() => {
    onLoadBookmarkCollections();
  }, []);

  const bookmarkCollection: BookmarkCollectionFragment | undefined = bookmarkCollectionFetchMany.data?.find(_ => _.id === bookmarkCollectionID);

  const activeBookmarks = bookmarkFetchMany.data?.filter(_ => _.bookmarkCollectionID === bookmarkCollection?.id) ?? [];

  return (
    <>
      <Helmet>
        <title>Bookmarks - Simpd</title>
        <meta property="og:title" content="Bookmarks - Simpd" />
      </Helmet>
      <PageTitle title="Bookmarks" />
      <BookmarksNavigation bookmarkCollections={bookmarkCollectionFetchMany.data ?? []} onCreation={onLoadBookmarkCollections} />
      {isLoading && <Card><i className="fa fa-spinner fa-spin" /></Card>}
      {activeBookmarks.map(_ => (
        <BookmarkCard bookmark={_} key={`favorite_bookmark_${_.id}`} />
      ))}
      {
        activeBookmarks.length === 0 && <Card><p>You don't have any bookmarks</p></Card>
      }
    </>
  )
}
