import React from 'react';
import { FullPageLoadingScreenContainer } from './FullPageLoadingScreen.sty';

export function FullPageLoadingScreen() {
  return (
    <FullPageLoadingScreenContainer>
      <i className="fa fa-spinner fa-spin" />
    </FullPageLoadingScreenContainer>
  )
}