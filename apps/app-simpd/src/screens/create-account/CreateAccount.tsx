import React from 'react'
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import { Card } from 'components/card/Card';
import { PageTitle } from 'components/page-title/PageTitle';

export function CreateAccountScreen() {
  return (
    <>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Create account" />
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
          <br />
          <br />
          <label className="landing-page-text2">Password Again</label>
          <input
            type="password"
            placeholder="Password Again"
            className="landing-page-textinput1 input"
          />
          <div className="landing-page-container4">
            <Link to="/sign-in">
              <button className="landing-page-button button">
                Sign in
              </button>
            </Link>
            <button disabled className="landing-page-button1 button">
              Create an account for free
            </button>
          </div>
        </div>
      </Card>
    </>
  )
}