import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    height: 4rem;
  }
`;

const Radio = styled.input.attrs(props => ({
    type: "radio",
    name: "Adress",
    value: props.label,
  }))`

  position: relative;
  margin-right: .75rem;
  color: ${props => props.checked ? '#79CEA7' : 'hsl(0,0%,70%)'};

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: hsl(0,0%,95%);
  }

  &::after {
    display: ${props => props.checked ? 'block': 'none'};
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #79CEA7;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: .25rem 0;
  color: ${props => props.isSelected ? '#79CEA7' : 'hsl(0,0%,70%)'};
  font-family: ${props => props.isSelected ? 'Betm Book' : 'Betm Light'};
  font-size: ${props => props.isSelected ? '1.5rem' : '1rem'};

  @media (min-width: 768px) {
    font-size: ${props => props.isSelected ? '1.75rem' : '1.25rem'};
  }
`;

const AdressDetail = styled.p`
  text-align: right;
  font-family: ${props => props.isSelected ? 'Betm Book' : 'Betm Light'};
  font-size: .85rem;
  color: ${props => props.isSelected ? '#79CEA7' : 'hsl(0,0%,70%)'};

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const CheckoutAdress = (props) => {
  let { label, isSelected, handleChange } = props;
  return (
    <Container>
      <Label {...props}>
        <Radio checked={isSelected} value={label} onChange={handleChange}/>
        {label}
      </Label>
      <AdressDetail {...props}>58 rue de Perche<br/> 75015 Paris </AdressDetail>
    </Container>
  );
};
