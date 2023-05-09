import React from 'react'
import './NotificationCard.css';

export function NotificationCard() {
  return (
    <div className="notification-card-container">
      <div className="notification-card-container1">
        <img
          alt="FairLan's profile picture"
          src="https://i.imgur.com/CesvKGF.png"
          className="notification-card-image"
        />
        <div className="notification-card-container2">
          <h1 className="notification-card-text">
            FairLan
          </h1>
          <span className="notification-card-text1">
            @FairLan
          </span>
        </div>
      </div>
      <h1 className="notification-card-text2">
        <span className="">
          Reacted to your comment
        </span>
        <span className="notification-card-text4">&quot;yes mami&quot;</span>
      </h1>
      <svg viewBox="0 0 1024 1024" className="notification-card-icon">
        <path
          d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          className=""
        ></path>
      </svg>
    </div>
  )
}