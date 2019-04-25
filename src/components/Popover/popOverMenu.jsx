import React                from 'react';
import styled               from 'styled-components';
import Pose                 from 'react-pose';

import { PopOverItem }      from '../index';


const Container = Pose.ul({
  enter: {
    opacity: 1,
    height: 'auto',
    applyAtStart: {
      display: 'flex'
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    applyAtEnd: {
      display: 'none'
    },
    transition: {
      height: {
        delay: 25
      }
    }
  }
});

const StyledContainer = styled(Container)`
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: hsl(0,0%,98%);
  box-shadow: 0 1px 2px hsla(0,0%,10%, 0.1), 0 3px 10px hsla(0,0%,10%, 0.1);
  border-radius: 5px;
`;

const Header = styled.span`
  padding: 1rem;
  white-space: nowrap;
  color: hsl(0,0%,60%);
`;


const PopOverMenu = ({ isActive, headerText }) => {
  return (
    <StyledContainer pose={ isActive ? 'enter' : 'exit' }>
      <Header>{headerText}</Header>
      <PopOverItem label={'Prix'}></PopOverItem>
      <PopOverItem label={'Note'}></PopOverItem>
      <PopOverItem label={'Date'}></PopOverItem>
    </StyledContainer>
  );
};

export { PopOverMenu };
