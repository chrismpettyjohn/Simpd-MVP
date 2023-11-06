import React, { useState } from 'react';
import { CardBody, CardContainer } from '../card/Card.sty';
import { CardAccordionProps } from './CardAccordion.types';
import { CardAccordionHeaderContent } from './CardAccordion.sty';

export function CardAccordion({ defaultIsOpen = false, header, children }: CardAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  return (
    <CardContainer>
      <>
        {
          header && (
            <CardAccordionHeaderContent onClick={onToggle}>
              <h1>{header}</h1>
              <i className={`fa ${isOpen ? 'fa-caret-down' : 'fa-caret-right'}`} />
            </CardAccordionHeaderContent>
          )
        }
      </>
      <CardBody>
        {
          isOpen && (
            <>
              {children}
            </>
          )
        }
      </CardBody>
    </CardContainer>
  )
}