import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  align-items: center;
  padding: .25rem 0;

  @media (max-width: 1024px) {
    &:not(:last-child) {
      border-bottom: 1px solid hsl(0,0%,90%);
    }
  }
`;

const Icon = styled.div`
  width: ${props => props.width || "20px"};
  height: 20px;
  padding: 2rem 2.5rem;
  background: ${props =>`url(${props.src}) center no-repeat`};

  @media (min-width: 768px) {
    padding: 3rem 3.5rem;
  }
`;

const TextContainer = styled.div`
  padding: .5rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const Setting = styled.p`
  font-size: 1.15rem;
  color: hsl(0,0%,50%);
  margin-bottom: .15rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hint = styled.p`
  font-family: 'Betm Light';
  font-size: .75rem;
  color: hsl(0,0%,70%);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const SettingsSection = ({setting, hint, icon}) => {
  return (
    <Container>
      <Icon src={icon.src} width={icon.width}></Icon>
      <TextContainer>
        <Setting>{setting}</Setting>
        <Hint>{hint}</Hint>
      </TextContainer>
    </Container>
  );
};
