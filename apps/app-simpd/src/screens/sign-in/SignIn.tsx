import './SignIn.css';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react'
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';
import { GuestGuard, useSessionCreate } from '@simpd/lib-web';

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sessionCreate = useSessionCreate({ email, password });

  const isDisabled = !email || !password;

  const onSessionCreate = () => {
    if (isDisabled) {
      return;
    }

    sessionCreate.execute();
  }

  return (
    <GuestGuard redirect>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Sign in" />
      <Card>
        <form style={{ width: '100%', overflow: 'hidden' }}>
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
                Create an account for free
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