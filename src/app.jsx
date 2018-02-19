import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './reset.scss';

import Header from './components/Header';
import Login from './components/Login';

import { getUser } from './actions/user';

const mapStateToProps = (state) => {
  const user = getUser(state);
  return ({
    firstName: _.get(user, 'firstName'),
    lastName: _.get(user, 'lastName'),
  });
};

// const mapDispatchToProps (dispatch) => {
//
// };

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <Header firstName={firstName} lastName={lastName} />
        <main>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
App.defaultProps = {
  firstName: null,
  lastName: null,
};

export default connect(mapStateToProps)(App);
