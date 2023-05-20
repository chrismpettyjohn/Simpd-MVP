import React from 'react';
import { useRoute } from 'wouter';
import { Card } from 'components/card/Card';

export function MessageThreadScreen() {
  const [, params] = useRoute<{ username: string }>('/messages/threads/:username');
  const username = params!.username;

  return (
    <Card>
      Viewing Thread w {username}
    </Card>
  );
}