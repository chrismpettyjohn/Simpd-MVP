import React, { useState } from 'react';
import { CardAccordionProps } from './CardAccordion.types';
import { CardAccordionHeaderContent } from './CardAccordion.sty';
import { CardBody, CardBodyContent, CardContainer, CardHeader } from '../card/Card.sty';

export function CardAccordion({ defaultIsOpen = false, header, children }: CardAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  return (
    <CardContainer>
      <CardHeader>
        {
          header && (
            <CardAccordionHeaderContent onClick={onToggle}>
              <h1>{header}</h1>
              <i className={`fa ${isOpen ? 'fa-caret-down' : 'fa-caret-right'}`} />
            </CardAccordionHeaderContent>
          )
        }
      </CardHeader>
      <CardBody>
        {
          isOpen && (
            <CardBodyContent>
              {children}
            </CardBodyContent>
          )
        }
      </CardBody>
    </CardContainer>
  )
}