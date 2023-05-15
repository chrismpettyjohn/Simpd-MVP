import jwtDecode from 'jwt-decode';
import { useLocation } from 'wouter';
import React, { useContext, useEffect, useState } from 'react';
import { LOCAL_STORAGE_SESSION_TOKEN, ProfileFragment, sessionContext, useSessionChangeProfile } from '@simpd/lib-web';

export interface UseSwitchProfileResponse {
  execute(profile: ProfileFragment): void;
  loading: boolean;
}


export function useSwitchProfile(): UseSwitchProfileResponse {
  const [, setLocation] = useLocation();
  const sessionChangeProfile = useSessionChangeProfile();
  const { session, setSession } = useContext(sessionContext);
  const [currentProfileID, setCurrentProfileID] = useState(session.profileID);

  useEffect(() => {
    setCurrentProfileID(session.profileID);
  }, [session.profileID]);

  const onSwitchProfile = async (profile: ProfileFragment) => {
    if (sessionChangeProfile.loading) {
      return;
    }
    setCurrentProfileID(profile.id);
    const newBearerToken = await sessionChangeProfile.execute({ profileID: profile.id });
    const newSessionContents = jwtDecode(newBearerToken);
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, newBearerToken);
    setSession(newSessionContents);

    setLocation(`/profiles/${profile.username}`)
  }

  return {
    execute: onSwitchProfile,
    loading: currentProfileID !== session.profileID || sessionChangeProfile.loading,
  }
}