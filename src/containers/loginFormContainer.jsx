import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { Redirect }               from 'react-router-dom';

import {
  login,
  signup
}                                 from '../redux/authentification/actions-creators';
import { LoginForm }              from '../components/index';


class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.state = {
      currentForm: 'login'
    };
  }

  handleChangeForm(newForm) {
    this.setState({ currentForm: newForm });
  }

  async handleLoginSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    this.props.login({ email, password });
  }

  async handleRegisterSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirm = event.target.passwordConfirm.value;

    this.props.signup({ email, password, passwordConfirm });
  }

  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/"></Redirect>
    } else {
      return (
        <LoginForm
          {...this.state}
          {...this.props}
          handleLoginSubmit={this.handleLoginSubmit}
          handleRegisterSubmit={this.handleRegisterSubmit}
          handleChangeForm={this.handleChangeForm}
        ></LoginForm>
      );
    }
  }

};


const mapStateToProps = ({ authentificationReducer }) => {
  const { showSpinner, isLoggedIn, errors } = authentificationReducer;
  return {
    showSpinner,
    isLoggedIn,
    errors
  };
};


export default connect(
  mapStateToProps,
  {
    login,
    signup
  }
)(LoginFormContainer);
