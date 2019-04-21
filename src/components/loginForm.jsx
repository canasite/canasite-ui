import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Spinner } from './spinner';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-bottom: 1.5rem;

  > p {
    margin-bottom: .5rem;
  }
`;

const EmailInput = styled.input.attrs(props => ({
  type: 'email',
  placeholder: props.placeholder
}))`
  display: block;
  min-width: 300px;
  padding: 1rem;
  border-radius: 5px;
  border: ${props => props.hasErrors && props.errorType === 'e-mail' ? '1px solid red' : 'none' };
  background-color: hsl(0,0%,95%);
  font-family: 'Betm Book';
  font-size: 1.15rem;
  line-height: 1.25rem;
  color: #6BB592;
  text-overflow: ellipsis;

  &::placeholder {
    font-family: 'Betm Light';
    font-size: .85rem;
    color: hsl(0,0%,75%);
  }

  @media (min-width: 768px) {
    font-size: 1.15rem;
    line-height: 2rem;
  }
`;

const PasswordInput = styled(EmailInput).attrs(props => ({
  type: 'password'
}))`
  border: ${props => props.hasErrors && props.errorType === 'mot de passe' ? '1px solid red' : 'none' };
`;

const CtaSection = styled.div`
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: ${props => props.margin || 0};
`;

const Lost = styled.a`
  display: inline-block;
  align-self: flex-start;
  margin-top: -.75rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  font-size: .8rem;
  letter-spacing: 0.015rem;
  color: #79CEA7;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  flex-grow: 1;

  &:first-child {
    margin-right: 1rem;
  }
`;

const ErrorMessage = styled.span`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: red;
  background-color: hsl(0, 50%, 90%);
  border-radius: 5px;
`;

const SpinnerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18.75rem;
  width: 18.75rem;
`;

export const LoginForm = (props) => {

  const { hasErrors, errorType, handleSubmit, showSpinner } = props;

  if (showSpinner) {
    return (
      <SpinnerContainer>
        <Spinner></Spinner>
      </SpinnerContainer>
    );
  } else {
    return (
      <FormContainer onSubmit={e => handleSubmit(e)}>
        <InputLabel>
          <p>E-mail</p>
          <EmailInput {...props} name="email" placeholder='Veuillez entrer votre e-mail'></EmailInput>
        </InputLabel>
        <InputLabel>
          <p>Mot de passe</p>
          <PasswordInput {...props} name="password" placeholder='Veuillez entrer votre mot de passe'></PasswordInput>
        </InputLabel>
        <Lost>Mot de passe oublié ?</Lost>
        { hasErrors && <ErrorMessage>Il y a une erreur! <br/> Veuillez fournir un {errorType} valide!</ErrorMessage>}
        { showSpinner && <Spinner></Spinner> }
        <CtaSection>
          <Buttons>
            <StyledButton margin={"0 1rem 0 0"} backgroundColor={'hsl(0,0%,85%)'}>Créer un compte</StyledButton>
            <StyledButton type="submit">Se connecter</StyledButton>
          </Buttons>
        </CtaSection>
      </FormContainer>
    );
  }
};
