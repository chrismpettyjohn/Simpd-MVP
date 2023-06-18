import React from 'react';
import { createPortal } from 'react-dom';
import { DialogProps } from './Dialog.types';
import { DialogOverlay, DialogContainer, DialogContainerHeader } from './Dialog.sty';

export function Dialog({ header, children, onToggle = () => { } }: DialogProps) {
  const dialogContent = (
    <DialogContainer>
      {header && (
        <DialogContainerHeader>
          {header}
        </DialogContainerHeader>
      )}
      {header && (
        <DialogContainerHeader>
          {header}
        </DialogContainerHeader>
      )}
      {children}
    </DialogContainer>
  )

  return (
    <>
      {createPortal(<DialogOverlay onClick={onToggle} />, document.getElementById('root')!)}
      {createPortal(dialogContent, document.getElementById('root')!)}
    </>
  )
}