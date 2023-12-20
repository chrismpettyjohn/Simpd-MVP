import { SettingsSidebar } from 'components/settings-sidebar/SettingsSidebar';
import { SettingsContainerElement, SettingsContainerInnerContent, SettingsContainerPageContent, SettingsContainerPageInnerContent } from 'layout/settings-container/SettingsContainer.styled';
import { SettingsContainerProps } from 'layout/settings-container/SettingsContainer.types';
import React from 'react';

export function SettingsContainer({ children }: SettingsContainerProps) {
  return (
    <SettingsContainerElement>
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