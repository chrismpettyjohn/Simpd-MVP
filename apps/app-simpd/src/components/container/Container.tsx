import React from 'react';
import { ContainerProps } from './Container.types';
import { ContainerElement } from './Container.styled';

export function Container({ children, ...props }: ContainerProps) {
  return (
    <ContainerElement {...props}>
      {children}
    </ContainerElement>
  )
}