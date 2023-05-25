import React from 'react';
import { DropdownMenuProps } from './DropdownMenu.types';
import { createPortal } from 'react-dom';
import { DropdownMenuContainer } from './DropdownMenu.sty';

export function DropdownMenu({ children, mountOn }: DropdownMenuProps) {
  const dropdownContent = createPortal((
    <DropdownMenuContainer>
      {children}
    </DropdownMenuContainer>
  ), mountOn);
  return (
    <>
      {dropdownContent}
    </>
  )
}