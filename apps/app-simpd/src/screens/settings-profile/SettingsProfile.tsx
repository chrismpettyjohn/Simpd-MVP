import './SettingsProfile.css';
import { Helmet } from 'react-helmet'
import React, { useContext } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { ProfileGuard, sessionContext } from '@simpd/lib-web';
import { CardAccordion } from 'components/card-accordion/CardAccordion';
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';

export function SettingsProfileScreen() {
  const { profile } = useContext(sessionContext);

  return (
    <ProfileGuard redirect>
      <Helmet>
        <title>Settings-Profile - Simpd</title>
        <meta property="og:title" content="Settings-Profile - Simpd" />
      </Helmet>
      <PageTitle title="Settings" />
      {
        profile && <UserProfileCard profile={profile} />
      }
      <div className="settings-profile-settings-navigation">
        <svg viewBox="0 0 1024 1024" className="settings-profile-icon">
          <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
        </svg>
        <svg
          viewBox="0 0 1170.2857142857142 1024"
          className="settings-profile-icon02"
        >
          <path d="M512 692.571c0-75.429-18.286-162.286-93.714-162.286-22.857 22.857-54.286 36.571-89.143 36.571s-66.286-13.714-89.143-36.571c-75.429 0-93.714 86.857-93.714 162.286 0 41.714 27.429 75.429 61.143 75.429h243.429c33.714 0 61.143-33.714 61.143-75.429zM438.857 438.857c0-60.571-49.143-109.714-109.714-109.714s-109.714 49.143-109.714 109.714 49.143 109.714 109.714 109.714 109.714-49.143 109.714-109.714zM1024 713.143v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM804.571 566.857v-36.571c0-10.286-8-18.286-18.286-18.286h-182.857c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h182.857c10.286 0 18.286-8 18.286-18.286zM1024 566.857v-36.571c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM1024 420.571v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM73.143 219.429h1024v-54.857c0-10.286-8-18.286-18.286-18.286h-987.429c-10.286 0-18.286 8-18.286 18.286v54.857zM1170.286 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-987.429c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h987.429c50.286 0 91.429 41.143 91.429 91.429z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="settings-profile-icon04">
          <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256zM512 512v382q118-38 200-143t98-239h-298zM512 512v-376l-298 132v244h298z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="settings-profile-icon06">
          <path d="M1025.5 800c0-288-256-224-256-448 0-18.56-1.788-34.42-5.048-47.928-16.83-113.018-92.156-203.72-189.772-231.36 0.866-3.948 1.32-8.032 1.32-12.21 0-33.278-28.8-60.502-64-60.502s-64 27.224-64 60.5c0 4.18 0.456 8.264 1.32 12.21-109.47 30.998-190.914 141.298-193.254 273.442-0.040 1.92-0.066 3.864-0.066 5.846 0 224.002-256 160.002-256 448.002 0 76.226 170.59 139.996 398.97 156.080 21.524 40.404 64.056 67.92 113.030 67.92s91.508-27.516 113.030-67.92c228.38-16.084 398.97-79.854 398.97-156.080 0-0.228-0.026-0.456-0.028-0.682l1.528 0.682zM826.246 854.096c-54.23 14.47-118.158 24.876-186.768 30.648-5.704-65.418-60.582-116.744-127.478-116.744s-121.774 51.326-127.478 116.744c-68.608-5.772-132.538-16.178-186.768-30.648-74.63-19.914-110.31-42.19-123.368-54.096 13.058-11.906 48.738-34.182 123.368-54.096 86.772-23.152 198.372-35.904 314.246-35.904s227.474 12.752 314.246 35.904c74.63 19.914 110.31 42.19 123.368 54.096-13.058 11.906-48.738 34.182-123.368 54.096z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="settings-profile-icon08">
          <path d="M1002.934 817.876l-460.552-394.76c21.448-40.298 33.618-86.282 33.618-135.116 0-159.058-128.942-288-288-288-29.094 0-57.172 4.332-83.646 12.354l166.39 166.39c24.89 24.89 24.89 65.62 0 90.51l-101.49 101.49c-24.89 24.89-65.62 24.89-90.51 0l-166.39-166.39c-8.022 26.474-12.354 54.552-12.354 83.646 0 159.058 128.942 288 288 288 48.834 0 94.818-12.17 135.116-33.62l394.76 460.552c22.908 26.724 62.016 28.226 86.904 3.338l101.492-101.492c24.888-24.888 23.386-63.994-3.338-86.902z"></path>
        </svg>
      </div>
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
      <CardAccordion header="Additional Info">
        <div style={{ height: 100 }}>
          Hello
        </div>
      </CardAccordion>
      <CardAccordion header="Additional Info">
        <div style={{ height: 100 }}>
          Hello
        </div>
      </CardAccordion>
      <CardAccordion header="Additional Info">
        <div style={{ height: 100 }}>
          Hello
        </div>
      </CardAccordion>
      <CardAccordion header="Additional Info">
        <div style={{ height: 100 }}>
          Hello
        </div>
      </CardAccordion>
    </ProfileGuard>
  )
}