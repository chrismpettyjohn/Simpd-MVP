import { AlbumPreviewElement } from 'components/album-preview/AlbumPreview.styled';
import { AlbumPreviewProps } from 'components/album-preview/AlbumPreview.types';
import React from 'react';
import { Link } from 'wouter';

export function AlbumPreview({ album }: AlbumPreviewProps) {
  return (
    <Link href={`/albums/${album.id}`} >
      <AlbumPreviewElement>
        <img src="https://i.imgur.com/NSg0UWJ.png" />
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>{album.name}</div>
          <div>{album.name}</div>
        </div>
      </AlbumPreviewElement>
    </Link>
  )
}