import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Row = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 .5rem;
  overflow-x: scroll;
  overflow-x: -ms-overflow-style: none;
  scrollbar-width: none;
 
  &::-webkit-scrollbar {
    width: 0 !important
  };

  @media (min-width: 768px) {
    overflow-x: hidden;
    margin: 0 -1rem;
    padding: 1rem 0;
  }
`;

export const ProductRow = ({ children }) => {
  return (
    <>
      <MobileBreakpoint>
        <Row>{children}</Row>
      </MobileBreakpoint>
      <TabletBreakpoint>
        <Row>{children}</Row>
      </TabletBreakpoint>
      <DesktopBreakpoint>
        <Row>{children}</Row>
      </DesktopBreakpoint>
    </>
  );
};