import './SignIn.css';
import React from 'react'
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import { GuestGuard } from '@simpd/lib-web';
import { PageTitle } from 'components/page-title/PageTitle';

export function SignInScreen() {
  return (
    <GuestGuard redirect>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Sign in" />
      <Card>
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <label className="landing-page-text1">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            className="landing-page-textinput input"
          />
          <br />
          <br />
          <label className="landing-page-text2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="landing-page-textinput1 input"
          />
          <div className="landing-page-container4">
            <Link to="/create-account">
              <button className="landing-page-button button" type="button">
                Create an account for free
              </button>
            </Link>
            <button disabled className="landing-page-button1 button" type="submit">
              Sign in
            </button>
          </div>
        </div>
      </Card>
    </GuestGuard>
  )
}