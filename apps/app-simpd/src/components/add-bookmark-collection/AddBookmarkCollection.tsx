import React from 'react';
import { Button } from '../button/Button';
import { useBookmarkCollectionCreateRandomized } from '@simpd/lib-web';
import { AddBookmarkCollectionProps } from './AddBookmarkCollection.types';

export function AddBookmarkCollection({ onCreation }: AddBookmarkCollectionProps) {
  const bookmarkCollectionCreateRandomized = useBookmarkCollectionCreateRandomized();

  const onBookmarkCollectionCreate = async () => {
    if (bookmarkCollectionCreateRandomized.loading) {
      return;
    }
    const newCollection = await bookmarkCollectionCreateRandomized.execute();
    onCreation(newCollection);
  }

  return (
    <Button onClick={onBookmarkCollectionCreate}>
      {
        bookmarkCollectionCreateRandomized.loading && (
          <>
            <i className="fa fa-spinner fa-spin" style={{ marginRight: 4 }} />
            Creating...
          </>
        )
      }
      {
        !bookmarkCollectionCreateRandomized.loading && (
          <>
            <i className="fa fa-plus" style={{ marginRight: 4 }} />
            Create
          </>
        )
      }
    </Button>
  )
}