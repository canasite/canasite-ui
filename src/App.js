import React, { Component }                                               from 'react';
import { Provider }                                                       from 'react-redux';
import { store }                                                          from './redux/store';
import { BrowserRouter as Router, Route, Switch }                         from "react-router-dom";
import { GlobalStyles }                                                   from './styles/global-styles';

import { ScrollTop }                                                      from './components/index.js';
import { Home, ProductPage, CheckoutPage, SettingsPage, LoginPage }       from './pages/index';


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
