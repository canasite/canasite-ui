import React from 'react';
import styled from 'styled-components';
import Pose from 'react-pose';
import { withRouter } from 'react-router-dom';

import BackIcon from '../assets/icons/BackIcon.svg';

const Container = styled.nav`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
  }
`;

const AnimatedIcon = Pose(Icon)({
  hoverable: true,
  init: {
    x: 0
  },
  hover: {
    x: 8
  }
});

const Label = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  letter-spacing: -.015rem;
  color: #79CEA7;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BreadcrumbComponent = ({ label, history }) => {
  return (
    <Container onClick={history.goBack}>
      <AnimatedIcon src={BackIcon} alt="Retour"></AnimatedIcon>
      <Label>{label}</Label>
    </Container>
  );
};

export const Breadcrumb = withRouter(BreadcrumbComponent);
