import React, { useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { Link, useRoute } from 'wouter';
import { Grid } from 'components/grid/Grid';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from '../../layout/user-container/UserContainer.styled';
import { SiteSidebar } from 'layout/site-sidebar/SiteSidebar';
import { useBookmarkCollectionFetchOne } from '@simpd/lib-web';
import { BookmarkCollectionPreview } from 'components/bookmark-collection-preview/BookmarkCollectionPreview';
import { SiteHeader } from 'layout/site-header/SiteHeader';
import { BookmarkCollectionViewContentHeaderInformation } from 'screens/bookmark-collection-view/BookmarkCollectionView.styled';
import { UserContainer } from 'layout/user-container/UserContainer';

export function BookmarkCollectionViewScreen() {
  const [, params] = useRoute<{ bookmarkCollectionID: string }>('/favorites/:bookmarkCollectionID');
  const bookmarkCollectionID = Number(params!.bookmarkCollectionID);
  const bookmarkCollectionFetchOne = useBookmarkCollectionFetchOne();

  const onLoadBookmarkCollection = async () => {
    await bookmarkCollectionFetchOne.fetch({
      id: bookmarkCollectionID
    });
  }

  useEffect(() => {
    onLoadBookmarkCollection();
  }, []);

  const siteHeader = (
    <BookmarkCollectionViewContentHeaderInformation>
      <div style={{ width: '100%' }}>

        <Link href="/favorites">
          <i className="fa fa-caret-left fa-2x" style={{ marginRight: 8, cursor: 'pointer' }} />
        </Link>
      </div>
      <div style={{ width: '100%' }}>
        <h5 style={{ margin: 0 }}>Viewing favorites:</h5>
        <h1 style={{ margin: 0 }}>{bookmarkCollectionFetchOne.data?.name ?? `#${bookmarkCollectionID}`}</h1>
      </div>
    </BookmarkCollectionViewContentHeaderInformation>
  )

  return (
    <UserContainer headerProps={{ children: siteHeader, showUser: false }}>
      <PageTitle title="Albums Content" />
      <Grid>
        {bookmarkCollectionFetchOne.data ? <BookmarkCollectionPreview bookmarkCollection={bookmarkCollectionFetchOne.data} /> : <i className="fa fa-spinner fa-spin" />}
      </Grid>
    </UserContainer>
  )
}
