import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { FullPageLoadingScreen, UserGuard, sessionContext, useProfileFetchMany } from '@simpd/lib-web';
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';

export function SwitchProfileScreen() {
  const { session } = useContext(sessionContext);
  const userProfiles = useProfileFetchMany({ userIDs: [session.userID] })

  useEffect(() => {
    if (!session?.userID) {
      return;
    }

    userProfiles.fetch();
  }, [session?.userID]);

  return (
    <UserGuard redirect>
      <Helmet>
        <title>Switch Profile - Simpd</title>
        <meta property="og:title" content="Switch Profile - Simpd" />
      </Helmet>
      <PageTitle title="My Profiles" />
      {
        userProfiles.loading && (
          <FullPageLoadingScreen />
        )
      }
      {
        userProfiles.data?.map(_ => (
          <Card key={`profile_${_.id}`} isExpandedDefault>
            <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-between' }}>
              <div>
                {_.username}
              </div>
              <div>
                <button>
                  LOL
                </button>
              </div>
            </div>
          </Card>
        ))
      }
    </UserGuard >
  )
}