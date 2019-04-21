import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  padding: 1rem;
  color: hsl(0,0%,20%);

  &:not(:last-child) {
    border-bottom: 1px solid hsl(0,0%,90%);
  }
`;

export const PopOverItem = ({ label }) => {
  return (
    <Item>{label}</Item>
  );
};
