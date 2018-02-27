import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import _ from 'lodash';

import './style.scss';

import Landing from '../../pages/Landing';
import Login from '../../pages/Login';

import Box from '../Core';

import { getUser } from '../../actions/user';

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
    return (
      <div>
        <Box col12 wrapper className="Header">
          <Box col12>
            <Box col3 noPad>
              <h1>forkyfork <span className="Thin"> | Developer</span></h1>
            </Box>
            <Box col9>
              <ul className="Header_Nav">
                <NavLink
                  to="/"
                  className="Header_Nav_Item"
                  activeClassName="Header_Nav_Item_Active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/login"
                  className="Header_Nav_Item"
                  activeClassName="Header_Nav_Item_Active"
                >
                  Login
                </NavLink>
              </ul>
            </Box>
          </Box>
        </Box>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

App.propTypes = {

};
App.defaultProps = {

};

export default withRouter(connect(mapStateToProps)(App));
