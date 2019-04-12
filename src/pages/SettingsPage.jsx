import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { Container } from '../layout/layout';
import { SettingsHeader } from '../components/settingsHeader';
import { SettingsSections } from '../components/settingsSections';

const CustomContainer = styled(Container)`
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const VersioningContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
`;

const Versioning = styled.p`
  font-size: .85rem;
  color: hsl(0,0%,75%);
`;

export const SettingsPage = () => {
  return (
    <CustomContainer>
      <SettingsHeader></SettingsHeader>
      <SettingsSections></SettingsSections>
      <VersioningContainer>
        <Versioning>
          Version 0.01
        </Versioning>
      </VersioningContainer>
    </CustomContainer>
  );
};