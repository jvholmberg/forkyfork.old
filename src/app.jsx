import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './reset.scss';

import Header from './components/Header';
import Landing from './pages/Landing';
import Login from './pages/Login';

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

const GetCurrentPath = props => props.location.pathname;

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <Header firstName={firstName} lastName={lastName} current={GetCurrentPath(this.props)} />
        <main>
          <Route exact path="/" component={Landing} />
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

export default withRouter(connect(mapStateToProps)(App));
