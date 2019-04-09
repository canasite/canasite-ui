import React from 'react';
import styled from 'styled-components';

import { RatingStars } from './ratingStars';

const Container = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const Pseudo = styled.span`
  font-size: 1.15rem;
  color: hsl(0,0%,75%);
  margin-bottom: .5rem;
`;

const CommentWrapper = styled.div`
  padding-top: 1rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    padding-right: 2rem;
  }
`;

const CommentTitle = styled.span`
  display: block;
  margin-bottom: .5rem;
  font-size: 1.25rem;
  color: hsl(0,0%,60%);
`;

const CommentBody = styled.p`
  font-family: 'Betm Extralight';
  color: hsl(0,0%,75%);
`;

export const Comment = ({ author, title, comment, rating}) => {
  return (
    <Container>
      <Pseudo>{author}</Pseudo>
      <RatingStars></RatingStars>
      <CommentWrapper>
        <CommentTitle>
          {title}
        </CommentTitle>
        <CommentBody>
          {comment}
        </CommentBody>
      </CommentWrapper>
    </Container>
  );
};