import React from 'react';
import { CardProps } from './Card.types';
import { CardBody, CardContainer } from './Card.sty';
import { Container } from '../container/Container';

export function Card({ header, children, ...props }: CardProps) {
  return (
    <CardContainer {...props}>
      <Container>
        {
          header && (
            <>
              <h1>{header}</h1>
            </>
          )
        }
        <CardBody>

          {children}
        </CardBody>
      </Container>
    </CardContainer>
  )
}