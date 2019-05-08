import React                                                      from 'react';
import styled                                                     from 'styled-components';


const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: ${props => props.isSelected ? '5px' : 0};
  background-color: ${props => props.isSelected ? 'hsla(152, 46%, 64%, 0.1)' : 'transparent'};

  @media (min-width: 1024px) {
    height: 4rem;
  }
`;

const Radio = styled.input.attrs(props => ({
    type: "radio",
    name: "Adress",
    value: props.label,
  }))`

  position: relative;
  margin-right: .75rem;
  color: ${props => props.checked ? '#79CEA7' : 'hsl(0,0%,70%)'};

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: hsl(0,0%,95%);
  }

  &::after {
    display: ${props => props.checked ? 'block': 'none'};
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #79CEA7;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: .25rem 0;
  color: ${props => props.isSelected ? '#79CEA7' : 'hsl(0,0%,70%)'};
  font-family: ${props => props.isSelected ? 'Betm Book' : 'Betm Light'};
  font-size: ${props => props.isSelected ? '1.5rem' : '1rem'};

  @media (min-width: 768px) {
    font-size: ${props => props.isSelected ? '1.75rem' : '1.25rem'};
  }
`;

const AdressDetail = styled.p`
  text-align: right;
  font-family: ${props => props.isSelected ? 'Betm Book' : 'Betm Light'};
  font-size: .85rem;
  color: ${props => props.isSelected ? '#79CEA7' : 'hsl(0,0%,70%)'};

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;


const CheckoutAdress = (props) => {
  let { place, street, city, index, selectedAdressIndex, handleChange } = props;
  const isSelected = index === selectedAdressIndex;

  return (
    <Container isSelected={isSelected} onClick={e => handleChange(e, index)}>
      <Label isSelected={isSelected}>
        <Radio checked={isSelected} value={place} onChange={e => handleChange(e, index)}/>
        {place}
      </Label>
      <AdressDetail isSelected={isSelected}>{street}<br/>{city}</AdressDetail>
    </Container>
  );
};

export { CheckoutAdress };
