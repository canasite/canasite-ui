import React          from 'react';
import styled         from 'styled-components';

import StarFilled     from '../../assets/icons/star-filled-icon.svg';
import StarEmpty      from '../../assets/icons/star-empty-icon.svg';


const Container = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const Star = styled.img`
  padding: 0 .1rem;
`;


const RatingStars = (props) => {
  return (
    <Container>
      <Star src={StarFilled}></Star>
      <Star src={StarFilled}></Star>
      <Star src={StarFilled}></Star>
      <Star src={StarFilled}></Star>
      <Star src={StarEmpty}></Star>
    </Container>
  );
}

export { RatingStars };
