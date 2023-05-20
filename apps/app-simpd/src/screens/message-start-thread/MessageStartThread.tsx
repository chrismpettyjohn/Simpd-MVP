import React from 'react';
import { Card } from 'components/card/Card';
import { CardBody, CardBodyContent, CardContainer, CardHeader, CardHeaderContent } from 'components/card/Card.sty';
import { Button } from 'components/button/Button';

export function MessageStartThreadScreen() {
  return (
    <>
      <CardContainer>
        <CardBody>
          <CardBodyContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>
              Start Conversation
            </h2>
            <input
              type="text"
              className="settings-profile-textinput3 input"
              placeholder="Username"
              style={{ width: '50%', height: 'fit-content' }}
            />
          </CardBodyContent>
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
    </>

  );
}