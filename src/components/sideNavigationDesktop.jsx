import React from 'react';
import styled from 'styled-components';

import CannabisIcon from '../assets/icons/cannabis-icon.svg';
import SeedIcon from '../assets/icons/seed-icon.svg';
import PipeIcon from '../assets/icons/pipe-icon.svg';
import OilIcon from '../assets/icons/oil-icon.svg';
import AccountIcon from '../assets/icons/account-icon.svg';
import SettingsIcon from '../assets/icons/settings-icon.svg';
import HamburgerMenuClose from '../assets/icons/hamburger-menu-close.svg';

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || 0};
  transition: all .3s ease-out;
  border-radius: 5px;
  background-color: ${props => props.bColor || 'none'};
  
  :hover {
    cursor: pointer;
  };
`;

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  margin: 1rem 0;
  transition: transform .3s ease-out;
  background-color: hsla(0,0%,97%,1);
  border-radius: 5px;
`;

const SideNavList = styled.ul`
  display: flex;
  justify-content: center;
`;

const SideNavItem = styled.li`
  display: flex;
  padding: 1rem 4rem;
  font-family: 'Betm Light';
  font-size: 1.25rem;
  color: #79CEA7;
  
  &:not(:last-child) {
    border-right: 1px solid hsl(0,0%,90%);
  }

  :hover {
    cursor: pointer;
  };
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const SideNavItemLabel = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const SideNavigationDesktop = (props) => {
  
  let { isActive, handleShowSideNav } = props;
  return (
    <Container isActive={isActive}>
    <SideNavList>
      <SideNavItem>
        <IconContainer>
          <Icon src={CannabisIcon} alt="Cannabis"></Icon>
        </IconContainer>
        <SideNavItemLabel>Cannabis</SideNavItemLabel>
      </SideNavItem>
      <SideNavItem border>
        <IconContainer>
          <Icon src={SeedIcon} alt="Seeds"></Icon>
        </IconContainer>
        <SideNavItemLabel>Graines</SideNavItemLabel>
      </SideNavItem>
      <SideNavItem border>
        <IconContainer>
          <Icon src={PipeIcon} alt="Accessories"></Icon>
        </IconContainer>
        <SideNavItemLabel>Accessoires</SideNavItemLabel>
      </SideNavItem>
      <SideNavItem border>
        <IconContainer>
          <Icon src={OilIcon} alt="Oils"></Icon>
        </IconContainer>
        <SideNavItemLabel>Huiles</SideNavItemLabel>
      </SideNavItem>
    </SideNavList>
  </Container>
  );
}