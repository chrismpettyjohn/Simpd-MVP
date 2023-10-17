import React from 'react';
import { GridProps } from './Grid.types';
import { GridElement } from './Grid.sty';

export function Grid({ children, ...props }: GridProps) {
  return (
    <GridElement {...props}>
      <>
        {children}
      </>
    </GridElement>
  )
}