import React from 'react';
import { Card } from '../../components/card/Card';
import { Button } from '../../components/button/Button';
import { UserContainer } from '../../layout/user-container/UserContainer';
import { CardBody, CardContainer } from '../../components/card/Card.sty';

export function MessageStartThreadScreen() {
  return (
    <UserContainer>
      <CardContainer>
        <CardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>
              Start Conversation
            </h2>
            <input
              type="text"
              className="settings-profile-textinput3 input"
              placeholder="Username"
              style={{ width: '50%', height: 'fit-content' }}
            />
          </div>
        </CardBody>
      </CardContainer>
      <Card>
        <textarea
          className="settings-profile-textinput3 input"
          placeholder="What do you want to say?"
          rows={6}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <Button>
            Send
          </Button>
        </div>
      </Card>
    </UserContainer>

  );
}