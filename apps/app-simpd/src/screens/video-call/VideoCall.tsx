import { useProfileFetchOne } from '@simpd/lib-web';
import { MessageContainer } from 'layout/message-container/MessageContainer';
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
    <MessageContainer profile={profileFetchOne.data}>
      video call
    </MessageContainer>
  )
}