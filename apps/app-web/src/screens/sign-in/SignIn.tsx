import React from 'react'
import './SignIn.css';
import { Helmet } from 'react-helmet';
import { PostCard } from 'components/post-card/PostCard';
import { PageTitle } from 'components/page-title/PageTitle';
import { Card } from 'components/card/Card';

export function SignInScreen() {
  return (
    <>
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <PageTitle title="Sign In" />
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
            <button className="landing-page-button button">
              Create an account for free
            </button>
            <button disabled className="landing-page-button1 button">
              Sign in
            </button>
          </div>
        </div>
      </Card>
      <PostCard />
      <PostCard />
    </>
  )
}