import React, { useState } from 'react';
import { Dialog } from '../dialog/Dialog';
import { VerifiedUserGuard } from '@simpd/lib-web';
import { SendTipDialogProps } from './SendTipDialog.types';

export function SendTipDialog({ profile }: SendTipDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  return (
    <VerifiedUserGuard redirect={false}>
      <i className="fa fa-dollar-sign" onClick={onToggle} />
      {
        isOpen && (
          <Dialog header="Send Tip" onToggle={onToggle}>
            be a simp.  send money to {profile.displayName}
          </Dialog>
        )
      }
    </VerifiedUserGuard>
  )
}