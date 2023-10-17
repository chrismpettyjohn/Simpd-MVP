import React from 'react';
import { Link } from 'wouter';
import { SiteLogo } from '../../components/site-logo/SiteLogo';
import { ButtonBrand } from '../../components/button/Button.remix';
import { SiteFooter } from '../../components/site-footer/SiteFooter';
import { SignInBubbleElement, SignInBubbleGridElement, SignInContainerElement } from './SignIn.sty';

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

export function SignInScreen() {
  return (
    <SignInContainerElement>
      <SiteLogo style={{ height: '7em' }} />
      <h2>Be who you want to be,<br />see what you want to see.</h2>
      <Link to="/register">
        <ButtonBrand style={{ width: '50em' }}>Create an account</ButtonBrand>
      </Link>
      <div>
        Already have an account?
        <Link to="/sign-in">
          <b>Log In</b>
        </Link>
      </div>
      <SignInBubbleGridElement>
        {
          BUBBLE_IMAGES.map((image, i) => (

            <SignInBubbleElement key={`landing_page_bubble_${i}`} src={image} loading="lazy" />
          ))
        }
      </SignInBubbleGridElement>
      <SiteFooter />
    </SignInContainerElement>
  )
}