import { ProfileFragment, useProfileFetchMany } from '@simpd/lib-web';
import { Modal } from 'antd';
import { ProfileSelect } from '../profile-select/ProfileSelect';
import React, { useEffect, useState } from 'react';

export function MessageCreateDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipientProfileID, setRecipientProfileID] = useState<number>();
  const contacts = useProfileFetchMany();

  async function onFetchContacts() {
    await contacts.fetch({});
  }

  useEffect(() => {
    onFetchContacts();
  }, []);

  function toggle() {
    setIsOpen(_ => !_);
  }

  function onChangeRecipient(profile?: ProfileFragment) {
    setRecipientProfileID(profile?.id);
  }

  return (
    <>
      <i className="fa fa-pen-square fa-3x" style={{ cursor: 'pointer' }} onClick={toggle} />
      {
        isOpen && (
          <Modal title="Start Conversation" open onCancel={toggle}>
            <div>

              <label>Recipient</label>
              <ProfileSelect profiles={contacts.data} profileID={recipientProfileID} onChange={onChangeRecipient} />
            </div>
          </Modal>

        )
      }
    </>
  )
}