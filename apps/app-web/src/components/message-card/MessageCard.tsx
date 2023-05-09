import React from 'react'
import './MessageCard.css';

export function MessageCard() {
  return (
    <div className="message-card-container">
      <div className="message-card-container1">
        <img
          alt="FairLan Posted"
          src="https://i.imgur.com/CesvKGF.png"
          className="message-card-image"
        />
        <div className="message-card-container2">
          <h1 className="message-card-text">
            FairLan
          </h1>
          <span className="message-card-text1">
            @FairLan
          </span>
        </div>
      </div>
      <div className="message-card-container3">
        <h1 className="message-card-text2">
          <span className="">They said:</span>
          <br className=""></br>
        </h1>
        <span className="message-card-text5">
          r u an asparagus
        </span>
      </div>
      <svg viewBox="0 0 1024 1024" className="message-card-icon">
        <path
          d="M426 384q208 30 321 159t149 311q-154-218-470-218v174l-298-298 298-298v170z"
          className=""
        ></path>
      </svg>
    </div>
  )
}
