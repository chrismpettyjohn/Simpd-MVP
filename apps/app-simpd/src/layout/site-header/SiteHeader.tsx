import { Input } from '../../components/input/Input';
import React, { useContext, useMemo } from 'react'
import { sessionContext } from '@simpd/lib-web';
import { SiteHeaderAvatar, SiteHeaderContainer, SiteHeaderContent } from './SiteHeader.sty';
import { UserProfileCardAvatar } from 'components/user-profile-card/UserProfileCard.sty';
import { Dropdown } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { Link } from 'wouter';

export function SiteHeader() {
  const { session } = useContext(sessionContext);

  if (!session) {
    return null;
  }

  const userTools: ItemType[] = useMemo(() => {
    return [
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
    <SiteHeaderContainer>
      <SiteHeaderContent>
        <Input placeholder="Search for some hoes.." />
        <div style={{ display: 'flex', flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
          {
            session?.profile?.profilePicture && (

              <>
                <Dropdown menu={{ items: userTools }} placement="bottomLeft">
                  <SiteHeaderAvatar src={session.profile.profilePicture.url} />
                </Dropdown>
              </>
            )
          }
        </div>
      </SiteHeaderContent>
    </SiteHeaderContainer>
  )
}
