import React, { Component }     from 'react';
import { connect }              from 'react-redux';

import { removeFromCart }       from '../redux/actions/action-creators';
import { PopOverCart }          from '../components/index';


const mapStateToProps = (state, ownProps) => {
  const { currentCart } = state;
  return {
    currentCart,
    ...ownProps
  }
}


class PopOverCartContainer extends Component {
  render() {
    return (
      <PopOverCart {...this.props}></PopOverCart>
    );
  }
}

export default connect(
  mapStateToProps,
  { removeFromCart }
)(PopOverCartContainer);
