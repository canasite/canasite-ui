import React        from 'react';
import styled       from 'styled-components';

import NextIcon     from '../../assets/icons/nextArrow.svg';


const Wrapper = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || 0};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  vertical-align: middle;
`;

const Label = styled.p`
  padding-top: .5rem;
  color: #79CEA7;
  font-family: 'Betm Extralight';
  font-size: .75rem;
`;


const MoreButton = ({ label = 'Voir plus', ...props }) => {
  return (
    <Wrapper {...props}>
      <Container>
        <Icon src={NextIcon} alt="Voir plus"></Icon>
        <Label>{label}</Label>
      </Container>
    </Wrapper>
  );
};

export { MoreButton };
