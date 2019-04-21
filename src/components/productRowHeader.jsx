import React, { Component } from 'react';
import styled from 'styled-components';
import Pose from 'react-pose';

import SortIcon from '../assets/icons/SortIcon.svg';
import MoreActionsIcon from '../assets/icons/MoreActionsIcon.svg';
import { MobileBreakpoint, TabletBreakpoint,DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';
import { PopOverMenu } from './popOverMenu';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  margin-left: -2rem;
  margin-right: -2rem;
  box-shadow: 0 3px 6px -15px rgba(0,0,0,0.16), 0 3px 6px -4px rgba(0,0,0,0.23);

  @media (min-width: 1024px) {
    box-shadow: none;
  }
`;

const TitleColumn = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  letter-spacing: -.05rem;
  color: #79CEA7;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const SettingsColumn = styled.div`
  position: relative;
`;

const PressedIcon = Pose.div({
  pressable: true,
  init: {
    backgroundColor: 'transparent',
    height: 25
  },
  press: {
    backgroundColor: 'hsl(0,0%,0%)',
    height: 75
  }
});

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin-right: ${props => props.mRight || 0};

  &:hover {
    cursor: pointer;
  }
`;

export class ProductRowHeader extends Component {
  constructor(props) {
    super(props);
    this.showSortingPopover = this.showSortingPopover.bind(this);
    this.showMoreActionsPopover = this.showMoreActionsPopover.bind(this);
    this.state = {
      isSortingPopoverActive: false,
      isMoreActionPopoverActive: false
    };
  }

  showSortingPopover() {
    this.setState(prevState => {
      if (prevState.isMoreActionPopoverActive) {
        return {
          isMoreActionPopoverActive: !prevState.isMoreActionPopoverActive,
          isSortingPopoverActive: !prevState.isSortingPopoverActive
        }
      } else {
        return {
          isSortingPopoverActive: !prevState.isSortingPopoverActive
        }
      }
    });
  }

  showMoreActionsPopover() {
    this.setState(prevState => {
      if (prevState.isSortingPopoverActive) {
        return {
          isSortingPopoverActive: !prevState.isSortingPopoverActive,
          isMoreActionPopoverActive: !prevState.isMoreActionPopoverActive
        }
      } else {
        return {
          isMoreActionPopoverActive: !prevState.isMoreActionPopoverActive
        }
      }
    });
  }

  render() {

    let { title, iconSrc, onStart, onEnd } = this.props;
    return (
      <Container>
  
        <MobileBreakpoint>
          <TitleColumn>
            <Icon src={iconSrc} width="1.5rem" mRight={"1rem"}></Icon>
            <Title>{title}</Title>
          </TitleColumn>
          <SettingsColumn>
            <PressedIcon onPressStart={onStart}>
              <Icon src={SortIcon} mRight={"2rem"} onClick={this.showSortingPopover}></Icon>
              <PopOverMenu isActive={this.state.isSortingPopoverActive} headerText={"Trier par :"}></PopOverMenu>
              <Icon src={MoreActionsIcon} mRight={"1rem"} onClick={this.showMoreActionsPopover}></Icon>
              <PopOverMenu isActive={this.state.isMoreActionPopoverActive} headerText={"Plus d'actions"}></PopOverMenu>
            </PressedIcon>
          </SettingsColumn>
        </MobileBreakpoint>
  
        <TabletBreakpoint>
          <TitleColumn>
            <Icon src={iconSrc} width="2rem" mRight={"1rem"}></Icon>
            <Title>{title}</Title>
          </TitleColumn>
          <SettingsColumn>
            <Icon src={SortIcon} mRight={"1rem"} onClick={this.showSortingPopover}></Icon>
            <PopOverMenu isActive={this.state.isSortingPopoverActive} headerText={"Trier par :"}></PopOverMenu>
            <Icon src={MoreActionsIcon} onClick={this.showMoreActionsPopover}></Icon>
            <PopOverMenu isActive={this.state.isMoreActionPopoverActive} headerText={"Plus d'actions"}></PopOverMenu>
          </SettingsColumn>
        </TabletBreakpoint>
  
        <DesktopBreakpoint>
          <TitleColumn>
            <Icon src={iconSrc} width="2rem" mRight={"1rem"}></Icon>
            <Title>{title}</Title>
          </TitleColumn>
          <SettingsColumn>
            <Icon src={SortIcon} mRight={"1rem"} onClick={this.showSortingPopover}></Icon>
            <PopOverMenu isActive={this.state.isSortingPopoverActive} headerText={"Trier par :"}></PopOverMenu>
            <Icon src={MoreActionsIcon} onClick={this.showMoreActionsPopover}></Icon>
            <PopOverMenu isActive={this.state.isMoreActionPopoverActive} headerText={"Plus d'actions"}></PopOverMenu>
          </SettingsColumn>
        </DesktopBreakpoint>
  
      </Container>
    );
  }
}
