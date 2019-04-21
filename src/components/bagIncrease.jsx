import React from 'react';
import styled from 'styled-components';

import { AnimatedButton } from './button';
import { Button } from './button';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const BagValue = styled.input.attrs({ type: 'number' })`
  width: 100%;
  min-width: 50px;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  font-family: 'Betm Medium';
  font-size: 2rem;
  border: none;
  background-color: hsl(0,0%,95%);
  color: #79CEA7;

  &::after {
    content: 'g';
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none; 
  }

  &:focus {
    outline: none;
  }
`;

const CustomButton = styled(Button)`
  @media (min-width: 768px) {
    margin-top: 1rem;
    flex-grow: 1;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const CompoundPriceLabel = styled.span`
  margin-right: .5rem;
  font-family: 'Betm Light';
  font-size: .85rem;
`;

const CompoundPrice = styled.span`
  padding: .5rem 0;
  font-family: 'Betm Book';
  font-size: 1.25rem;
  color: hsl(0,0%,80%);
`;

export const BagIncrease = props => {
  let { currentBag, handleIncreaseBag, handleDecreaseBag, handleAddToCart, handleSetBag, compoundPrice } = props;

  return (
    <FormContainer onSubmit={e => handleAddToCart(e, compoundPrice)}>
      <CompoundPrice>
        <CompoundPriceLabel>Prix cumulé:</CompoundPriceLabel>{compoundPrice}€
      </CompoundPrice>
      <Wrapper>
        <AnimatedButton type="button" fontSize='2rem' onClick={handleDecreaseBag} style={{borderRadius: "5px 0 0 5px"}}>-</AnimatedButton>
        <BagValue name="bag" value={currentBag} onChange={handleSetBag}></BagValue>
        <AnimatedButton type="button" fontSize='2rem' onClick={handleIncreaseBag} style={{borderRadius: "0 5px 5px 0"}}>+</AnimatedButton>
      </Wrapper>
      <CustomButton type="submit" fontSize='1.25rem'>AJOUTER AU PANIER</CustomButton>
    </FormContainer>
  );
};
