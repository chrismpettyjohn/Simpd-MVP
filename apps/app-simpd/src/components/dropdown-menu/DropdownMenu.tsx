import React from 'react';
import { createPortal } from 'react-dom';
import { ClickOutsideDetector } from '@simpd/lib-web';
import { DropdownMenuProps } from './DropdownMenu.types';
import { DropdownMenuContainer } from './DropdownMenu.sty';

export function DropdownMenu({ children, mountOn, onToggle }: DropdownMenuProps) {
  const dropdownContent = createPortal((
    <DropdownMenuContainer>
      {children}
    </DropdownMenuContainer>
  ), mountOn);
  return (
    <>
      <ClickOutsideDetector listen onClickOutside={onToggle} ignore={mountOn} />
      {dropdownContent}
    </>
  )
}