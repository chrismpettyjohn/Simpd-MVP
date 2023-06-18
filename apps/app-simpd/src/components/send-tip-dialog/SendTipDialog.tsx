import React, { SyntheticEvent, useState } from 'react';
import { Dialog } from '../dialog/Dialog';
import { SendTipDialogProps } from './SendTipDialog.types';
import { VerifiedUserGuard, useTipCreate } from '@simpd/lib-web';
import { toast } from 'react-toastify';
import { Button } from '../button/Button';

export function SendTipDialog({ profile }: SendTipDialogProps) {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const sendTip = useTipCreate();

  const isLoading = sendTip.loading;

  const onToggle = () => {
    setIsOpen(_ => !_);
  }

  const onSendTip = async (event?: SyntheticEvent) => {
    try {
      event?.preventDefault();
      if (!amount) {
        toast.error(`LMAO.  You can't tip $0`);
        return;
      }

      if (!message) {
        toast.error(`Don't be a pussy.  Say something.`);
        return;
      }
      await sendTip.execute({
        input: {
          amount,
          message,
          receivingProfileID: profile.id,
        }
      });
    } catch (e: any) {
      toast.error(`Something went wrong.  Try again later.`);
      console.error(e);
      throw e;
    }
  }

  return (
    <VerifiedUserGuard redirect={false}>
      <i className="fa fa-dollar-sign" onClick={onToggle} />
      {
        isOpen && (
          <Dialog header="Send Tip" onToggle={onToggle}>
            <form onSubmit={onSendTip}>
              <div>
                <label className="settings-profile-text04">Tip Amount</label>
                <input
                  type="number"
                  className="settings-profile-textinput1 input"
                  value={amount}
                  onChange={e => setAmount(Number(e.target?.value ?? 0))}
                />
                <br />
                <label className="settings-profile-text04">Note</label>
                <textarea
                  className="settings-profile-textarea textarea"
                  value={message}
                  onChange={e => setMessage(e.target?.value ?? '')}
                />
              </div>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <Button type="button" disabled={isLoading} onClick={onSendTip}>
                  {isLoading ? <i className="fa fa-spinner fa-spin" /> : <>Send Tip</>}
                </Button>
              </div>
            </form>
          </Dialog>
        )
      }
    </VerifiedUserGuard>
  )
}