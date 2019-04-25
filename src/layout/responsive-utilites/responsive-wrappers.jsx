import React              from 'react';
import MediaQuery         from 'react-responsive';
import { breakpoints }    from './breakpoints';


const MobileBreakpoint = ({ children }) => {
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
const TabletBreakpoint = ({ children }) => {
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

const DesktopBreakpoint = ({ children }) => {
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

export {
  MobileBreakpoint,
  TabletBreakpoint,
  DesktopBreakpoint
};
