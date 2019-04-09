import React, { Component } from 'react';
import styled from 'styled-components';

import { AnimatedButton } from './button';

const Container = styled.form`
  display: flex;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const BagValue = styled.input.attrs({ type: 'number'})`
  width: 100%;
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

  @media (min-width: 768px) {
    width: 8rem;
  }

`;

export class BagIncrease extends Component {
  constructor(props) {
    super(props);
    this.increaseBag = this.increaseBag.bind(this);
    this.decreaseBag = this.decreaseBag.bind(this);
    this.state = {
      currentBag: 0
    };
  }

  increaseBag(e) {
    e.preventDefault();
    this.setState(prevState => ({ currentBag: prevState.currentBag + 1}))
  }

  decreaseBag(e) {
    e.preventDefault();
    this.setState(prevState => { 
      if (prevState.currentBag <= 0) return;
      return {
        currentBag: prevState.currentBag - 1
      };
    });
  }

  render() {
    return (
      <Container>
        <AnimatedButton fontSize='2rem' onClick={this.decreaseBag} style={{borderRadius: "5px 0 0 5px"}}>-</AnimatedButton>
        <BagValue value={this.state.currentBag}></BagValue>
        <AnimatedButton fontSize='2rem' onClick={this.increaseBag} style={{borderRadius: "0 5px 5px 0"}}>+</AnimatedButton>
      </Container>
    );
  }
}