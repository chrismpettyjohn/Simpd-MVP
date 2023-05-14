import './SignIn.css';
import { Link, useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';
import React, { SyntheticEvent, useContext, useState } from 'react'
import { GuestGuard, sessionContext, useSessionCreate } from '@simpd/lib-web';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState('');
  const { setSession } = useContext(sessionContext);
  const sessionCreate = useSessionCreate();

  const isDisabled = !email || !password;

  const onSessionCreate = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (isDisabled || sessionCreate.loading || !email || !password) {
      return;
    }

    try {
      const newSession = await sessionCreate.execute({ email, password });
      setSession(newSession);
      setLocation('/settings/profile');
    } catch (e) {
      alert('Something went wrong')
    }
  }

  return (
    <GuestGuard redirect>
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
    </GuestGuard>
  )
}