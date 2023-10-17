import React from 'react'
import { FooterElement } from './SiteFooter.sty';
import { SiteLogo } from '../site-logo/SiteLogo';

export function SiteFooter() {
  return (
    <FooterElement>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <SiteLogo altLogo style={{ height: 75 }} />
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        &copy; 2023 Simpd LLC. All rights reserved.
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <img src="https://i.imgur.com/KIUe5zT.png" width={55} height={55} loading="lazy" />
        <img src="https://i.imgur.com/XPGGB2s.png" width={55} height={55} loading="lazy" />
        <img src="https://i.imgur.com/VIMT64N.png" width={55} height={55} loading="lazy" />
      </div>
    </FooterElement>
  )
}
