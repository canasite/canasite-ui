import React from 'react';
import styled from 'styled-components';
import SortIcon from '../assets/icons/SortIcon.svg';
import MoreActionsIcon from '../assets/icons/MoreActionsIcon.svg';
import { MobileBreakpoint, TabletBreakpoint,DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    box-shadow: 0 3px 6px -15px rgba(0,0,0,0.16), 0 3px 6px -4px rgba(0,0,0,0.23);
  }
`;

const RowTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: -.05rem;
  color: #79CEA7;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  margin-top: ${props => props.mTop || 0};
  margin-bottom: ${props => props.mBot || 0};
  margin-left: ${props => props.mLeft || 0};
  margin-right: ${props => props.mRight || 0};
  padding-top: ${props => props.pTop || 0};
  padding-bottom: ${props => props.pBot || 0};
  padding-left: ${props => props.pLeft || 0};
  padding-right: ${props => props.pRight || 0};
`;

export const ProductRowHeader = ({ title, iconSrc }) => {
  return (
    <Container>
      <RowTitle>
        <MobileBreakpoint>
          <Icon src={iconSrc} width="24px" mRight="8px"></Icon>
        </MobileBreakpoint>
        <TabletBreakpoint>
          <Icon src={iconSrc} width="32px" mRight="8px"></Icon>
        </TabletBreakpoint>
        <DesktopBreakpoint>
          <Icon src={iconSrc} width="32px" mRight="8px"></Icon>
        </DesktopBreakpoint>
        {title}
      </RowTitle>
      <div>
        <Icon src={SortIcon} pRight={"1rem"}></Icon>
        <Icon src={MoreActionsIcon}></Icon>
      </div>
    </Container>
  );
}
