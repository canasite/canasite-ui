import React                                                        from 'react';
import styled                                                       from 'styled-components';

import { Container }                                                from '../layout/layout';
import { SettingsHeader, SettingsSections, Footer }                 from '../components/index';
import { HeaderContainer }                                          from '../containers';


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


const SettingsPage = () => {
  return (
    <>
      <CustomContainer>
        <HeaderContainer></HeaderContainer>
        <SettingsHeader></SettingsHeader>
        <SettingsSections></SettingsSections>
        <VersioningContainer>
          <Versioning>
            Version 0.01
          </Versioning>
        </VersioningContainer>
      </CustomContainer>
      <Footer></Footer>
    </>
  );
};

export { SettingsPage };
