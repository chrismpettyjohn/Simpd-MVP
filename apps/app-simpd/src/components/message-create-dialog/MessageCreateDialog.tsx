import { UserFragment } from '@simpd/lib-web';
import { Modal } from 'antd';
import { UserSelect } from 'components/user-select/UserSelect';
import React, { useState } from 'react';

export function MessageCreateDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipientUserID, setRecipientUserID] = useState<number>();

  function toggle() {
    setIsOpen(_ => !_);
  }

  function onChangeRecipient(user?: UserFragment) {
    setRecipientUserID(user?.id);
  }

  return (
    <>
      <i className="fa fa-pen-square fa-3x" style={{ cursor: 'pointer' }} onClick={toggle} />
      {
        isOpen && (
          <Modal title="Start Conversation" open onCancel={toggle}>
            <div>

              <label>Recipient</label>
              <UserSelect onChange={onChangeRecipient} />
            </div>
          </Modal>

        )
      }
    </>
  )
}