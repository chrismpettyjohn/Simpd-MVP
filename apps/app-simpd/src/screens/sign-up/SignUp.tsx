import jwtDecode from 'jwt-decode';
import { Link, useLocation } from 'wouter';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import { ButtonBrand } from '../../components/button/Button.remix';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import { LOCAL_STORAGE_SESSION_TOKEN, SessionContents, UserCreateInput, sessionContext, useProfileCreateRandomized, useProfileFetchOne, useSessionCreate, useSessionFetchOne, useUserCreate } from '@simpd/lib-web';

export function SignUpScreen() {
  const [userDTO, setUserDTO] = useState<UserCreateInput>({
    email: '',
    password: '',
  })
  const userCreate = useUserCreate();
  const profileFetch = useProfileFetchOne();
  const [, setLocation] = useLocation();
  const sessionCreate = useSessionCreate();
  const sessionFetchOne = useSessionFetchOne();
  const { session, setSession } = useContext(sessionContext);
  const profileCreateRandomized = useProfileCreateRandomized();

  const isLoading = userCreate.loading || profileCreateRandomized.loading;

  const onChanges = (changes: Partial<UserCreateInput>) => {
    setUserDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    if (!userDTO.email || !userDTO.password) {
      return;
    }

    await userCreate.execute({ email: userDTO.email, password: userDTO.password });
    const bearerToken = await sessionCreate.execute({ email: userDTO.email, password: userDTO.password });
    localStorage.setItem(LOCAL_STORAGE_SESSION_TOKEN, bearerToken);
    const sessionContents: SessionContents = jwtDecode(bearerToken);
    const matchingSession = await sessionFetchOne.fetch({ id: sessionContents.sessionID })
    const matchingProfile = await profileFetch.fetch({ id: sessionContents.profileID })
    setSession({ ...matchingSession, profile: matchingProfile });
    const newProfile = await profileCreateRandomized.execute();
    setLocation(`/profiles/${newProfile.username}`);
  }

  return (
    <GuestContainer>
      <Form onSubmit={onSubmit}>
        <label>Email</label>
        <Input
          type="email"
          placeholder="Email Address"
          value={userDTO.email}
          onChange={e => onChanges({ email: e.currentTarget.value ?? '' })}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="Password"
          value={userDTO.password}
          onChange={e => onChanges({ password: e.currentTarget.value ?? '' })}
        />
        <ButtonBrand disabled={isLoading} type="submit" style={{ width: '100%' }}>
          {
            isLoading ? <i className="fa fa-spinner fa-spin" /> : <>Sign up</>
          }
        </ButtonBrand>
        <Link to="/sign-in">
          <a>
            Already have an account? <b>Sign in</b>
          </a>
        </Link>
      </Form>
    </GuestContainer>
  )
}