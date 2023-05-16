import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import React, { useContext, useEffect } from 'react'
import { PageTitle } from 'components/page-title/PageTitle';
import { CreateUserForm } from './create-user-form/CreateUserForm';
import { LOCAL_STORAGE_SESSION_TOKEN, UserCreateInput, sessionContext, useProfileCreateRandomized, useSessionCreate, useUserCreate } from '@simpd/lib-web';

export function CreateAccountScreen() {
  const userCreate = useUserCreate();
  const [, setLocation] = useLocation();
  const sessionCreate = useSessionCreate();
  const { session, setSession } = useContext(sessionContext);
  const profileCreateRandomized = useProfileCreateRandomized();

  const isLoading = userCreate.loading || profileCreateRandomized.loading;

  const onCreateUser = async (newUserDTO: UserCreateInput) => {
    await userCreate.execute(newUserDTO);
    const bearerToken = await sessionCreate.execute(newUserDTO);
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, bearerToken);
    setSession(bearerToken);
  }

  const onCreateProfile = async () => {
    const newProfile = await profileCreateRandomized.execute();
    setLocation(`/profiles/${newProfile.username}`);
  }

  useEffect(() => {
    if (session) {
      setLocation('/dashboard');
    }
  }, []);

  useEffect(() => {
    if (!session || isLoading) {
      return;
    }
    onCreateProfile();
  }, [session]);

  return (
    <>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Create account" />
      <Card>
        <CreateUserForm onSave={onCreateUser} loading={isLoading} />
      </Card>
    </>
  )
}