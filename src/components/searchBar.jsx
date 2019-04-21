import React from 'react';
import styled from 'styled-components';
import Pose from 'react-pose';

import SearchIcon from '../assets/icons/search-icon.svg';
import CloseSearchIcon from '../assets/icons/close-search-icon.svg';
import { Button } from './button';

const AnimatedSearchBar = Pose.form({
  active: {
    width: '100%',
    opacity: 1,
    applyAtStart: {
      display: 'inline-flex'
    }
  },
  idle: {
    width: 0,
    opacity: 0,
    applyAtStart: {
      display: 'none'
    }
  }
});

const Container = styled(AnimatedSearchBar)`
  display: none;
`;

const SearchField = styled.input.attrs(props => ({ type: 'text', placeholder: props.placeholder }))`
  width: 100%;
  padding: .75rem 1rem;
  border: none;
  border-radius: 5px 0 0 5px;
  color: white;
  font-family: 'Betm Light';
  font-size: 1rem;
  background-color: #6BB592;
  text-overflow: ellipsis;

  &::placeholder {
    color: white;
  }
`;

const Icon = styled.img`
  transition: transform .2s ease-out;
  margin-right: ${props => props.mRight || 0};

  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0 5px 5px 0;
  background-color: #6BB592;
`;

export const SearchBar = ({ isActive, handleClose }) => {
  return (
    <>
      <Container pose={isActive ? 'active' : 'idle'}>
        <Icon src={CloseSearchIcon} alt="Rechercher des produits" width="16px" onClick={handleClose} mRight={"1rem"}></Icon>
        <SearchField placeholder="Haschich naturel, pipe à eau...">
        </SearchField>
        <StyledButton>
          <Icon src={SearchIcon} alt="" width={"16px"}></Icon>
        </StyledButton>
      </Container>
    </>
  );
};
