import { useProfileFetchOne } from '@simpd/lib-web';
import { UserContainer } from 'layout/user-container/UserContainer';
import React, { useEffect } from 'react';
import { useRoute } from 'wouter';

export function VideoCallScreen() {
  const profileFetchOne = useProfileFetchOne();
  const [, params] = useRoute('/video-call/:username');
  const username = params?.username ?? '';

  const onLoadProfile = async () => {
    await profileFetchOne.fetch({ username });
  }

  useEffect(() => {
    onLoadProfile();
  }, [username]);

  return (
    <UserContainer headerProps={{ showUser: false }}>
      video call
    </UserContainer>
  )
}