import React from 'react';
import styled from 'styled-components';
import SortIcon from '../assets/icons/SortIcon.svg';
import MoreActionsIcon from '../assets/icons/MoreActionsIcon.svg';
import { MobileBreakpoint, TabletBreakpoint,DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 3px 6px -15px rgba(0,0,0,0.16), 0 3px 6px -4px rgba(0,0,0,0.23);

  @media (min-width: 768px) {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
    box-shadow: none;
  }
`;

const TitleColumn = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: -.05rem;
  color: #79CEA7;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const SettingsColumn = styled.div`
  
`;

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin-right: ${props => props.mRight || 0};
  padding-top: ${props => props.pTop || 0};
  padding-bottom: ${props => props.pBot || 0};
  padding-left: ${props => props.pLeft || 0};
  padding-right: ${props => props.pRight || 0};
`;

export const ProductRowHeader = ({ title, iconSrc }) => {
  return (
    <Container>
      <TitleColumn>
        <MobileBreakpoint>
          <Icon src={iconSrc} width="1.5rem" mRight={"1rem"}></Icon>
        </MobileBreakpoint>
        <TabletBreakpoint>
          <Icon src={iconSrc} width="2rem" mRight={"1rem"}></Icon>
        </TabletBreakpoint>
        <DesktopBreakpoint>
          <Icon src={iconSrc} width="2rem" mRight={"1rem"}></Icon>
        </DesktopBreakpoint>
        {title}
      </TitleColumn>
      <SettingsColumn>
        <MobileBreakpoint>
          <Icon src={SortIcon} mRight={"1rem"}></Icon>
          <Icon src={MoreActionsIcon}></Icon>
        </MobileBreakpoint>
        <TabletBreakpoint>
          <Icon src={SortIcon} mRight={"1rem"}></Icon>
          <Icon src={MoreActionsIcon}></Icon>
        </TabletBreakpoint>
        <DesktopBreakpoint>
          <Icon src={SortIcon} mRight={"1rem"}></Icon>
          <Icon src={MoreActionsIcon}></Icon>
        </DesktopBreakpoint>
      </SettingsColumn>
    </Container>
  );
}
