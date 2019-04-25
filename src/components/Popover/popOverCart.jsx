import React                            from 'react';
import styled                           from 'styled-components';
import Pose                             from 'react-pose';
import { Link }                         from 'react-router-dom';

import { Button, PopOverCartItem }      from '../index';
import EmptyListIllustration            from '../../assets/images/empty-list.png';


const Container = Pose.div({
  enter: {
    opacity: 1,
    height: 'auto',
    staggerChildren: 200,
    applyAtStart: {
      display: 'block'
    }
  },
  exit: {
    opacity: 0,
    height: 0,
    staggerChildren: 200,
    transition: {
      opacity: {
        delay: 25
      }
    },
    applyAtEnd: {
      display: 'none'
    }
  }
});

const StyledContainer = styled(Container)`
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: hsl(0,0%,98%);
  box-shadow: 0 1px 2px hsla(0,0%,10%, 0.1), 0 3px 10px hsla(0,0%,10%, 0.1);
  border-radius: 5px;
  color: hsl(0,0%,50%);

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const Header = styled.span`
  font-size: .9rem;
  color: hsl(0,0%,75%);
`;

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TotalRow = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  border-top: 1px solid hsl(0,0%,90%);
`;

const TotalLabel = styled.span`

`;

const TotalPrice = styled.span`
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const EmptyList = styled.div`
  min-width: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Betm Light';
  font-size: .9rem;
  color: hsl(0,0%,75%);
`;

const Illustration = styled.img`
  max-width: 75%;
  margin: 1.5rem;
`;


const PopOverCart = ({ isActive, handleToggle, currentCart, removeFromCart }) => {
  return (
    <StyledContainer pose={ isActive ? 'enter' : 'exit' }>
      <Header>Mon panier</Header>

      { currentCart.length ?
        <>
          <ItemsList>
            { currentCart.map((cartProduct, i) => <PopOverCartItem {...cartProduct} removeFromCart={removeFromCart} key={i}></PopOverCartItem>) }
          </ItemsList>
          <TotalRow>
            <TotalLabel>Total :</TotalLabel>
            <TotalPrice>99€</TotalPrice>
          </TotalRow>
          <Link to='/checkout' onClick={handleToggle}>
            <StyledButton>Finaliser ma commande</StyledButton>
          </Link>
        </>
        : 
        <EmptyList>
          <Illustration src={EmptyListIllustration}></Illustration>
          <p>Votre panier est vide... <br/> pour l'instant !</p>
        </EmptyList>
      }

    </StyledContainer>
  );
};

export { PopOverCart };
