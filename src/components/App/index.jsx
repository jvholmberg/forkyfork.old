import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from '../Header/';
import Navigation from '../Navigation/';
import Login from '../Login/';

import { userValidation } from '../../reducers/user';

const mapStateToProps = (state) => {
  console.log(userValidation);
  console.log(state);
  return null;
};

// const mapDispatchToProps (dispatch) => {
//
// };

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    const { userDetails } = this.props;
    return (
      <div>
        <Header user={userDetails} />
        <Navigation />
        <main>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

App.propTypes = userValidation;
App.defaultProps = {
  userDetails: {},
};

export default connect(mapStateToProps)(App);
