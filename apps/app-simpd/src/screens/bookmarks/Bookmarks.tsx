import './Bookmarks.css';
import { Helmet } from 'react-helmet'
import React, { useContext, useEffect } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { sessionContext, useBookmarkCollectionFetchMany } from '@simpd/lib-web';
import { AddBookmarkCollection } from './add-bookmark-collection/AddBookmarkCollection';

export function BookmarksScreen() {
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
      <header data-role="Header" className="favorites-header1">
        {
          bookmarkCollectionFetchMany.data?.map(_ => (
            <span className="favorites-text2" key={`bookmark_collection_${_.id}`}>
              {_.name}
            </span>
          ))
        }
        <span className="favorites-text3">
          <AddBookmarkCollection onCreation={onLoadBookmarkCollections} />
        </span>
      </header>
    </>
  )
}
