import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Row = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  overflow-x: scroll;
  scrollbar-width: none;
 
  &::-webkit-scrollbar {
    width: 0 !important
  };

  a:first-child > li {
    padding-left: 0;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem,12rem));
    grid-column-gap: 1rem;
    grid-row-gap: 3rem;
    margin: 0 -1.5rem;
    padding: 1rem 4rem;
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
