import { toast } from 'react-toastify';
import { Button, Input, Modal } from 'antd';
import React, { SyntheticEvent, useMemo, useState } from 'react';
import { SendTipDialogProps } from './SendTipDialog.types';
import { VerifiedUserGuard, useTipCreate } from '@simpd/lib-web';

export function SendTipDialog({ profile }: SendTipDialogProps) {
  const [amount, setAmount] = useState('0.00');
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

      if (message === '') {
        toast.error(`Don't be a pussy.  Say something.`);
        return;
      }
      await sendTip.execute({
        input: {
          amountInDollarsAndCents: amount,
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

  const modalFooter = useMemo(() => {
    return (
      <Button disabled={isLoading} onClick={onSendTip}>
        {isLoading ? <i className="fa fa-spinner fa-spin" /> : <>Send Tip</>}
      </Button>
    )
  }, [isLoading]);

  return (
    <VerifiedUserGuard redirect={false}>
      <i className="fa fa-dollar-sign" onClick={onToggle} />
      {
        isOpen && (
          <Modal title="Send tip" open onCancel={onToggle} footer={modalFooter}>
            <form onSubmit={onSendTip}>
              <div>
                <label>Tip Amount</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value).toFixed(2))}
                />
                <br />
                <label>Note</label>
                <Input.TextArea
                  value={message}
                  onChange={e => setMessage(e.target?.value ?? '')}
                />
              </div>
            </form>
          </Modal>
        )
      }
    </VerifiedUserGuard>
  )
}
