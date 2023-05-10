import React from 'react'
import './UserProfile.css';
import { Helmet } from 'react-helmet'
import { UserProfileCard } from 'components/user-profile-card/UserProfileCard';
import { PageTitle } from 'components/page-title/PageTitle';

export function UserProfileScreen() {
  return (
    <div className="user-profile-container">
      <Helmet>
        <title>User-Profile - Simpd</title>
        <meta property="og:title" content="User-Profile - Simpd" />
      </Helmet>
      <PageTitle title="User Profile" />
      <UserProfileCard />
      <div className="user-profile-container02">
        <div className="user-profile-container03">
          <h1 className="user-profile-text1">About</h1>
          <svg
            viewBox="0 0 329.1428571428571 1024"
            className="user-profile-icon"
          >
            <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
        </div>
        <div className="user-profile-container04">
          <span className="user-profile-text2">
            i have a big personality too
          </span>
        </div>
      </div>
      <div className="user-profile-container05">
        <div className="user-profile-container06">
          <h1 className="user-profile-text3">Albums</h1>
          <svg
            viewBox="0 0 329.1428571428571 1024"
            className="user-profile-icon2"
          >
            <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
        </div>
        <div className="user-profile-container07">
          <span className="user-profile-text4">look at my big butt</span>
        </div>
      </div>
      <div className="user-profile-container08">
        <div className="user-profile-container09">
          <h1 className="user-profile-text5">Posts</h1>
          <svg
            viewBox="0 0 329.1428571428571 1024"
            className="user-profile-icon4"
          >
            <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
        </div>
        <div className="user-profile-container10">
          <span className="user-profile-text6">
            i post about how big my butt is
          </span>
        </div>
      </div>
      <div className="user-profile-container11">
        <div className="user-profile-container12">
          <h1 className="user-profile-text7">Payments</h1>
          <svg
            viewBox="0 0 329.1428571428571 1024"
            className="user-profile-icon6"
          >
            <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
          </svg>
        </div>
        <div className="user-profile-container13">
          <span className="user-profile-text8">pay for my dinner loser</span>
        </div>
      </div>
    </div>
  )
}