import { SettingsSidebar } from 'components/settings-sidebar/SettingsSidebar';
import { UserToolsDropdown } from 'components/user-tools-dropdown/UserToolsDropdown';
import { SettingsContainerElement, SettingsContainerHeader, SettingsContainerInnerContent, SettingsContainerPageContent, SettingsContainerPageInnerContent } from 'layout/settings-container/SettingsContainer.styled';
import { SettingsContainerProps } from 'layout/settings-container/SettingsContainer.types';
import { SiteLogo } from 'layout/site-logo/SiteLogo';
import React from 'react';

export function SettingsContainer({ children }: SettingsContainerProps) {
  return (
    <SettingsContainerElement>
      <SettingsContainerHeader>
        <SiteLogo altLogo style={{ height: '4em' }} />
        <UserToolsDropdown />
      </SettingsContainerHeader>
      <SettingsContainerInnerContent>
        <SettingsSidebar />
        <SettingsContainerPageContent>
          <SettingsContainerPageInnerContent>
            {children}
          </SettingsContainerPageInnerContent>
        </SettingsContainerPageContent>
      </SettingsContainerInnerContent>
    </SettingsContainerElement>
  )
}