import { Button, Dropdown, Space } from 'antd';
import React, { SyntheticEvent, useContext, useEffect, useMemo } from 'react';
import { sessionContext, useProfileSubscriptionGroupFetchMany } from '@simpd/lib-web';
import { ProfileSubscriptionGroupDropdownProps } from './ProfileSubscriptionGroupDropdown.types';

export function ProfileSubscriptionGroupDropdown({ subscriptionGroupIDs, onToggleSubscriptionGroupID }: ProfileSubscriptionGroupDropdownProps) {
  const { session } = useContext(sessionContext);
  const profileSubscriptionsGroupFetchMany = useProfileSubscriptionGroupFetchMany();

  const onFetchProfileSubscriptionGroups = async () => {
    await profileSubscriptionsGroupFetchMany.fetch({
      profileIDs: [session!.profileID],
    })
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
      const onClick = (event: SyntheticEvent) => {
        event.stopPropagation();
        onToggleSubscriptionGroupID(_.id);
      }
      return {
        key: _.id,
        label: (
          <div onClick={onClick} style={{ cursor: 'pointer' }}>
            <i className={isActive ? 'fa fa-eye' : 'fa fa-eye-slash'} style={{ marginRight: 4 }} />
            {_.subscriptionGroup.name}
          </div>
        ),
      }
    });
  }, [profileSubscriptionsGroupFetchMany.data, subscriptionGroupIDs]);

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items: menuItems }} placement="bottomLeft">
          <Button>
            <i className="fa fa-eye" style={{ marginRight: 4 }} />
            Visibility
          </Button>
        </Dropdown>
      </Space>
    </Space>
  )
}
