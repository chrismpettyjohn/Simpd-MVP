import React from 'react';
import { Link } from 'wouter';
import { SiteLogo } from '../../components/site-logo/SiteLogo';
import { PageTitle } from '../../components/page-title/PageTitle';
import { SiteCaption } from '../../components/site-caption/SiteCaption';
import { SiteFooter } from '../../components/site-footer/SiteFooter';
import { LandingBubbleElement, LandingBubbleGridElement, LandingContainerElement } from './Landing.sty';

const BUBBLE_IMAGES: string[] = [
  'https://i.imgur.com/K631RIb.png',
  'https://i.imgur.com/yVTSNgT.png',
  'https://i.imgur.com/3GVT660.png',
  'https://i.imgur.com/CSjCUZf.png',
  'https://i.imgur.com/K631RIb.png',
  'https://i.imgur.com/yVTSNgT.png',
  'https://i.imgur.com/3GVT660.png',
  'https://i.imgur.com/CSjCUZf.png',
  'https://i.imgur.com/K631RIb.png',
  'https://i.imgur.com/yVTSNgT.png',
  'https://i.imgur.com/3GVT660.png',
  'https://i.imgur.com/CSjCUZf.png',

]

export function LandingScreen() {
  return (
    <>
      <PageTitle />
      <LandingContainerElement>
        <SiteLogo style={{ height: '7em' }} />
        <SiteCaption />
        <div style={{ display: 'flex', flex: 1 }}>
          <div>
            Already have an account?
            <Link to="/sign-in">
              <b>Log In</b>
            </Link>
          </div>
          <LandingBubbleGridElement>
            {
              BUBBLE_IMAGES.map((image, i) => (

                <LandingBubbleElement key={`landing_page_bubble_${i}`} src={image} loading="lazy" />
              ))
            }
          </LandingBubbleGridElement>
        </div>
        <SiteFooter />
      </LandingContainerElement>
    </>
  )
}