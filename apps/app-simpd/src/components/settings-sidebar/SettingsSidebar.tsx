import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'hooks/use-window-dimensions.hook';
import { useTheme } from 'styled-components';
import { SimpdWebTheme } from '@simpd/lib-web';
import { SettingsSidebarContent, SettingsSidebarElement, SettingsSidebarHeader } from 'components/settings-sidebar/SettingsSidebar.styled';
import { Link, useLocation } from 'wouter';

export function SettingsSidebar() {
  const [pathname] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const window = useWindowDimensions();
  const theme: SimpdWebTheme = useTheme() as any;

  const laptopWidth = Number(theme.breakpoints.laptop.split('px')[0]);
  const deviceIsLaptopOrLarger = window.width >= laptopWidth;

  useEffect(() => {
    if (deviceIsLaptopOrLarger && !isOpen) {
      setIsOpen(true);
    }
  }, [deviceIsLaptopOrLarger, isOpen]);

  function toggle() {
    setIsOpen(_ => !_);
  }

  return (
    <SettingsSidebarElement>
      <SettingsSidebarContent>
        <SettingsSidebarHeader>
          {
            !deviceIsLaptopOrLarger && (
              <i className={isOpen ? 'fa fa-caret-down fa-3x' : 'fa fa-caret-right fa-3x'} onClick={toggle} />
            )
          }
        </SettingsSidebarHeader>

        <ul>
          <li>
            <b>Settings</b></li>
          <Link href="/settings/account">
            <li className={pathname === '/settings/account' ? 'active' : ''}>

              <i className="fa fa-user" style={{ marginRight: 4 }} />
              Account
            </li>
          </Link>
          <Link href="/settings/privacy">
            <li className={pathname === '/settings/privacy' ? 'active' : ''}>

              <i className="fa fa-lock" style={{ marginRight: 4 }} />
              Privacy
            </li>
          </Link>
          <Link href="/settings/transactions">
            <li className={pathname === '/settings/transactions' ? 'active' : ''}>

              <i className="fa fa-usd-circle" style={{ marginRight: 4 }} />
              Transaction History
            </li>
          </Link>
          <Link href="/settings/payment-methods">
            <li className={pathname === '/settings/payment-methods' ? 'active' : ''}>

              <i className="fa fa-credit-card" style={{ marginRight: 4 }} />
              Payment Methods
            </li>
          </Link>
          <hr />
          <Link href="/settings/identity">
            <li className={pathname === '/settings/identity' ? 'active' : ''}>

              <i className="fa fa-users" style={{ marginRight: 4 }} />
              Switch Profile
            </li>
          </Link>
          <Link href="/settings/delete-account">
            <li className={pathname === '/settings/delete-account' ? 'active' : ''}>

              <i className="fa fa-bell" style={{ marginRight: 4 }} />
              Delete Account
            </li>
          </Link>
          <hr />
          <li><b>Feedback</b></li>
          <Link href="/settings/feedback">
            <li className={pathname === '/settings/feedback' ? 'active' : ''}>

              <i className="fa fa-bullhorn" style={{ marginRight: 4 }} />
              Feedback
            </li>
          </Link>
          <Link href="/settings/bugs">
            <li className={pathname === '/settings/report-a-bug' ? 'active' : ''}>

              <i className="fa fa-bug" style={{ marginRight: 4 }} />
              Report a Bug
            </li>
          </Link>
        </ul>
      </SettingsSidebarContent>
    </SettingsSidebarElement>
  )
}