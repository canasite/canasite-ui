import React from 'react';
import styled from 'styled-components';

const Header = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const Avatar = styled.span`
  font-size: 5rem;
  border: 2px solid hsl(0,0%,80%);
  border-radius: 5px;
`;

export const SettingsHeader = () => {
  return (
    <Header>
      <Avatar>🕵️‍♀️</Avatar>
    </Header>
  );
};
