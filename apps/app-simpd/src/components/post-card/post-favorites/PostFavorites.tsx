import { toast } from 'react-toastify';
import { PostStatElement } from '../PostCard.styled';
import { PostFavoritesProps } from './PostFavorites.types';
import { DropdownMenu } from 'components/dropdown-menu/DropdownMenu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { DropdownMenuOption } from 'components/dropdown-menu/DropdownMenu.sty';
import { sessionContext, useBookmarkCollectionFetchMany, useBookmarkCreate } from '@simpd/lib-web';

export function PostFavorites({ post }: PostFavoritesProps) {
  const createBookmark = useBookmarkCreate();
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useContext(sessionContext);
  const dropdownRef = useRef<HTMLHeadingElement>(null);
  const fetchBookmarkCollections = useBookmarkCollectionFetchMany();

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onShareToCollection = async (bookmarkCollectionID: number) => {
    await createBookmark.execute({ bookmarkCollectionID, resourceID: post.id })
    toast.success(`Successfully added post to your favorites`);
  }

  useEffect(() => {
    fetchBookmarkCollections.fetch({ profileIDs: [session!.profileID] });
  }, [session!.profileID]);

  return (
    <PostStatElement onClick={onToggle}>
      <div style={{ position: 'relative' }}>
        <h3 ref={dropdownRef}>20</h3>
        {
          dropdownRef?.current && isOpen && (
            <DropdownMenu mountOn={dropdownRef.current} onToggle={() => setIsOpen(false)}>
              <div style={{ paddingBottom: '1rem', fontWeight: 500 }}>Add to:</div>
              {
                fetchBookmarkCollections.data?.map(_ => (
                  <DropdownMenuOption key={`bookmark_collection_${_.id}`} onClick={() => onShareToCollection(_.id)}>
                    {_.name}
                  </DropdownMenuOption>
                ))
              }
            </DropdownMenu>
          )
        }
      </div>
      <p>
        <i className="fa fa-heart" />
      </p>
    </PostStatElement>
  )
}