import React from 'react';
import { Link } from 'wouter';
import { BookmarksNavigationProps } from './BookmarksNavigation.types';
import { AddBookmarkCollection } from 'components/add-bookmark-collection/AddBookmarkCollection';

export function BookmarksNavigation({ bookmarkCollections, onCreation }: BookmarksNavigationProps) {
  return (
    <header data-role="Header" className="favorites-header1">
      {
        bookmarkCollections.map(_ => (
          <Link to={`/bookmarks/${_.id}`} key={`bookmark_collection_${_.id}`}>
            <span className="favorites-text2">
              {_.name}
            </span>
          </Link>
        ))
      }
      <span className="favorites-text3">
        <AddBookmarkCollection onCreation={onCreation} />
      </span>
    </header>
  )
}