import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './styles/global-styles';

import ScrollTop from './components/scrollTop';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/header';
import { SideNavigation } from './components/sideNavigation';
import { Footer } from './components/footer';
import { CheckoutPage } from './pages/CheckoutPage';
import { SettingsPage } from './pages/SettingsPage';
import { LoginPage } from './pages/LoginPage';

import { Provider } from 'react-redux';
import { store } from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyles/>
        <Router>
          <ScrollTop>
            <Route exact path="/" component={Home} />
            <Switch>
              <Route path="/products/" component={ProductPage} />
              <Route path="/checkout/" component={CheckoutPage} />
              <Route path="/settings/" component={SettingsPage} />
              <Route path="/login/" component={LoginPage} />
            </Switch>
          </ScrollTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
