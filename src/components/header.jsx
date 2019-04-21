import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { SearchBar } from '../components/searchBar';
import { PopOverCard } from '../components/popOverCard';
import { SideNavigation } from '../components/sideNavigation';

import Logo from '../assets/icons/logo.svg';
import HamburgerMenu from '../assets/icons/hamburger-menu.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import BagIcon from '../assets/icons/bag-icon.svg';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  padding: 0 2rem;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor || '#79CEA7'};
  box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.2);

  @media (min-width: 768px) {
    height: 6rem;
  }
`;

const SideBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideBarItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-family: 'Betm Book';
  color: white;

  &:not(:last-child) {
    margin-right: 1rem;

    @media (min-width: 768px) {
      margin-right: 2rem;
    }
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
  margin: ${props => props.margin || 0};
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
`;

export class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.togglePopOverCard = this.togglePopOverCard.bind(this);
    this.state = {
      sideNavActive: false,
      searchBarActive: false,
      popOverCardActive: false
    };
  }

  toggleSideNav() {
    this.setState(prevState => ({ sideNavActive: !prevState.sideNavActive }));
  }
  toggleSearchBar() {
    this.setState(prevState => ({ searchBarActive: !prevState.searchBarActive }));
  }

  togglePopOverCard() {
    this.setState(prevState => ({ popOverCardActive: !prevState.popOverCardActive }));
  }

  render() {
    return (
      <>
        <SideNavigation isActive={this.state.sideNavActive} toggleSideNav={this.toggleSideNav}></SideNavigation>
        <MobileBreakpoint>
          <StyledHeader>
            { !this.state.searchBarActive &&
              <>
                <Icon src={HamburgerMenu} alt="Menu" width="24px" onClick={this.toggleSideNav}></Icon>
                <Link to="/">
                  <Icon src={Logo} alt="Logo" width="72px"></Icon>
                </Link>
                <SideBar>
                  <SideBarItem>
                    { !this.state.searchBarActive &&
                      <Icon src={SearchIcon} alt="Rechercher des produits" width="24px" onClick={this.toggleSearchBar}></Icon>
                    }
                  </SideBarItem>
                  <SideBarItem>
                    { !this.state.searchBarActive &&
                      <Icon src={BagIcon} alt="Votre panier" width="20px" onClick={this.togglePopOverCard}></Icon>
                    }
                    <PopOverCard isActive={this.state.popOverCardActive} handleToggle={this.togglePopOverCard}></PopOverCard>
                  </SideBarItem>
                </SideBar>
              </>
            }
            <SearchBar isActive={this.state.searchBarActive} handleClose={this.toggleSearchBar}></SearchBar>
          </StyledHeader>
        </MobileBreakpoint>
  
        <TabletBreakpoint>
          <StyledHeader>
            <Icon src={HamburgerMenu} alt="Menu" width="24px" onClick={this.toggleSideNav}></Icon>
            <Link to="/">
              <Icon src={Logo} alt="Logo"></Icon>
            </Link>
            <SideBar>
              <SideBarItem>
                { !this.state.searchBarActive &&
                  <Icon src={SearchIcon} alt="Rechercher des produits" width="24px" onClick={this.toggleSearchBar}></Icon>
                }
                <SearchBar isActive={this.state.searchBarActive} handleClose={this.toggleSearchBar}></SearchBar>
              </SideBarItem>
              <SideBarItem>
                <Icon src={BagIcon} alt="Votre panier" width="24px" onClick={this.togglePopOverCard}></Icon>
                <PopOverCard isActive={this.state.popOverCardActive} handleToggle={this.togglePopOverCard}></PopOverCard>
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
                <Link to="/login">Créer un compte</Link>
              </SideBarItem>
              <SideBarItem>
                <Link to="/login">Se connecter</Link>
              </SideBarItem>
              <SideBarItem>
                { !this.state.searchBarActive &&
                  <Icon src={SearchIcon} alt="Rechercher des produits" width="24px" onClick={this.toggleSearchBar}></Icon>
                }
                <SearchBar isActive={this.state.searchBarActive} handleClose={this.toggleSearchBar}></SearchBar>
              </SideBarItem>
              <SideBarItem>
                <Icon src={BagIcon} alt="Votre panier" width="24px" onClick={this.togglePopOverCard}></Icon>
                <PopOverCard isActive={this.state.popOverCardActive} handleToggle={this.togglePopOverCard}></PopOverCard>
              </SideBarItem>
            </SideBar>
          </StyledHeader>
        </DesktopBreakpoint>
      </>
    );
  }
};
