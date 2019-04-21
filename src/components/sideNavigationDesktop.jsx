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
  margin: 1rem 0;
  transition: transform .3s ease-out;
  background-color: hsla(0,0%,97%,1);
  border-radius: 1rem;
`;

const SideNavList = styled.ul`
  display: flex;
  justify-content: center;
`;

const SideNavItem = styled.li`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 2rem 3rem;
  font-family: 'Betm Light';
  font-size: 1.25rem;
  color: #79CEA7;
  
  &:not(:last-child) {
    border-right: 1px solid hsl(0,0%,90%);
  }

  &:hover {
    cursor: pointer;
    background-color: hsl(0,0%,94%);
  };
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
        <Icon src={CannabisIcon} alt="Cannabis"></Icon>
        <SideNavItemLabel>Cannabis</SideNavItemLabel>
      </SideNavItem>
      <SideNavItem border>
        <Icon src={SeedIcon} alt="Seeds"></Icon>
        <SideNavItemLabel>Graines</SideNavItemLabel>
      </SideNavItem>
      <SideNavItem border>
        <Icon src={PipeIcon} alt="Accessories"></Icon>
        <SideNavItemLabel>Accessoires</SideNavItemLabel>
      </SideNavItem>
      <SideNavItem border>
        <Icon src={OilIcon} alt="Oils"></Icon>
        <SideNavItemLabel>Huiles</SideNavItemLabel>
      </SideNavItem>
    </SideNavList>
  </Container>
  );
}
