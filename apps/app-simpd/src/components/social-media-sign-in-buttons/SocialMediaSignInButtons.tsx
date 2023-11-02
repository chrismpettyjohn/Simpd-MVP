import React from 'react';

export function SocialMediaSignInButtons() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
      <div>
        Or login with,
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', gap: 4 }}>
        <img src="https://i.imgur.com/kaKmNTH.png" style={{ height: 41 }} />
        <img src="https://i.imgur.com/g9TaJKK.png" style={{ height: 41 }} />
        <img src="https://i.imgur.com/syt6Q2w.png" style={{ height: 41 }} />
        <img src="https://i.imgur.com/LG7MRXy.png" style={{ height: 41 }} />
      </div>
    </div>
  )
}