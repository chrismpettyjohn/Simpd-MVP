import React, { useContext, useEffect, useState } from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { SiteNavigation } from '../site-navigation/SiteNavigation';
import { SiteSidebarContent, SiteSidebarElement } from './SiteSidebar.styled';
import { ButtonBrand } from '../../components/button/Button.remix';
import { Link } from 'wouter';
import { useWindowDimensions } from 'hooks/use-window-dimensions.hook';
import { ThemeContext, useTheme } from 'styled-components';
import { SimpdWebTheme } from '@simpd/lib-web';

export function SiteSidebar() {
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
    <SiteSidebarElement>
      <SiteSidebarContent>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>

          <SiteLogo altLogo style={{ height: '4em' }} />
          {
            !deviceIsLaptopOrLarger && (
              <i className={isOpen ? 'fa fa-caret-down fa-3x' : 'fa fa-caret-right fa-3x'} onClick={toggle} />
            )
          }
        </div>
        {
          isOpen && (
            <>
              <SiteNavigation />
              <Link to="/posts/create">
                <ButtonBrand>
                  New Post <i className="fa fa-plus" style={{ marginLeft: 8 }} />
                </ButtonBrand>
              </Link>
            </>
          )
        }
      </SiteSidebarContent>
    </SiteSidebarElement>
  )
}