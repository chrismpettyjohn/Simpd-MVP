import { Button, Dropdown, Space } from 'antd';
import React, { useContext, useEffect, useMemo } from 'react';
import { sessionContext, useProfileSubscriptionGroupFetchMany } from '@simpd/lib-web';
import { ProfileSubscriptionGroupDropdownProps } from './ProfileSubscriptionGroupDropdown.types';

export function ProfileSubscriptionGroupDropdown({ subscriptionGroupIDs, onChange }: ProfileSubscriptionGroupDropdownProps) {
  const { session } = useContext(sessionContext);
  const profileSubscriptionsGroupFetchMany = useProfileSubscriptionGroupFetchMany();

  const onFetchProfileSubscriptionGroups = async () => {
    await profileSubscriptionsGroupFetchMany.fetch({
      profileIDs: [session!.profileID],
    })
  }

  const onToggleSubscriptionGroups = (event: { selectedKeys: string[] }) => {
    console.log(event);
    onChange(event.selectedKeys.map(Number));
  }

  useEffect(() => {
    onFetchProfileSubscriptionGroups()
  }, [])

  const menuItems = useMemo(() => {

    if (!profileSubscriptionsGroupFetchMany.data) {
      return [];
    }

    return profileSubscriptionsGroupFetchMany.data?.map(_ => {
      const isActive = subscriptionGroupIDs.includes(_.id);
      return {
        key: _.id,
        label: (
          <>
            <i className={isActive ? 'fa fa-eye' : 'fa fa-eye-slash'} style={{ marginRight: 4 }} />
            {_.subscriptionGroup.name}
          </>
        ),
      }
    });
  }, [profileSubscriptionsGroupFetchMany.data, subscriptionGroupIDs]);

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items: menuItems, selectable: true, selectedKeys: subscriptionGroupIDs as any, onSelect: onToggleSubscriptionGroups as any }} placement="bottomLeft">
          <Button>
            <i className="fa fa-eye" style={{ marginRight: 4 }} />
            Visibility
          </Button>
        </Dropdown>
      </Space>
    </Space>
  )
}
