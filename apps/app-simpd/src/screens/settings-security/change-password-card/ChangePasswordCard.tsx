import { Button } from 'components/button/Button';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { sessionContext, useUserChangePassword } from '@simpd/lib-web';
import { CardAccordion } from 'components/card-accordion/CardAccordion';

export function ChangePasswordCard() {
  const { session } = useContext(sessionContext);
  const changePassword = useUserChangePassword();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');

  const onChangePassword = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (changePassword.loading) {
      return;
    }

    if (!currentPassword || !newPassword || !newPasswordAgain) {
      return;
    }

    if (newPassword !== newPasswordAgain) {
      return;
    }

    changePassword.execute({ userID: session!.userID, input: { currentPassword, newPassword, newPasswordAgain } })
  }

  return (
    <CardAccordion defaultIsOpen header="Change Password">
      <form onSubmit={onChangePassword}>
        <label className="settings-profile-text02">Current Password</label>
        <input
          type="text"
          className="settings-profile-textinput input"
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
        />
        <br /><br />
        <label className="settings-profile-text03">New Password</label>
        <input
          type="text"
          className="settings-profile-textinput1 input"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
        <br /><br />
        <label className="settings-profile-text04">Confirm New Password</label>
        <input
          type="text"
          className="settings-profile-textinput1 input"
          value={newPasswordAgain}
          onChange={e => setNewPasswordAgain(e.target.value)}
        />
        <br /><br />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          <Button type="submit" disabled={changePassword.loading}>
            {changePassword.loading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
          </Button>
        </div>
      </form>
    </CardAccordion>
  )
}