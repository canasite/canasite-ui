import React                                                          from 'react';
import styled                                                         from 'styled-components';
import { Link }                                                       from 'react-router-dom';

import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint }      from '../../layout/responsive-utilites/responsive-wrappers';
import { SearchBar, SideNavigation }                                  from '../index';
import { PopOverCartContainer }                                       from '../../containers/index';
import Logo                                                           from '../../assets/icons/logo.svg';
import HamburgerMenu                                                  from '../../assets/icons/hamburger-menu.svg';
import SearchIcon                                                     from '../../assets/icons/search-icon.svg';
import BagIcon                                                        from '../../assets/icons/bag-icon.svg';


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

const NotificationBubble = styled.div`
  position: absolute;
  top: 16px;
  right: -8px;
  display: flex;
  text-indent: center;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  font-size: .85rem;
  color: white;
  background-color: orange;
  pointer-events: none;
`;


const Header = (props) => {
  return (
    <>
      <SideNavigation isActive={props.sideNavActive} toggleSideNav={props.toggleSideNav}></SideNavigation>
      <MobileBreakpoint>
        <StyledHeader>
          { !props.searchBarActive &&
            <>
              <Icon src={HamburgerMenu} alt="Menu" width="24px" onClick={props.toggleSideNav}></Icon>
              <Link to="/">
                <Icon src={Logo} alt="Logo" width="72px"></Icon>
              </Link>
              <SideBar>
                <SideBarItem>
                  { !props.searchBarActive &&
                    <Icon src={SearchIcon} alt="Rechercher des produits" width="24px" onClick={props.toggleSearchBar}></Icon>
                  }
                </SideBarItem>
                <SideBarItem>
                  { !props.searchBarActive &&
                    <Icon src={BagIcon} alt="Votre panier" width="20px" onClick={props.togglePopOverCart}></Icon>
                  }
                  {
                    props.cartItemsCounter > 0 &&
                    <NotificationBubble>{props.cartItemsCounter}</NotificationBubble>
                  }
                  <PopOverCartContainer isActive={props.popOverCardActive} handleToggle={props.togglePopOverCart}></PopOverCartContainer>
                </SideBarItem>
              </SideBar>
            </>
          }
          <SearchBar isActive={props.searchBarActive} handleClose={props.toggleSearchBar}></SearchBar>
        </StyledHeader>
      </MobileBreakpoint>

      <TabletBreakpoint>
        <StyledHeader>
          <Icon src={HamburgerMenu} alt="Menu" width="24px" onClick={props.toggleSideNav}></Icon>
          <Link to="/">
            <Icon src={Logo} alt="Logo"></Icon>
          </Link>
          <SideBar>
            <SideBarItem>
              { !props.searchBarActive &&
                <Icon src={SearchIcon} alt="Rechercher des produits" width="28px" onClick={props.toggleSearchBar}></Icon>
              }
              <SearchBar isActive={props.searchBarActive} handleClose={props.toggleSearchBar}></SearchBar>
            </SideBarItem>
            <SideBarItem>
              <Icon src={BagIcon} alt="Votre panier" width="24px" onClick={props.togglePopOverCart}></Icon>
              <PopOverCartContainer isActive={props.popOverCardActive} handleToggle={props.togglePopOverCart}></PopOverCartContainer>
              {
                props.cartItemsCounter > 0 &&
                <NotificationBubble>{props.cartItemsCounter}</NotificationBubble>
              }
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
              { !props.searchBarActive &&
                <Icon src={SearchIcon} alt="Rechercher des produits" width="28px" onClick={props.toggleSearchBar}></Icon>
              }
              <SearchBar isActive={props.searchBarActive} handleClose={props.toggleSearchBar}></SearchBar>
            </SideBarItem>
            <SideBarItem>
              <Icon src={BagIcon} alt="Votre panier" width="24px" onClick={props.togglePopOverCart}></Icon>
              <PopOverCartContainer isActive={props.popOverCardActive} handleToggle={props.togglePopOverCart}></PopOverCartContainer>
              {
                props.cartItemsCounter > 0 &&
                <NotificationBubble>{props.cartItemsCounter}</NotificationBubble>
              }
            </SideBarItem>
          </SideBar>
        </StyledHeader>
      </DesktopBreakpoint>
    </>
  );
};

export { Header };
