import { sessionContext } from '@simpd/lib-web';
import React, { useContext, useState } from 'react';
import { CardAccordion } from 'components/card-accordion/CardAccordion';

export function ProfileSettingsCard() {
  const { profile } = useContext(sessionContext);
  return (
    <CardAccordion defaultIsOpen header="Profile">
      <label className="settings-profile-text02">Username</label>
      <input
        type="text"
        className="settings-profile-textinput input"
      />
      <label className="settings-profile-text03">Display Name</label>
      <input
        type="text"
        className="settings-profile-textinput1 input"
      />
      <label className="settings-profile-text04">Bio</label>
      <textarea className="settings-profile-textarea textarea"></textarea>
      <label className="settings-profile-text05">Location</label>
      <input
        type="text"
        className="settings-profile-textinput2 input"
      />
      <label className="settings-profile-text06">Website</label>
      <input
        type="text"
        className="settings-profile-textinput3 input"
      />
      <label className="settings-profile-text07">Wishlist</label>
      <input
        type="text"
        className="settings-profile-textinput4 input"
      />
    </CardAccordion>
  )
}