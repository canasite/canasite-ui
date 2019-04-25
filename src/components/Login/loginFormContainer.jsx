import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { Redirect }               from 'react-router-dom';

import { login }                  from '../../redux/actions/action-creators';
import { LoginForm }              from '../index';


const mapStateToProps = state => {
  const { showSpinner, isLoggedIn } = state;
  return { showSpinner, isLoggedIn }
};


class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      hasErrors: false,
      errorType: '',
    };
  }

  async handleSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    if (!email || !password) {
      await this.setState(prevState => ({ 
          hasErrors: true,
          errorType: !email ? 'e-mail' : 'mot de passe'
        })
      );
      return false;
    } else {
      await this.setState(prevState => ({ hasErrors: false }));
    }

    this.props.login({ email, password });
  }

  render() {
    let { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/"></Redirect>
    } else {
      return (
        <LoginForm {...this.state} {...this.props} handleSubmit={this.handleSubmit}></LoginForm>
      );
    }
  }

};

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
