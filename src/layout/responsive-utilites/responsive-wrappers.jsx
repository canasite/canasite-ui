import React from 'react';
import MediaQuery from 'react-responsive';
import { breakpoints } from './breakpoints';

export const MobileBreakpoint = ({ children }) => {
  return (
    <MediaQuery query={breakpoints.mobile}>
      {matches => {
        if (matches) {
          return children
        } else return null;
      }}
    </MediaQuery>
  );
}
export const TabletBreakpoint = ({ children }) => {
  return (
    <MediaQuery query={breakpoints.tablet}>
      {matches => {
        if (matches) {
          return children
        } else return null;
      }}
    </MediaQuery>
  );
}

export const DesktopBreakpoint = ({ children }) => {
  return (
    <MediaQuery query={breakpoints.desktop}>
      {matches => {
        if (matches) {
          return children
        } else return null;
      }}
    </MediaQuery>
  );
}
