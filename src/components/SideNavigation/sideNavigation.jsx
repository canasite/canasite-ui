import React                    from 'react';
import styled                   from 'styled-components';
import Pose                     from 'react-pose';

import CannabisIcon             from '../../assets/icons/cannabis-icon.svg';
import SeedIcon                 from '../../assets/icons/seed-icon.svg';
import PipeIcon                 from '../../assets/icons/pipe-icon.svg';
import OilIcon                  from '../../assets/icons/oil-icon.svg';
import AccountIcon              from '../../assets/icons/account-icon.svg';
import SettingsIcon             from '../../assets/icons/settings-icon.svg';
import HamburgerMenuClose       from '../../assets/icons/hamburger-menu-close.svg';


const Contain = Pose.aside({
  active: {
    x: 0,
    transition: {
      duration: 100
    }
  },
  exit: {
    x: '-24rem',
    transition: {
      duration: 100
    }
  }
});

const Container = styled(Contain)`
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 16rem;
  padding: 2rem;
  transform: ${props => props.isActive ? 'translateX(0)' : 'translateX(-18rem)'};
  transition: transform .3s ease-out;
  background-color: hsla(0,0%,97%,1);
  
  @media (min-width: 768px) {
    width: 24rem;
    transform: ${props => props.isActive ? 'translateX(0)' : 'translateX(-26rem)'}; 
  }
`;
  
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

const SideListContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

const SideNavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 -2rem;
`;

const SideNavItem = styled.li`
  display: flex;
  padding: 1rem 2rem;
  font-family: 'Betm Light';
  font-size: 1.25rem;
  border-top: ${props => props.border ? '1px solid hsla(0,0%,0%,0.1)' : 'none'};
  color: #79CEA7;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

const SideNavItemLabel = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const CloseNavRow = styled.div`
`;


const SideNavigation = (props) => {
  
  let { isActive, toggleSideNav } = props;
  return (
    <Container pose={isActive ? 'active' : 'exit' }>
      <CloseNavRow>
        <Icon src={HamburgerMenuClose} alt="Close navigation" bColor={"#79CEA7"} padding={"1rem"} onClick={toggleSideNav}></Icon>
      </CloseNavRow>
      <SideListContainer>
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
        <SideNavList>
          <SideNavItem>
            <IconContainer>
              <Icon src={AccountIcon} alt="Account" width="25px" height="25px"></Icon>
            </IconContainer>
            <SideNavItemLabel>Mon Compte</SideNavItemLabel>
          </SideNavItem>
          <SideNavItem border>
            <IconContainer>
              <Icon src={SettingsIcon} alt="Account" width="25px" height="25px"></Icon>
            </IconContainer>
            <SideNavItemLabel>Réglages</SideNavItemLabel>
          </SideNavItem>
        </SideNavList>
      </SideListContainer>
    </Container>
  );
};

export { SideNavigation };