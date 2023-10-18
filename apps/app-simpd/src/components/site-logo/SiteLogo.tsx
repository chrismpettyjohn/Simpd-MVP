import React from 'react';
import { SiteLogoProps } from './SiteLogo.types';

export function SiteLogo({ altLogo = false, ...props }: SiteLogoProps) {
  const logoSource = altLogo ? 'https://i.imgur.com/6TQEegH.png' : 'https://i.imgur.com/cZYEJJd.png'
  return (
    <img src={logoSource} style={{ objectFit: 'cover', height: '100%', width: '100%' }} {...props} />
  )
}