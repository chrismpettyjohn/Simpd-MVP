import React from 'react'
import './SignIn.css';
import { Helmet } from 'react-helmet';
import { PostCard } from 'components/post-card/PostCard';

export function SignInScreen() {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Simpd</title>
        <meta property="og:title" content="Simpd" />
      </Helmet>
      <div className="landing-page-container1">
        <div className="landing-page-container2">
          <h1 className="landing-page-text">Sign in</h1>
        </div>
        <div className="landing-page-container3">
          <label className="landing-page-text1">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            className="landing-page-textinput input"
          />
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
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}