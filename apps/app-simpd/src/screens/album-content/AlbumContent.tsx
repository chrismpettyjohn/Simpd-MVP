import React, { useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { Link, useRoute } from 'wouter';
import { Grid } from 'components/grid/Grid';
import { useAlbumFetchOne } from '@simpd/lib-web';
import { UserContainerElement, UserContainerInnerContent, UserContainerPageContent, UserContainerPageInnerContent } from '../../layout/user-container/UserContainer.styled';
import { SiteSidebar } from 'layout/site-sidebar/SiteSidebar';
import { AlbumContentHeaderInformation } from 'screens/album-content/AlbumContent.styled';
import { AlbumPreview } from 'components/album-preview/AlbumPreview';
import { AlbumEditDialog } from 'components/album-edit-dialog/AlbumEditDialog';
import { SiteHeader } from 'layout/site-header/SiteHeader';
import { UserContainer } from 'layout/user-container/UserContainer';

export function AlbumContentScreen() {
  const [, params] = useRoute<{ albumID?: string }>('/albums/:albumID');
  const albumID: number = Number(params!.albumID)
  const fetchAlbum = useAlbumFetchOne();

  async function refresh() {
    await fetchAlbum.fetch({ id: albumID })
  }

  useEffect(() => {
    if (!albumID) {
      return;
    }
    refresh();
  }, [albumID]);

  const spinner = <i className="fa fa-spinner fa-spin" />

  const albumHeader = (
    <AlbumContentHeaderInformation >
      <div style={{ width: '100%' }}>

        <Link href="/albums">
          <i className="fa fa-caret-left fa-2x" style={{ marginRight: 8, cursor: 'pointer' }} />
        </Link>
      </div>
      <div style={{ width: '100%' }}>
        <h5 style={{ margin: 0 }}>Viewing album:</h5>
        <h1 style={{ margin: 0 }}>{fetchAlbum.data?.name ?? `#${albumID}`}</h1>
      </div>

      <div style={{ width: '100%' }}>
        {fetchAlbum.data ? <AlbumEditDialog album={fetchAlbum.data} onChanges={refresh} /> : spinner}

      </div>
    </AlbumContentHeaderInformation >
  )

  return (
    <UserContainer headerProps={{ children: albumHeader, showUser: false }}>
      <PageTitle title="Albums Content" />
      <Grid>
        {fetchAlbum.data ? <AlbumPreview album={fetchAlbum.data} /> : spinner}
      </Grid>
    </UserContainer>
  )
}
