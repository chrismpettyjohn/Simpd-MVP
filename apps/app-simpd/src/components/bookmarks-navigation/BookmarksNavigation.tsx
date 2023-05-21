import React from 'react';
import { Link, useRoute } from 'wouter';
import { BookmarkCollectionLink } from './BookmarksNavigation.sty';
import { BookmarksNavigationProps } from './BookmarksNavigation.types';
import { AddBookmarkCollection } from '../add-bookmark-collection/AddBookmarkCollection';

export function BookmarksNavigation({ bookmarkCollections, onCreation }: BookmarksNavigationProps) {
  const [, params] = useRoute<{ bookmarkCollectionID: string }>('/bookmarks/:bookmarkCollectionID');

  return (
    <header data-role="Header" className="favorites-header1">
      {
        bookmarkCollections.map(_ => {
          const isActive = !!params?.bookmarkCollectionID && Number(params?.bookmarkCollectionID) === _.id;
          return (
            <Link to={`/bookmarks/${_.id}`} key={`bookmark_collection_${_.id}`}>
              <BookmarkCollectionLink className="favorites-text2" active={isActive}>
                {_.name}
              </BookmarkCollectionLink>
            </Link>
          )
        })
      }
      <span className="favorites-text3">
        <AddBookmarkCollection onCreation={onCreation} />
      </span>
    </header>
  )
}