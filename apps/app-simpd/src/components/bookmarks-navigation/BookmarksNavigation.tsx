import React from 'react';
import { Link, useRoute } from 'wouter';
import { BookmarkCollectionLink, BookmarkCollectionList } from './BookmarksNavigation.sty';
import { BookmarksNavigationProps } from './BookmarksNavigation.types';
import { AddBookmarkCollection } from '../add-bookmark-collection/AddBookmarkCollection';

export function BookmarksNavigation({ bookmarkCollections, onCreation }: BookmarksNavigationProps) {
  const [, params] = useRoute<{ favoriteID: string }>('/favorites/:favoriteID');
  const favoriteID = params?.favoriteID ? Number(params.favoriteID) : undefined;

  return (
    <BookmarkCollectionList>
      {
        bookmarkCollections.map(_ => {
          const isActive = favoriteID === _.id;
          return (
            <Link to={`/favorites/${_.id}`} key={`favorite${_.id}`}>
              <BookmarkCollectionLink active={isActive}>
                {_.name}
              </BookmarkCollectionLink>
            </Link>
          )
        })
      }
      <span>
        <AddBookmarkCollection onCreation={onCreation} />
      </span>
    </BookmarkCollectionList>
  )
}