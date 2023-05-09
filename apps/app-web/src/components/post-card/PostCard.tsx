import './PostCard.css';
import React from 'react';

export function PostCard() {
  return (
    <div className="post-card-container">
      <img
        src="https://i.imgur.com/CesvKGF.png"
        className="post-card-image"
      />
      <span className="post-card-text">
        <span className="">
          {' '}
          🌸 This is my first post (I recently started living on my own🎉💃) and
          I am especially pleased that you have subscribed to me right now. I am
          sure that there are many interesting adventures ahead of us, and later
          we will remember with a smile how it all began. And don&apos;t be
          confused by the whims of a naughty girl.🤷🏻‍♀️🌺🌸
        </span>
        <br className=""></br>
        <br className=""></br>
        <span className="">
          {' '}
          🛸 I really love traveling and that&apos;s why today I went to a
          neighboring town and bought a set of underwear. 🛸🌼⛷️
        </span>
      </span>
      <div className="post-card-container1">
        <img
          src="https://i.imgur.com/CesvKGF.png"
          className="post-card-image1"
        />
        <div className="post-card-container2">
          <h1 className="post-card-text5">
            FairLan
          </h1>
          <span className="post-card-text6">
            @FairLan
          </span>
        </div>
      </div>
    </div>
  )
}