import React from 'react';
import { ButtonElement } from './Button.sty';
import { ButtonProps } from './Button.types';

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonElement {...props}>
      {children}
    </ButtonElement>
  )
}