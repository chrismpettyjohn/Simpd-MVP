import { Card } from 'components/card/Card';
import { Button } from 'components/button/Button';
import { useMessageCreate } from '@simpd/lib-web';
import React, { ChangeEvent, useState } from 'react';
import { SendMessageCardProps } from './SendMessageCard.types';

export function SendMessageCard({ receivingProfileID, onMessageSent }: SendMessageCardProps) {
  const messageCreate = useMessageCreate();
  const [messageContent, setMessageContent] = useState('');

  const onSetMessageContent = (event: ChangeEvent<any>) => {
    setMessageContent(event.target.value ?? '');
  }

  const onSendMessage = async () => {
    const newMessage = await messageCreate.execute({ receivingProfileID, content: messageContent })
    onMessageSent(newMessage);
    setMessageContent('');
  }

  return (
    <Card>
      <textarea
        className="settings-profile-textarea textarea"
        value={messageContent}
        onChange={onSetMessageContent}
        placeholder="What do you want to say?"
      />
      <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
        <Button type="button" disabled={messageCreate.loading} onClick={onSendMessage}>
          {messageCreate.loading ? <i className="fa fa-spinner fa-spin" /> : <>Save</>}
        </Button>
      </div>
    </Card>
  )
}