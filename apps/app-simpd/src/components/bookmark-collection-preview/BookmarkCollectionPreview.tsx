import { BookmarkCollectionPreviewElement } from 'components/bookmark-collection-preview/BookmarkCollectionPreview.styled';
import { BookmarkCollectionPreviewProps } from 'components/bookmark-collection-preview/BookmarkCollectionPreview.types';
import React from 'react';
import { Link } from 'wouter';

export function BookmarkCollectionPreview({ bookmarkCollection }: BookmarkCollectionPreviewProps) {
  return (
    <Link href={`/bookmarks/${bookmarkCollection.id}`} >
      <BookmarkCollectionPreviewElement>
        <img src="https://i.imgur.com/NSg0UWJ.png" />
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>{bookmarkCollection.name}</div>
        </div>
      </BookmarkCollectionPreviewElement>
    </Link>
  )
}