import React from 'react';
import styled from 'styled-components';
import { MobileBreakpoint, TabletBreakpoint, DesktopBreakpoint } from '../layout/responsive-utilites/responsive-wrappers';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: .25rem 0;
  color: ${props => props.isSelected ? '#79CEA7' : 'hsl(0,0%,70%)'};
  font-family: ${props => props.isSelected ? 'Betm Book' : 'Betm Light'};
  font-size: 1rem;
`;

const Radio = styled.input.attrs(props => ({
    type: "radio",
    name: "Adress",
    value: props.label,
  }))`

  margin-right: .5rem;
  /* visibility: hidden; */
  color: ${props => props.checked ? '#79CEA7' : 'hsl(0,0%,70%)'};
`;

const AdressDetail = styled.p`
  font-size: .85rem;
  color: ${props => props.isSelected ? '#79CEA7' : 'hsl(0,0%,70%)'};
`;

export const CheckoutAdress = (props) => {
  let { label, isSelected, handleChange } = props;
  return (
    <Container>
      <Label {...props}>
        <Radio checked={isSelected} value={label} onChange={handleChange}/>
        {label}
      </Label>
      <AdressDetail {...props}>58 rue de Perche <br/> 75015 Paris </AdressDetail>
    </Container>
  );
};