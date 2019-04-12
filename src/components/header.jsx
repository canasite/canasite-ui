import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import Logo from '../assets/icons/logo.svg';
import HamburgerMenu from '../assets/icons/hamburger-menu.svg';
import HamburgerMenuClose from '../assets/icons/hamburger-menu-close.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import BagIcon from '../assets/icons/bag-icon.svg';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${props => props.height || '3rem'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  background-color: ${props => props.backgroundColor || '#79CEA7'};
  box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.2);

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const SideBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideBarItem = styled.li`

font-size: 1.25rem;
  font-family: 'Betm Light';
  color: white;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }

    &:visited: {
      color: inherit;
    }
  }
`;

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  vertical-align: middle;
`;

export const Header = (props) => {
  let { isActive, handleShowSideNav } = props;
  return (
    <>
      <MobileBreakpoint>
        <StyledHeader>
          <Icon src={HamburgerMenu} alt="Menu" width="24px" onClick={handleShowSideNav}></Icon>
          <Link to="/">
            <Icon src={Logo} alt="Logo" width="72px"></Icon>
          </Link>
          <SideBar>
            <SideBarItem>
              <Link to='/settings'>
                <Icon src={SearchIcon} alt="Rechercher des produits" width="24px"></Icon>
              </Link>
            </SideBarItem>
            <SideBarItem>
              <Link to='/checkout'>
                <Icon src={BagIcon} alt="Votre panier" width="20px"></Icon>
              </Link>
            </SideBarItem>
          </SideBar>
        </StyledHeader>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <StyledHeader>
          <Icon src={isActive ? HamburgerMenuClose : HamburgerMenu} alt="Menu" width="24px" onClick={handleShowSideNav}></Icon>
          <Link to="/">
            <Icon src={Logo} alt="Logo"></Icon>
          </Link>
          <SideBar>
            <SideBarItem>
              <Link to='/settings'>
                <Icon src={SearchIcon} alt="Rechercher des produits"></Icon>
              </Link>
            </SideBarItem>
            <SideBarItem>
              <Link to='/checkout'>
                <Icon src={BagIcon} alt="Votre panier" width="24px"></Icon>
              </Link>
            </SideBarItem>
          </SideBar>
        </StyledHeader>
      </TabletBreakpoint>

      <DesktopBreakpoint>
        <StyledHeader>
          <Link to="/">
            <Icon src={Logo} alt="Logo"></Icon>
          </Link>
          <SideBar>
            <SideBarItem>
              <Link to="">Mon compte</Link>
            </SideBarItem>
            <SideBarItem>
              <Link to="">Se connecter</Link>
            </SideBarItem>
            <SideBarItem>
              <Link to='/settings'>
                <Icon src={SearchIcon} alt="Rechercher des produits"></Icon>
              </Link>
            </SideBarItem>
            <SideBarItem>
              <Link to='/checkout'>
                <Icon src={BagIcon} alt="Votre panier" width="24px"></Icon>
              </Link>
            </SideBarItem>
          </SideBar>
        </StyledHeader>
      </DesktopBreakpoint>
    </>
  );
};
