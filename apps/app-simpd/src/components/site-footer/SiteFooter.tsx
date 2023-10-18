import React from 'react'
import { SiteLogo } from '../site-logo/SiteLogo';
import { FooterContentElement, FooterElement } from './SiteFooter.sty';

export function SiteFooter() {
  return (
    <FooterElement>
      <FooterContentElement>
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
      </FooterContentElement>
    </FooterElement>
  )
}
