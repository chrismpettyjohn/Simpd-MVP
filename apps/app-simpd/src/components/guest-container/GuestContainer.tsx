import React from 'react';
import { Card } from '../card/Card';
import { SiteLogo } from '../../layout/site-logo/SiteLogo';
import { SiteFooter } from '../../layout/site-footer/SiteFooter';
import { SiteCaption } from '../../layout/site-caption/SiteCaption';
import { GuestContainerProps } from './GuestContainer.types';
import { GuestContainerElement } from './GuestContainer.sty';

export function GuestContainer({ children }: GuestContainerProps) {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh', }}>
        <div style={{ display: 'flex', flex: 1 }}>
          <GuestContainerElement>
            <SiteLogo style={{ height: '7em' }} />
            <SiteCaption />
            <div>
              <Card style={{ height: 400, width: 600 }}>
                {children}
              </Card>
            </div>
          </GuestContainerElement>
        </div>
        <img src="https://static.wixstatic.com/media/502135_e27572d936094e359f829ddcd2ab387d~mv2.jpg/v1/fill/w_429,h_604,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/alex-azabache--Hm_xIcYbUY-unsplash.jpg" style={{ height: '100%' }} />
      </div>
      <SiteFooter />
    </>
  )
}