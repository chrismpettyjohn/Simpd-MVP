import React from 'react';
import { CardProps } from './Card.types';
import { CardBody, CardBodyContent, CardContainer, CardHeader, CardHeaderContent } from './Card.sty';

export function Card({ header, children }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <CardHeaderContent>
          <h1>{header}</h1>
          <svg viewBox="0 0 329.1428571428571 1024">
            <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
        </CardHeaderContent>
      </CardHeader>
      <CardBody>
        <CardBodyContent>
          {children}
        </CardBodyContent>
      </CardBody>
    </CardContainer>
  )
}