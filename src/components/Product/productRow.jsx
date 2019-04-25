import React                                                            from 'react';
import styled                                                           from 'styled-components';


const Row = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  overflow-x: scroll;
  scrollbar-width: none;
 
  &::-webkit-scrollbar {
    width: 0 !important
  };

  a:first-child > li {
    padding-left: 0;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem,12rem));
    grid-column-gap: 1rem;
    grid-row-gap: 3rem;
    margin: 0 -1.5rem;
    padding: 1rem 4rem;
  }
`;


const ProductRow = ({ children }) => {
  return (
    <Row>{children}</Row>
  );
};

export { ProductRow };
