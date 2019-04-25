import React          from 'react';
import styled         from 'styled-components';

import StarFilled     from '../../assets/icons/star-filled-icon.svg';
import StarEmpty      from '../../assets/icons/star-empty-icon.svg';


const Container = styled.div`
  display: flex;

  &:hover {
    cursor: ${props => props.clickable ? 'pointer' : 'initial'};
  }
`;

const Star = styled.img`
  padding: 0 .1rem;
`;


const RatingStars = (props) => {
  let { clickable } = props;
  
  return (
    <Container clickable={clickable}>
      <Star src={StarFilled}></Star>
      <Star src={StarFilled}></Star>
      <Star src={StarFilled}></Star>
      <Star src={StarFilled}></Star>
      <Star src={StarEmpty}></Star>
    </Container>
  );
}

export { RatingStars };
