import React, { Component }     from 'react';
import styled                   from 'styled-components';

import { Comment }              from '../index';
import CommentsIcon             from '../../assets/icons/comments-icon.svg';


const Container = styled.section`
  padding: 2rem 0;
  border-top: 1px solid hsl(0,0%,90%);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const HeaderTitle = styled.p`
  font-size: 1.75rem;
  color: hsl(0,0%,50%);
`;

const Icon = styled.img`
  margin-right: 1rem;
`;

const CommentsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


class CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          author: 'Chris',
          rating: 4,
          title: 'Parfait !',
          comment: 'La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique. Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.'
        },
        {
          author: 'Marie',
          rating: 4,
          title: 'Excellent',
          comment: 'La Bubble Gum CBD de chez est un cannabis Suisse à haut taux de CBD ayant un goût intense et aromatique. Ce cannabis est un produit de haute qualité contenant des valeurs de CBD entre 10-15% selon les récoltes.'
        }
      ]
    };
  }


  render() {
    return (
      <Container>
        <Header>
          <Icon src={CommentsIcon} alt="Comments"></Icon>
          <HeaderTitle>Ce qu'en pensent nos clients</HeaderTitle>
        </Header>
        <CommentsContainer>
          {this.state.comments.map((comment, i) => <Comment {...comment} key={i}></Comment>)}
        </CommentsContainer>
      </Container>
    );
  }
};

export { CommentsSection };
