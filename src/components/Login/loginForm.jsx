import React                   from 'react';
import styled                  from 'styled-components';

import { Button, Spinner }     from '../index';


const Container = styled.div`
`;

const FormContainer = styled.form`
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
`;

const EmailInput = styled.input.attrs(props => ({
  type: 'email',
  placeholder: props.placeholder,
  autoComplete: 'true'
}))`
  display: block;
  min-width: 300px;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: ${props => props.hasError && props.errorType === 'e-mail' ? '1px solid red' : 'none' };
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

  border: ${props => props.hasError && props.errorType === 'mot de passe' ? '1px solid red' : 'none' };
`;

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
`;

const Lost = styled.a`
  display: block;
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

const ErrorMessage = styled.p`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
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

const FormSelector = styled.div`
  margin-bottom: 2rem;
`;

const FormOption  = styled.span`
  display: inline-block;
  padding: .75rem 0;
  color: ${props => props.currentForm ? 'inherit' : 'grey'};
  border-bottom: ${props => props.currentForm ? '2px solid #79CEA7' : 'none'};

  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Condition = styled.label`
  display: flex;
  align-items: flex-start;
  max-width: 18rem;
  margin-bottom: .5rem;
`;

const ConditionText = styled.span`
  font-size: .85rem;
  color: hsla(0,0%,0%,0.25);
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: .5rem;
  margin-top: 0;
`;


const LoginForm = props => {

  const { hasError, errorMessage, errors, handleLoginSubmit, handleRegisterSubmit, handleChangeForm, currentForm, showSpinner } = props;

  if (showSpinner) {
    return (
      <SpinnerContainer>
        <Spinner></Spinner>
      </SpinnerContainer>
    );
  } else {
    return (
      <Container>
        <FormSelector>
          <FormOption currentForm={currentForm === 'login'} onClick={e => handleChangeForm('login')}>Se connecter</FormOption>
          <FormOption currentForm={currentForm === 'register'} onClick={e =>  handleChangeForm('register')}>Créer un compte</FormOption>
        </FormSelector>

        { currentForm === 'login' &&
          <FormContainer onSubmit={e => handleLoginSubmit(e)}>
            <FormField>
              <Label>E-mail</Label>
              { errors.email && <ErrorMessage>{ errors.email }</ErrorMessage> }
              <EmailInput {...props} name="email" placeholder='Veuillez entrer votre e-mail'></EmailInput>
            </FormField>
            <FormField>
              <Label>Mot de passe</Label>
              { errors.password && <ErrorMessage>{ errors.password }</ErrorMessage> }
              <PasswordInput {...props} name="password" placeholder='Veuillez entrer votre mot de passe'></PasswordInput>
            </FormField>
            <Lost>Mot de passe oublié ?</Lost>

            { showSpinner && <Spinner></Spinner> }

            <StyledButton type="submit">Se connecter</StyledButton>
          </FormContainer>
        }

        { currentForm === 'register' &&
          <FormContainer onSubmit={e => handleRegisterSubmit(e)}>
            <FormField>
              <Label>E-mail</Label>
              { errors.email && <ErrorMessage>{ errors.email }</ErrorMessage> }
              <EmailInput {...props} name="email" placeholder='Veuillez entrer votre e-mail'></EmailInput>
            </FormField>
            <FormField>
              <Label>Mot de passe</Label>
              { errors.password && <ErrorMessage>{ errors.password }</ErrorMessage> }
              <PasswordInput {...props} name="password" placeholder='Veuillez entrer votre mot de passe'></PasswordInput>
            </FormField>
            <FormField>
              <Label>Confirmer votre mot de passe</Label>
              { errors.passwordConfirm && <ErrorMessage>{ errors.passwordConfirm }</ErrorMessage> }
              <PasswordInput {...props} name="passwordConfirm" placeholder='Veuillez entrer votre mot de passe'></PasswordInput>
            </FormField>
            <Lost onClick={e => handleChangeForm('login')}>Déjà inscrit? Se connecter</Lost>
            { hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null }
            <Condition>
              <CheckBox name={"privacyChecked"}></CheckBox>
              <ConditionText>
                I agree to the processing of personal data and Privacy Policy.
              </ConditionText>
              </Condition>
            <Condition>
              <CheckBox name={"disclosureChecked"}></CheckBox>
              <ConditionText>
                I have read, understand and accept Risks Disclosure and take full responsibility associated with our products.
                </ConditionText>
              </Condition>
            <Condition>
              <CheckBox name={"newsletterChecked"}></CheckBox>
              <ConditionText>
                I want to receive the latest news from Canasite.
                </ConditionText>
              </Condition>
            <StyledButton type="submit">S'inscrire</StyledButton>
          </FormContainer>
        }

      </Container>
    );
  }
};

export { LoginForm };
