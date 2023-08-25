import React from 'react';
import { BugTestingNoticeCard } from './BugTestingNotice.styled';

export function BugTestingNotice() {
  return (
    <BugTestingNoticeCard>
      <b>CONFIDENTIAL</b>
      <p> ACCESS IS ONLY GRANTED TO AFFILIATES OF SIMPD LLC WITH WRITTEN APPROVAL</p>
      <br />
      <b>Beta Testing</b>
      <p>You may experience issues.  Please report all feedback <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHkx_QnipKpjAAIjWKX53zOkEs50bnoECvA13VvEPr33XOow/viewform" target="_blank" rel="noreferrer">here</a></p>
    </BugTestingNoticeCard>
  )
}