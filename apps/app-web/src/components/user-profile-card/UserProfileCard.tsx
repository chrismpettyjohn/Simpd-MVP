import React from 'react'
import { Link } from 'wouter';
import './UserProfileCard.css';

export function UserProfileCard() {
  return (
    <div className="user-profile-card-container">
      <div className="user-profile-card-container1"></div>
      <div className="user-profile-card-container2">
        <div className="user-profile-card-container3"></div>
        <div className="user-profile-card-container4">
          <svg viewBox="0 0 1024 1024" className="user-profile-card-icon">
            <path
              d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="user-profile-card-icon2">
            <path
              d="M128 512v341.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v341.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 188.331v451.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-451.669l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-16.683-16.683-43.691-16.683-60.331 0l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <h1 className="user-profile-card-text">Ping Thai Free</h1>
      <div className="user-profile-card-container5">
        <span className="user-profile-card-text1">@pingthaii</span>
        <span className="user-profile-card-text2">Seen Yesterday</span>
      </div>
      <span className="user-profile-card-text3">
        <span className="">
          Welcome babe to my Free Onlyfans page 🤗 Wanna know me better? Join my
          VIP page to see more of me😝🥰 ⬇⬇
        </span>
        <br className=""></br>
      </span>
      <Link to="/user-profile" className="user-profile-card-navlink">
        <div className="user-profile-card-container6">
          <svg viewBox="0 0 1024 1024" className="user-profile-card-icon4">
            <path
              d="M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z"
              className=""
            ></path>
            <path
              d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"
              className=""
            ></path>
          </svg>
          <span className="user-profile-card-text6">
            https://simpd.co/onlyping</span>
        </div>
      </Link>
    </div>
  )
}