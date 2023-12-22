
import { sessionContext } from '@simpd/lib-web';
import { Dropdown } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems'; import { SiteHeaderAvatar } from 'layout/site-header/SiteHeader.sty';
import React, { useContext, useMemo } from 'react';
import { Link } from 'wouter';


export function UserToolsDropdown() {
  const { session } = useContext(sessionContext);

  if (!session) {
    return null;
  }

  const userTools: ItemType[] = useMemo(() => {
    return [
      {
        type: 'group',
        label: (
          <Link href={`/profiles/${session.profile.username}`}>
            <div style={{ cursor: 'pointer' }}>
              <i className="fa fa-id-card" style={{ marginRight: 8 }} />
              My Profile
            </div>
          </Link>
        )
      },
      {
        type: 'group',
        label: (
          <Link href="/settings/identity">
            <div style={{ cursor: 'pointer' }}>
              <i className="fa fa-cog" style={{ marginRight: 8 }} />
              Settings
            </div>
          </Link>
        )
      },
      {
        type: 'group',
        label: (
          <Link href="/sign-out">
            <div style={{ cursor: 'pointer' }}>
              <i className="fa fa-sign-out" style={{ marginRight: 8 }} />
              Logout
            </div>
          </Link>
        )
      }
    ]
  }, []);

  return (

    <Dropdown menu={{ items: userTools }} placement="bottomLeft">
      <SiteHeaderAvatar src={session.profile.profilePicture?.url} />
    </Dropdown>
  )
}