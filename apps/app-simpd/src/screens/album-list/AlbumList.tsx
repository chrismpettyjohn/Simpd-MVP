import React, { useEffect } from 'react'
import { PageTitle } from '../../components/page-title/PageTitle';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { useAlbumFetchMany } from '@simpd/lib-web';
import { CreateAlbumDialog } from 'components/create-album-dialog/CreateAlbumDialog';
import { useRoute } from 'wouter';
import { AlbumPreview } from 'components/album-preview/AlbumPreview';
import { Grid } from 'components/grid/Grid';

export function AlbumListScreen() {
  const [, params] = useRoute<{ albumID?: string }>('/albums/:albumID?');
  const albumID: number | undefined = params?.albumID ? Number(params.albumID) : undefined;
  const fetchAlbums = useAlbumFetchMany();

  useEffect(() => {
    fetchAlbums.fetch({})
  }, []);

  return (
    <UserContainer>
      <PageTitle title="Albums" />
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>Albums {albumID}</h1>
        <CreateAlbumDialog />
      </div>
      <Grid>
        {
          fetchAlbums?.data?.length === 0 && <p>No albums found.</p>
        }
        {
          fetchAlbums?.data?.map(album => (
            <AlbumPreview album={album} key={`album_${album.id}`} />
          ))
        }
      </Grid>
    </UserContainer>
  )
}
