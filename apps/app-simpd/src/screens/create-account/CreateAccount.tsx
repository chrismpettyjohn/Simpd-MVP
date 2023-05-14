import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';
import { CreateUserForm } from './create-user-form/CreateUserForm';
import { GuestGuard, UserCreateInput, sessionContext, useProfileCreateRandomized, useUserCreate } from '@simpd/lib-web';

export function CreateAccountScreen() {
  const userCreate = useUserCreate();
  const { setSession } = useContext(sessionContext);
  const profileCreateRandomized = useProfileCreateRandomized();

  const isLoading = userCreate.loading || profileCreateRandomized.loading;

  const onCreateUser = async (newUserDTO: UserCreateInput) => {
    if (isLoading) {
      return;
    }

    const newUser = await userCreate.execute(newUserDTO);


  }

  return (
    <GuestGuard redirect>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Create account" />
      <Card>
        <CreateUserForm onSave={onCreateUser} loading={isLoading} />
      </Card>
    </GuestGuard>
  )
}