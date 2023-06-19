import React, { useMemo } from 'react';
import { Button, Dropdown, Space } from 'antd';
import { ProfileSubscriptionGroupDropdownProps } from './ProfileSubscriptionGroupDropdown.types';

export function ProfileSubscriptionGroupDropdown({ subscriptionGroupIDs, onChange }: ProfileSubscriptionGroupDropdownProps) {
  const menuItems = useMemo(() => {
    return [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
    ]
  }, []);

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items: menuItems }} placement="bottomLeft">
          <Button>Visibility</Button>
        </Dropdown>
      </Space>
    </Space>
  )
}