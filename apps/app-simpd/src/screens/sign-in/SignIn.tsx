import './SignIn.css';
import jwtDecode from 'jwt-decode';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'wouter';
import { Card } from '../../components/card/Card';
import { PageTitle } from '../../components/page-title/PageTitle';
import React, { SyntheticEvent, useContext, useState } from 'react'
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
    <>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Sign in" />
      <Card>
        <form style={{ width: '100%', overflow: 'hidden' }} onSubmit={onSessionCreate}>
          <label className="landing-page-text1">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            className="landing-page-textinput input"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label className="landing-page-text2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="landing-page-textinput1 input"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="landing-page-container4">
            <Link to="/create-account">
              <button className="landing-page-button button" type="button">
                Create account
              </button>
            </Link>
            <button disabled={isDisabled} className="landing-page-button1 button" type="submit">
              {
                sessionCreate.loading ? <i className="fa fa-spinner fa-spin" /> : <>Sign in</>
              }
            </button>
          </div>
        </form>
      </Card>
    </>
  )
}