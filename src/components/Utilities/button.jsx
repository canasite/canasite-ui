import React    from 'react';
import styled   from 'styled-components';
import Pose     from 'react-pose';


const StyledButton = styled.button`
  margin: ${props => props.margin || '0'};
  padding: .75rem 1.25rem;
  border: ${props => props.border || 'none'};
  font-family: 'Betm Book';
  font-size: ${props => props.fontSize || '1rem'};
  border-radius: .5rem;
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


const Button = (props) => {
  return (
    <StyledButton {...props}></StyledButton>
  );
};

const AnimatedButton = (props) => {
  return (
    <StyledAnimatedButtonComponent {...props}></StyledAnimatedButtonComponent>
  );
};

export {
  Button,
  AnimatedButton
};
