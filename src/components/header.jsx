import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

import Logo from '../assets/icons/logo.svg';
import HamburgerMenu from '../assets/icons/hamburger-menu.svg';
import HamburgerMenuClose from '../assets/icons/hamburger-menu-close.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import CardIcon from '../assets/icons/card-icon.svg';

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
  padding: ${props => props.padding || '32px'};
  background-color: ${props => props.backgroundColor || '#79CEA7'};
  box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.2);
`;

const Title = styled.li`
  font-size: 1.25rem;
  font-family: 'Betm Light';
  margin-top: ${props => props.mTop || 0};
  margin-bottom: ${props => props.mBot || 0};
  margin-left: ${props => props.mLeft || 0};
  margin-right: ${props => props.mRight || 0};
  color: white;

  a {
    color: white;
    text-decoration: none;
    &:visited: {
      color: inherit;
    }
  }
`;

const SideBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width || 'auto'};
  margin-top: ${props => props.mTop || 0};
  margin-bottom: ${props => props.mBot || 0};
  margin-left: ${props => props.mLeft || 0};
  margin-right: ${props => props.mRight || 0};
  padding-top: ${props => props.pTop || 0};
  padding-bottom: ${props => props.pBot || 0};
  padding-left: ${props => props.pLeft || 0};
  padding-right: ${props => props.pRight || 0};
`;

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  transition: all .3s ease-out;
  vertical-align: middle;

  :hover {
    cursor: pointer;
  };
`;

export const Header = (props) => {
  let { isActive, handleShowSideNav } = props;
  return (
    <>
    <MobileBreakpoint>
      <StyledHeader height={"1rem"} padding={"2rem 1rem"}>
        <Icon src={HamburgerMenu} alt="Menu" width="24px" onClick={handleShowSideNav}></Icon>
        <a href="/">
          <Icon src={Logo} alt="Logo" width="72px"></Icon>
        </a>
        <SideBar width={'64px'}>
          <Icon src={SearchIcon} alt="Rechercher des produits" width="24px"></Icon>
          <Icon src={CardIcon} alt="Votre panier" width="28px"></Icon>
        </SideBar>
      </StyledHeader>
    </MobileBreakpoint>

    <TabletBreakpoint>
      <StyledHeader>
        <Icon src={isActive ? HamburgerMenuClose : HamburgerMenu} alt="Menu" width="24px" onClick={handleShowSideNav}></Icon>
        <a href="/">
          <Icon src={Logo} alt="Logo"></Icon>
        </a>
        <SideBar width={'100px'}>
          <Icon src={SearchIcon} alt="Rechercher des produits"></Icon>
          <Icon src={CardIcon} alt="Votre panier"></Icon>
        </SideBar>
      </StyledHeader>
    </TabletBreakpoint>

    <DesktopBreakpoint>
      <StyledHeader>
        <img src={Logo} alt="Logo"/>
        <SideBar width={'450px'}>
          <SideBar width={'350px'}>
            <Title><a href="">Mon compte</a></Title>
            <Title mLeft={'12px'}><a href="">Réglages</a></Title>
            <Title mLeft={'12px'}><a href="">Mon compte</a></Title>
          </SideBar>
          <SideBar width={'100px'} pLeft={'32px'}>
            <Icon src={SearchIcon} alt="Rechercher des produits"></Icon>
            <Icon src={CardIcon} alt="Votre panier"></Icon>
          </SideBar>
        </SideBar>
      </StyledHeader>
    </DesktopBreakpoint>
    </>
  );
};
