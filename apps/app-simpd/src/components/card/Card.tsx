import React, { useState } from 'react';
import { CardProps } from './Card.types';
import { CardBody, CardBodyContent, CardContainer, CardHeader, CardHeaderContent } from './Card.sty';

export function Card({ header, children, isExpandedDefault }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(!!isExpandedDefault);

  const onToggle = () => {
    setIsExpanded(_ => !_);
  }

  return (
    <CardContainer>
      <CardHeader>
        {
          header && (
            <CardHeaderContent>
              <h1>{header}</h1>
              <i className={`fa ${isExpanded ? 'fa-caret-down' : 'fa-caret-right'}`} onClick={onToggle} />
            </CardHeaderContent>
          )
        }
      </CardHeader>
      <CardBody>
        {
          isExpanded && (
            <CardBodyContent>
              {children}
            </CardBodyContent>
          )
        }
      </CardBody>
    </CardContainer>
  )
}