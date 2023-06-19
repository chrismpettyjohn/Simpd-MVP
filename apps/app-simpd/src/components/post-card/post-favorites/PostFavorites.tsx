import { toast } from 'react-toastify';
import { Dropdown, Space } from 'antd';
import { PostStatElement } from '../PostCard.styled';
import { PostFavoritesProps } from './PostFavorites.types';
import React, { SyntheticEvent, useContext, useEffect, useMemo, useRef } from 'react';
import { sessionContext, useBookmarkCollectionFetchMany, useBookmarkCreate, usePostFavorites } from '@simpd/lib-web';

export function PostFavorites({ post }: PostFavoritesProps) {
  const createBookmark = useBookmarkCreate();
  const fetchPostFavorites = usePostFavorites();
  const { session } = useContext(sessionContext);
  const dropdownRef = useRef<HTMLHeadingElement>(null);
  const fetchBookmarkCollections = useBookmarkCollectionFetchMany();

  const onShareToCollection = async (bookmarkCollectionID: number) => {
    await createBookmark.execute({ bookmarkCollectionID, resourceID: post.id })
    toast.success(`❤️ Successfully added post to your favorites`);
  }

  const menuItems = useMemo(() => {
    if (!fetchBookmarkCollections.data) {
      return [];
    }

    return [
      {
        key: 'save-post',
        label: <b>Save post to...</b>
      },
      ...fetchBookmarkCollections.data?.map(_ => {
        const onClick = (event: SyntheticEvent) => {
          event.stopPropagation();
          onShareToCollection(_.id);
        }

        return {
          key: _.id,
          label: (
            <div style={{ cursor: 'pointer' }} onClick={onClick}>
              {_.name}
              <i className="fa fa-share" style={{ marginLeft: 4 }} />
            </div>
          ),
        }
      }),
    ]
  }, [fetchBookmarkCollections.data]);

  useEffect(() => {
    fetchBookmarkCollections.fetch({ profileIDs: [session!.profileID] });
    fetchPostFavorites.fetch({ id: post.id });
  }, [session!.profileID]);

  const isLoading = fetchPostFavorites.loading || createBookmark.loading;

  return (
    <>
      <PostStatElement>
        <h3 ref={dropdownRef}>{fetchPostFavorites.data ?? 0}</h3>
        <p>
          {
            isLoading && <i className="fa fa-spinner fa-spin" />
          }
          {!isLoading && (
            <>
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown menu={{ items: menuItems }} placement="bottomLeft">
                    <i className="fa fa-heart" />
                  </Dropdown>
                </Space>
              </Space>
            </>
          )}
        </p>
      </PostStatElement>

    </>
  )
}
