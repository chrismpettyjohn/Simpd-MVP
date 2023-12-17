import React, { useContext, useEffect, useState } from 'react';
import { SiteLogo } from '../site-logo/SiteLogo';
import { SiteNavigation } from '../site-navigation/SiteNavigation';
import { SiteSidebarContent, SiteSidebarElement, SiteSidebarHeader } from './SiteSidebar.styled';
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
        <SiteSidebarHeader>

          <SiteLogo altLogo style={{ height: '4em' }} />
          {
            !deviceIsLaptopOrLarger && (
              <i className={isOpen ? 'fa fa-caret-down fa-3x' : 'fa fa-caret-right fa-3x'} onClick={toggle} />
            )
          }
        </SiteSidebarHeader>
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