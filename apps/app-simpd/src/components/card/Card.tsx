import React from 'react';
import { CardProps } from './Card.types';
import { CardBody, CardBodyContent, CardContainer, CardHeader, CardHeaderContent } from './Card.sty';

export function Card({ header, children }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        {
          header && (
            <CardHeaderContent>
              <h1>{header}</h1>
            </CardHeaderContent>
          )
        }
      </CardHeader>
      <CardBody>
        <CardBodyContent>
          {children}
        </CardBodyContent>
      </CardBody>
    </CardContainer>
  )
}