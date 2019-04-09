import React from 'react';
import styled from 'styled-components';
import Pose from 'react-pose';

const StyledButton = styled.button`
  margin: ${props => props.margin || null};
  padding: .75rem 1.25rem;
  border: none;
  border-radius: 5px;
  font-family: 'Betm Book';
  font-size: ${props => props.fontSize || '1rem'};
  background-color: ${props => props.backgroundColor || '#79CEA7'};
  color: ${props => props.color || 'white'};

  &:hover {
    cursor: pointer;
    background-color: #6BB592;
  }

  &:focus {
    outline: none;
  }
`;

const StyledAnimatedButtonComponent = Pose(StyledButton)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    'background-color': '#79CEA7'
  },
  hover: {
    'background-color': '#6BB592'
  },
  press: {
    transition: {
      type: 'spring',
      stiffness: 500
    },
    scale: 0.9,
    'background-color': '#6BB592'
  }
});
export const Button = (props) => {
  return (
    <StyledButton {...props}></StyledButton>
  );
};

export const AnimatedButton = (props) => {
  return (
    <StyledAnimatedButtonComponent {...props}></StyledAnimatedButtonComponent>
  );
};