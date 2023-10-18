import jwtDecode from 'jwt-decode';
import { Link, useLocation } from 'wouter';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import { ButtonBrand } from '../../components/button/Button.remix';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { GuestContainer } from '../../components/guest-container/GuestContainer';
import { SessionContents, sessionContext, useProfileFetchOne, useSessionCreate, useSessionFetchOne } from '@simpd/lib-web';

export function SignInScreen() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const sessionCreate = useSessionCreate();
  const profileFetch = useProfileFetchOne();
  const sessionFetchOne = useSessionFetchOne();
  const [password, setPassword] = useState('');
  const { setSession } = useContext(sessionContext);

  const isDisabled = !email || !password;

  const onSessionCreate = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (isDisabled || sessionCreate.loading || !email || !password) {
      return;
    }

    try {
      const newSession = await sessionCreate.execute({ email, password });
      const sessionContents: SessionContents = jwtDecode(newSession);
      const matchingProfile = await profileFetch.fetch({ id: sessionContents.profileID })
      const matchingSession = await sessionFetchOne.fetch({ id: sessionContents.sessionID });
      setSession({ ...matchingSession, profile: matchingProfile });
      setLocation('/settings/profile');
    } catch (e) {
      alert('Something went wrong')
    }
  }

  return (
    <GuestContainer>
      <Form onSubmit={onSessionCreate}>
        <label>Email</label>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <ButtonBrand disabled={isDisabled} type="submit" style={{ width: '100%' }}>
          {
            sessionCreate.loading ? <i className="fa fa-spinner fa-spin" /> : <>Sign in</>
          }
        </ButtonBrand>
        <Link to="/sign-up">
          <a>
            Want to make an account? <b>Sign up</b>
          </a>
        </Link>
      </Form>
    </GuestContainer>
  )
}