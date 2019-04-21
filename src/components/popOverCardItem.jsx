import React from 'react';
import styled from 'styled-components';
import Pose from 'react-pose';
import CloseIcon from '../assets/icons/close-icon.svg';

const Container = styled.li`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  padding: 1rem 0;
`;

const ProductDetails = styled.div`
`;

const ProductName = styled.p`
  margin-bottom: .25rem;
  color: hsl(0,0%,50%);
`;

const Quantity = styled.span`
  color: hsl(0,0%,70%);
`;

const ProductPrice = styled.span`
  color: hsl(0,0%,40%);
`;

const AnimatedClose = Pose.img({
  hoverable: true,
  init: {
    scale: 0.75,
    opacity: 0.5
  },
  hover: {
    scale: 1,
    opacity: 1
  }
});

const Close = styled(AnimatedClose)`
  margin-left: 1rem;
`;

export const PopOverCardItem = ({ productName, quantity }) => {
  return (
    <Container>
      <Item>
        <ProductDetails>
          <ProductName>
            {productName}
          </ProductName>
          <Quantity>
            {quantity}g
          </Quantity>
        </ProductDetails>
        <ProductPrice>33€</ProductPrice>
      </Item>
      <Close src={CloseIcon}></Close>
    </Container>
  );
};
